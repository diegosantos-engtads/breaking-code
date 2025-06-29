'use client';
import ErrorPage from '@/components/ErrorPage';

const GlobalError = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <ErrorPage
      error={error}
      reset={reset}
      errorTitle='Oops! Algo deu errado'
      errorContentTitle='Erro na aplicação'
      errorContent='Estamos tentando resolver o mais rápido possível.'
    />
  );
};

export default GlobalError;
