import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl text-gray-600 mb-8">Página não encontrada</h2>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        A página que está à procura não existe ou foi movida para outro local.
      </p>
      <Link href="/">
        <Button>Voltar ao Início</Button>
      </Link>
    </div>
  );
}
