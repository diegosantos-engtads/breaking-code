import ErrorPage from '@/components/Error/ErrorPage';

export default function NotFound() {
  return (
    <ErrorPage
      errorTitle='Página não encontrada'
      errorContentTitle='Erro 404'
      errorContent='A página que você procura não existe ou foi removida.'
    />
  );
}
