import './globals.css'
import type { Metadata } from 'next'
import Footer from './Components/Footer'
import localFont from 'next/font/local'

const spinesFont = localFont({ src: './fonts/customFont.otf'})

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
    <html lang="fr" className={spinesFont.className}>
      <body>
        <main>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
