import { Quicksand } from 'next/font/google';
import Nav from '@/components/generalcompo/Nav';
import Footer from '@/components/generalcompo/Footer';
import './globals.css';


const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'Your App',
  description: 'App description here',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) { 
  return (
    <html lang="en">
      <body >
        <Nav />

          {children}
        
        <Footer />
      </body>
    </html>
  );
}
