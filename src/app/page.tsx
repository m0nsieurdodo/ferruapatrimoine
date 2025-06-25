import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FileText, 
  Upload, 
  BarChart3, 
  Shield, 
  Clock, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: "Formulaire KYC Intelligent",
    description: "Collecte des informations clients avec validation en temps réel et génération automatique de documents.",
    href: "/form"
  },
  {
    icon: Upload,
    title: "Upload & Analyse PDF",
    description: "Extraction automatique des données depuis les documents PDF existants pour un traitement rapide.",
    href: "/upload"
  },
  {
    icon: BarChart3,
    title: "Dashboard Analytique",
    description: "Visualisation des données KYC avec graphiques interactifs et métriques en temps réel.",
    href: "/dashboard"
  },
  {
    icon: Shield,
    title: "Conformité Assurée",
    description: "Respect des réglementations KYC et AML avec traçabilité complète des données."
  }
];

const steps = [
  {
    number: "01",
    title: "Saisie des Données",
    description: "Remplissage du formulaire KYC avec les informations client essentielles"
  },
  {
    number: "02", 
    title: "Validation Automatique",
    description: "Vérification et validation des données selon les critères de conformité"
  },
  {
    number: "03",
    title: "Génération Document",
    description: "Création automatique du document Word avec les variables personnalisées"
  },
  {
    number: "04",
    title: "Suivi & Analyse",
    description: "Monitoring des données via le dashboard avec graphiques et métriques"
  }
];

const benefits = [
  "Automatisation du processus KYC",
  "Réduction des erreurs de saisie",
  "Conformité réglementaire garantie",
  "Génération instantanée de documents",
  "Dashboard analytique avancé",
  "Interface moderne et intuitive"
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.04]" />
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/20 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-200">
                <Shield className="mr-2 h-4 w-4" />
                Solution KYC Moderne
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Gestion{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Intelligente
              </span>
              {' '}des Données KYC
            </h1>
            
            <p className="mb-10 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Automatisez votre processus Know Your Customer avec notre plateforme moderne : 
              formulaires intelligents, analyse de documents et dashboard analytique.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="text-lg px-8 py-3">
                <Link href="/form">
                  Commencer le Formulaire KYC
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link href="/dashboard">
                  Voir le Dashboard
                  <BarChart3 className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">95%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Temps gagné</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Conformité</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Disponibilité</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Fonctionnalités Principales
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Une suite complète d&apos;outils pour optimiser votre processus KYC
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {feature.description}
                  </CardDescription>
                  {feature.href && (
                    <Button asChild variant="ghost" className="p-0 h-auto font-medium text-blue-600 dark:text-blue-400">
                      <Link href={feature.href}>
                        Découvrir <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Processus en 4 Étapes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Un workflow simplifié pour une gestion efficace des données KYC
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="h-16 w-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 dark:bg-gray-700 -translate-x-8" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Pourquoi Choisir Notre Solution ?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Des avantages concrets pour votre organisation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="text-lg px-8 py-3">
                <Link href="/form">
                  Démarrer Maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <Clock className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Prêt à Moderniser Votre Processus KYC ?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Rejoignez les entreprises qui ont déjà optimisé leur gestion des données clients
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
                <Link href="/form">
                  Créer un Dossier KYC
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/dashboard">
                  Explorer le Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
