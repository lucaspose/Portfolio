import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Smartphone,
  Globe,
  GraduationCap,
  User,
  Briefcase,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Lucas</h1>
          <div className="flex gap-6">
            <a
              href="#about"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              À propos
            </a>
            <a
              href="#skills"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              Compétences
            </a>
            <a
              href="#projects"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              Projets
            </a>
            <a
              href="#contact"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
              L
            </div>
            <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">Lucas</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-2">
              Développeur Web & Applications Personnalisées
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">Étudiant à Epitech • 18 ans</p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="mailto:lucas.pose13@gmail.com" className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Me contacter
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="https://github.com/lucaspose" className="flex items-center">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Link>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <Badge variant="secondary" className="text-sm py-2 px-4">
              <Code className="w-4 h-4 mr-2" />
              Développement Web
            </Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">
              <Smartphone className="w-4 h-4 mr-2" />
              Applications Mobile
            </Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">
              <GraduationCap className="w-4 h-4 mr-2" />
              Epitech
            </Badge>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white dark:bg-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">À propos de moi</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Passionné par le développement depuis mon plus jeune âge, je me spécialise dans la création d'applications
              web et mobiles sur mesure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-600" />
                  Profil
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Âge:</span>
                    <span className="font-medium">18 ans</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Formation:</span>
                    <span className="font-medium">Epitech</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Spécialité:</span>
                    <span className="font-medium">Développement Full-Stack</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Statut:</span>
                    <span className="font-medium">Étudiant & Freelance</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-purple-600" />
                  Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Je développe des solutions web et mobiles personnalisées, en me concentrant sur l'expérience
                  utilisateur et les performances.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">React Native</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Compétences</h2>
            <p className="text-slate-600 dark:text-slate-300">Technologies et outils que je maîtrise</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  Développement Web
                </CardTitle>
                <CardDescription>Frontend & Backend</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Badge variant="outline" className="justify-center py-2">
                    React
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    JavaScript
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    Golang
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    Tailwind CSS
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    HTML/CSS
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-green-600" />
                  Applications Mobile
                </CardTitle>
                <CardDescription>Cross-platform & Native</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Badge variant="outline" className="justify-center py-2">
                    React Native
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    Expo
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    Flutter
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    Dart
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    Firebase
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    SQLite
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    REST APIs
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    AsyncStorage
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-purple-600" />
                  Outils & Technologies
                </CardTitle>
                <CardDescription>Développement & Déploiement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Badge variant="outline" className="justify-center py-2">
                    Git
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    GitHub
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    Docker
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    Vercel
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    PostgreSQL
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    MongoDB
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    Figma
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    VS Code
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-white dark:bg-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Mes Projets</h2>
            <p className="text-slate-600 dark:text-slate-300">Découvrez quelques-unes de mes réalisations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg flex items-center justify-center overflow-visible relative group">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <Image
                    src="/schoolpulse.png"
                    alt="SchoolPulse Logo"
                    fill
                    className="object-contain rounded-t-lg"
                    sizes="(max-width: 768px) 100vw, 100vw"
                    style={{ objectFit: "contain" }}
                    priority
                  />
                  </div>
                </div>
              <CardHeader>
                <CardTitle className="text-center text-lg font-bold">SchoolPulse</CardTitle>
                <CardTitle>Plateforme de communication interne</CardTitle>
                <CardDescription>
                  Plateforme de communication interne pour la gestion des signalements ou annonces dans les écoles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Link href="https://github.com/lucaspose/SchoolPulse" className="flex items-center">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 rounded-t-lg flex items-center justify-center">
                <Smartphone className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <CardTitle>App Mobile de Fitness</CardTitle>
                <CardDescription>Application de suivi d'entraînement avec programmes personnalisés</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React Native</Badge>
                  <Badge variant="secondary">Expo</Badge>
                  <Badge variant="secondary">Firebase</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 rounded-t-lg flex items-center justify-center">
                <Code className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <CardTitle>Dashboard Analytics</CardTitle>
                <CardDescription>
                  Interface d'administration avec visualisation de données en temps réel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Chart.js</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Contactez-moi</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter de vos besoins.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <Card>
              <CardContent className="pt-6 text-center">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-slate-600 dark:text-slate-300">lucas@example.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Github className="w-8 h-8 text-slate-900 dark:text-white mx-auto mb-4" />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-slate-600 dark:text-slate-300">github.com/lucas</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Linkedin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-slate-600 dark:text-slate-300">linkedin.com/in/lucas</p>
              </CardContent>
            </Card>
          </div>

          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Mail className="w-4 h-4 mr-2" />
            Démarrer un projet
          </Button>
        </div>
      </section>

      <footer className="py-8 px-4 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <p className="text-slate-400">© 2024 Lucas. Développeur Web & Applications Personnalisées.</p>
        </div>
      </footer>
    </div>
  )
}
