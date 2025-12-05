import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

// import GenerativeBackground from '@/components/ui/GenerativeBackground'
import CustomCursor from '@/components/ui/CustomCursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'aman\'s portfolio',
  description: 'A portfolio built with Next.js and Tailwind CSS, showcasing advanced frontend development skills.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* 
            The generative background and custom cursor are client-side components.
            Placing them here ensures they render on every page behind the main content.
          */}
          {/* <GenerativeBackground /> */}
          <CustomCursor />
          <Toaster position="top-right" richColors />
          {/* 
            The main content of your application (defined in page.tsx) is rendered here.
          */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}