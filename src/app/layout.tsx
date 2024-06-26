import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/styles/globals.scss';
import { Analytics } from '@vercel/analytics/next';

const inter = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Samisaum | Cek jadwal Imsakiyah dengan mudah',
  description: 'Aplikasi jadwal waktu sholat harian yang lengkap dan mudah untuk digunakan.',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['samisaum', 'jadwal sholat', 'jadwal imsakiyah', 'jadwal imsak', 'jadwal buka puasa', 'jadwal buka'],
  authors: [
    { name: 'Muhamad Abdul Azis' },
    {
      name: 'Muhamad Abdul Azis',
      url: 'https://muhabdulazis.vercel.app/',
    },
  ],
  icons: [{ rel: 'icon', url: '/logo-clr.svg' }],
  metadataBase: new URL('https://samisaum.vercel.app'),
  openGraph: {
    title: 'Samisaum | Cek jadwal Imsakiyah dengan mudah',
    description: 'Aplikasi jadwal waktu sholat harian yang lengkap dan mudah untuk digunakan.',
    url: 'https://samisaum.vercel.app',
    siteName: 'Samisaum',
    images: [
      { url: 'https://samisaum.vercel.app/opengraph-image.png', width: 1200, height: 630 },
      { url: 'https://samisaum.vercel.app/opengraph-image2.png', width: 600, height: 315 },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Samisaum | Cek jadwal Imsakiyah dengan mudah</title>
        <link rel="icon" href="/logo-clr.svg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="application-name" content="Samisaum | Jadwal Sholat Harian" />
        <meta name="author" content="Muhamad Abdul Azis (Necode)" />
        <meta name="creator" content="Muhamad Abdul Azis (Necode)" />
        <meta name="publisher" content="Muhamad Abdul Azis (Necode)" />
        <meta name="description" content="Samisaum, aplikasi jadwal waktu sholat harian yang lengkap dan mudah untuk digunakan." />
        <meta name="keywords" content="samisaum, jadwal buka, jadwal imsak, jadwal sholat" />
        <meta name="referrer" content="origin" /> */}
      </head>
      <body className={inter.className}>
        {children}

        <div className="topo-line-container1">
          <div className="topo-line">
            <div className="topo-line">
              <div className="topo-line">
                <div className="topo-line" />
              </div>
            </div>
          </div>
        </div>
        <div className="topo-line-container2">
          <div className="topo-line">
            <div className="topo-line">
              <div className="topo-line">
                <div className="topo-line" />
              </div>
            </div>
          </div>
        </div>

        <Analytics />
      </body>
    </html>
  );
}
