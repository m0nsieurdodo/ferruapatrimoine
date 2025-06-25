// Types pour les données KYC (Know Your Customer)
export interface KYCFormData {
  id?: string;
  // Informations personnelles
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  dateNaissance?: string;
  
  // Informations professionnelles
  entreprise: string;
  poste?: string;
  secteurActivite?: string;
  chiffreAffaires?: number;
  
  // Informations financières
  revenus?: number;
  patrimoine?: number;
  originePatrimoine?: string;
  
  // Documents et commentaires
  commentaires?: string;
  documentsUploaded?: string[];
  
  // Métadonnées
  dateCreation: string;
  dateModification?: string;
  statut: 'brouillon' | 'soumis' | 'valide' | 'rejete';
}

// Types pour les statistiques du dashboard
export interface DashboardStats {
  totalSubmissions: number;
  todaySubmissions: number;
  validatedSubmissions: number;
  pendingSubmissions: number;
  averageProcessingTime: number;
}

// Types pour les graphiques
export interface ChartData {
  date: string;
  submissions: number;
  validated: number;
}

export interface CompanyDistribution {
  entreprise: string;
  count: number;
  percentage: number;
}

// Types pour l'upload de PDF
export interface ParsedPDFData {
  filename: string;
  extractedText: string;
  extractedFields: Partial<KYCFormData>;
  confidence: number;
}

// Types pour les réponses API
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Types pour les filtres du dashboard
export interface DashboardFilters {
  dateDebut?: string;
  dateFin?: string;
  statut?: KYCFormData['statut'];
  entreprise?: string;
  searchTerm?: string;
}

// Types pour la navigation
export interface NavItem {
  href: string;
  label: string;
  icon?: string;
} 