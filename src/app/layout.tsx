import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/styles/globals.scss';

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
      </body>
    </html>
  );
}
