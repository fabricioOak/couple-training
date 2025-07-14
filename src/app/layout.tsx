import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/main.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'O Seu Ginásio em Casa',
  description: 'Um plano interativo para os seus objetivos de saúde e condicionamento físico.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <main className="container mx-auto p-4 md:p-8 max-w-5xl">
          {children}
        </main>
      </body>
    </html>
  );
}
