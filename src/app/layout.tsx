import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './Components/Header'
import Footer from './Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spines - Agence Acquisition digitale',
  description: 'On vous aide à vous développer grâce au web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <main>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
