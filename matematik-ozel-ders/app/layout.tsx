import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ankara Matematik Özel Ders | Ankara Matematik Öğretmeni | İrem Çalışkan',
  description: 'Ankara özel ders, Ankara matematik öğretmeni arıyorsanız doğru yerdesiniz. Ankara\'da matematik özel ders veren KPSS 361. İrem Çalışkan. Ankara matematik dersi için YKS, TYT, AYT, LGS hazırlık. Ankara\'nın tecrübeli matematik öğretmeni.',
  keywords: 'ankara özel ders, ankara matematik, ankara matematik öğretmeni, ankara matematik özel ders, matematik öğretmeni ankara, ankara özel matematik dersi, ankarada matematik, ankara matematik hocası, ankara tyt matematik, ankara ayt matematik, ankara lgs matematik, ankara birebir matematik, ankara online matematik, İrem Çalışkan',
  authors: [{ name: 'İrem Çalışkan' }],
  openGraph: {
    title: 'Ankara Özel Ders | Ankara Matematik Öğretmeni İrem Çalışkan',
    description: 'Ankara özel ders, Ankara matematik öğretmeni ile birebir eğitim. Ankara\'da matematik dersi için YKS, TYT, AYT, LGS hazırlık.',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'İrem Çalışkan Matematik Özel Ders',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  alternates: {
    canonical: 'https://www.iremcaliskan.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}