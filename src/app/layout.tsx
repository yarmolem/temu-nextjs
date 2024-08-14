import './globals.css'

import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import { Montserrat as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'
import { Navbar } from '@/components/layout/navbar'
import AuthModal from '@/components/shared/auth.modal'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Temu',
  description: 'Temu'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-muted font-sans antialiased',
          fontSans.variable
        )}
      >
        <div className="sm:max-w-sm mx-auto">
          <Navbar className="sticky top-0 z-40" />
          {children}
        </div>

        <Toaster />
        <AuthModal />
      </body>
    </html>
  )
}
