import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FileText, 
  Upload, 
  BarChart3, 
  Shield, 
  ArrowRight
} from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: "Inscription Intelligente",
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





export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Fonctionnalités Principales
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Une suite complète d&apos;outils pour optimiser votre processus d&apos;inscription
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


    </div>
  );
}
