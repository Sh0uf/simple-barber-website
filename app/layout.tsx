import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Swanky_and_Moo_Moo } from 'next/font/google'

const swankyAndMooMoo = Swanky_and_Moo_Moo({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-swanky',
})

export const metadata: Metadata = {
  title: "Fortuna Salong",
  description: `Professionella barberartjänster i hjärtat av Helsingborg

Traditionella och moderna klippningar, skäggtrimning och stylingtjänster.

📍 Aschebergsgatan 8, 254 38 Helsingborg
📞 079 076 25 76
📧 info@fortunasalong.se
📱 Instagram: @fortuna_salong

⏰ Öppettider:
Tisdag – Fredag: 11:00 – 18:00
Lördag: 11:00 – 17:00
Söndag & Måndag: Stängt

Besök vår välkomnande salong där vi kombinerar många års erfarenhet med känsla för detaljer. Drop-in välkomna, tidsbokning rekommenderas.`,
  icons: {
    icon: './icon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="../icon.ico" />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'