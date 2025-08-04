import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lucas POSE – Développeur Web & Mobile Freelance | Création de Sites & Applications sur Mesure',
  description: 'Lucas POSE, développeur freelance passionné, je crée des expériences web et mobiles uniques, performantes et sur mesure. De la landing page au back-end complexe, j’accompagne vos projets digitaux avec rigueur, créativité et expertise technique.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
