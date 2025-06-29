'use client';
import ErrorPage from '@/components/ErrorPage';

type GlobalErrorProps = {
  error: Error;
  reset: () => void;
};

const GlobalError = ({ error, reset }: GlobalErrorProps) => {
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
