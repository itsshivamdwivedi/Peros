import localFont from 'next/font/local'

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import "./app.css";
import Header from '@/components/Header';
// import Footer from '@/components/Footer';

const alpino = localFont({
  src: '../../public/fonts/Alpino-Variable.woff2',
  display: 'swap',
  weight:'100 900',             // between 100 to 900
  variable: "--font-alpino",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <body className='overflow-x-hidden bg-yellow-300'>
        <Header />
        
        <main>
          
        {children}
           </main>
           {/* <Footer /> */}
           </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
