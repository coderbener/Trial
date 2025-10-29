// src/app/layout.tsx

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Providers from "./providers" // <-- 1. IMPORT THE PROVIDER

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BenetS - Cybersecurity Education Platform",
  description: "India's community platform for aspiring cybersecurity professionals",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        <Providers> {/* <-- 2. WRAP YOUR CHILDREN */}
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}