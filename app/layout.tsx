import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FireAnime - Your Ultimate Anime Streaming Platform",
  description: "Watch the latest anime episodes, explore new series, and stay up to date with the anime calendar.",
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <NextTopLoader />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'