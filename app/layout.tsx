import { ChakraProvider } from '@chakra-ui/react'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "BUTIK MISSNINE",
  description: "Butik MISS9 powstaje na potrzeby kobiet, które uwielbiają wyglądać wyjątkowo każdego dnia!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Navbar />
          {children}
          <Footer />
          </ChakraProvider>
        </body>
    </html>
  );
}
