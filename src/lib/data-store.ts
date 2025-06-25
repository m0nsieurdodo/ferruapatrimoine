import { KYCFormData, DashboardStats, ChartData, CompanyDistribution } from '@/types';

// Simulation d'une base de données Baserow avec localStorage
class DataStore {
  private static readonly STORAGE_KEY = 'kyc-demo-data';
  private static readonly STATS_KEY = 'kyc-demo-stats';

  // Récupérer toutes les données KYC
  static getAllKYCData(): KYCFormData[] {
    if (typeof window === 'undefined') return [];
    
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
      return [];
    }
  }

  // Sauvegarder une nouvelle entrée KYC
  static saveKYCData(data: Omit<KYCFormData, 'id' | 'dateCreation'>): KYCFormData {
    const newEntry: KYCFormData = {
      ...data,
      id: this.generateId(),
      dateCreation: new Date().toISOString(),
      statut: 'soumis'
    };

    const allData = this.getAllKYCData();
    allData.push(newEntry);
    
    this.saveAllData(allData);
    this.updateStats();
    
    return newEntry;
  }

  // Mettre à jour une entrée existante
  static updateKYCData(id: string, updates: Partial<KYCFormData>): KYCFormData | null {
    const allData = this.getAllKYCData();
    const index = allData.findIndex(item => item.id === id);
    
    if (index === -1) return null;
    
    const updatedEntry = {
      ...allData[index],
      ...updates,
      dateModification: new Date().toISOString()
    };
    
    allData[index] = updatedEntry;
    this.saveAllData(allData);
    this.updateStats();
    
    return updatedEntry;
  }

  // Supprimer une entrée
  static deleteKYCData(id: string): boolean {
    const allData = this.getAllKYCData();
    const filteredData = allData.filter(item => item.id !== id);
    
    if (filteredData.length === allData.length) return false;
    
    this.saveAllData(filteredData);
    this.updateStats();
    return true;
  }

  // Récupérer les statistiques du dashboard
  static getDashboardStats(): DashboardStats {
    const allData = this.getAllKYCData();
    const today = new Date().toISOString().split('T')[0];
    
    const todaySubmissions = allData.filter(
      item => item.dateCreation.split('T')[0] === today
    ).length;
    
    const validatedSubmissions = allData.filter(
      item => item.statut === 'valide'
    ).length;
    
    const pendingSubmissions = allData.filter(
      item => item.statut === 'soumis'
    ).length;

    return {
      totalSubmissions: allData.length,
      todaySubmissions,
      validatedSubmissions,
      pendingSubmissions,
      averageProcessingTime: this.calculateAverageProcessingTime(allData)
    };
  }

  // Données pour les graphiques (derniers 30 jours)
  static getChartData(): ChartData[] {
    const allData = this.getAllKYCData();
    const chartData: ChartData[] = [];
    
    // Générer les 30 derniers jours
    for (let i = 29; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      
      const daySubmissions = allData.filter(
        item => item.dateCreation.split('T')[0] === dateStr
      );
      
      const validated = daySubmissions.filter(
        item => item.statut === 'valide'
      ).length;
      
      chartData.push({
        date: dateStr,
        submissions: daySubmissions.length,
        validated
      });
    }
    
    return chartData;
  }

  // Distribution par entreprise
  static getCompanyDistribution(): CompanyDistribution[] {
    const allData = this.getAllKYCData();
    const companyCount: Record<string, number> = {};
    
    allData.forEach(item => {
      companyCount[item.entreprise] = (companyCount[item.entreprise] || 0) + 1;
    });
    
    const total = allData.length;
    
    return Object.entries(companyCount)
      .map(([entreprise, count]) => ({
        entreprise,
        count,
        percentage: total > 0 ? Math.round((count / total) * 100) : 0
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10); // Top 10 entreprises
  }

  // Recherche et filtrage
  static searchKYCData(
    searchTerm?: string,
    statut?: KYCFormData['statut'],
    entreprise?: string,
    dateDebut?: string,
    dateFin?: string
  ): KYCFormData[] {
    let data = this.getAllKYCData();
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      data = data.filter(item => 
        item.nom.toLowerCase().includes(term) ||
        item.prenom.toLowerCase().includes(term) ||
        item.email.toLowerCase().includes(term) ||
        item.entreprise.toLowerCase().includes(term)
      );
    }
    
    if (statut) {
      data = data.filter(item => item.statut === statut);
    }
    
    if (entreprise) {
      data = data.filter(item => item.entreprise === entreprise);
    }
    
    if (dateDebut) {
      data = data.filter(item => item.dateCreation >= dateDebut);
    }
    
    if (dateFin) {
      data = data.filter(item => item.dateCreation <= dateFin + 'T23:59:59.999Z');
    }
    
    return data.sort((a, b) => 
      new Date(b.dateCreation).getTime() - new Date(a.dateCreation).getTime()
    );
  }

  // Méthodes utilitaires privées
  private static saveAllData(data: KYCFormData[]): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
    }
  }

  private static generateId(): string {
    return 'kyc-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
  }

  private static calculateAverageProcessingTime(data: KYCFormData[]): number {
    const processedData = data.filter(
      item => item.statut === 'valide' && item.dateModification
    );
    
    if (processedData.length === 0) return 0;
    
    const totalTime = processedData.reduce((sum, item) => {
      const created = new Date(item.dateCreation).getTime();
      const modified = new Date(item.dateModification!).getTime();
      return sum + (modified - created);
    }, 0);
    
    // Retourner le temps moyen en heures
    return Math.round(totalTime / processedData.length / (1000 * 60 * 60));
  }

  private static updateStats(): void {
    // Pourrait être utilisé pour mettre à jour des statistiques cached
    // Pour l'instant, on recalcule à chaque fois
  }

  // Méthode pour initialiser avec des données de test
  static initWithSampleData(): void {
    if (this.getAllKYCData().length > 0) return; // Déjà initialisé
    
    const sampleData: Omit<KYCFormData, 'id' | 'dateCreation'>[] = [
      {
        nom: 'Dupont',
        prenom: 'Jean',
        email: 'jean.dupont@exemple.fr',
        telephone: '06 12 34 56 78',
        entreprise: 'Conseil Tech SARL',
        poste: 'Directeur',
        secteurActivite: 'Conseil en informatique',
        chiffreAffaires: 250000,
        revenus: 85000,
        patrimoine: 450000,
        originePatrimoine: 'Activité professionnelle et investissements',
        commentaires: 'Client avec un profil stable et diversifié',
        statut: 'valide',
        dateModification: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
      },
      // ... (on pourrait ajouter plus d'exemples)
    ];
    
    // Sauvegarder les données d'exemple
    sampleData.forEach(data => this.saveKYCData(data));
  }
}

export default DataStore; 