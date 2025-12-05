import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'
import CustomCursor from '@/components/ui/CustomCursor'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amanuel Alemayehu | Full Stack Developer & Video Editor| Data analyst',
  description: 'Professional portfolio showcasing full stack development, mobile app development, video editing, and data analytics skills.',
  keywords: ['Full Stack Developer', 'Video Editor', 'Data Analyst', 'Flutter', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Amanuel Alemayehu' }],
  

  
  // FAVICON CONFIGURATION - Add this section
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
      },
    ],
  },
  
  // Open Graph for social media sharing
  openGraph: {
    title: 'Amanuel Alemayehu | Full Stack Developer & Video Editor',
    description: 'Professional portfolio showcasing full stack development, mobile app development, video editing, and data analytics skills.',
    type: 'website',
    url: 'https://amanuel-portfolio.vercel.app',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Amanuel Alex Portfolio',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Amanuel Alex | Full Stack Developer & Video Editor',
    description: 'Professional portfolio showcasing full stack development, mobile app development, video editing, and data analytics skills.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
     <head>
        {/* Preconnect for fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon links - FIXED: Properly closed tags */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        
        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#0a0a0a" />
      
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CustomCursor />
          <Toaster position="top-right" richColors />
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}