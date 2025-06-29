'use client';
import { ErrorMessage } from '@/components/Error/ErrorMessage';
import { ButtonError } from '../ButtonError';

export type ErrorPageProps = {
  errorTitle?: string;
  errorContentTitle?: string;
  errorContent?: string;
  error?: Error;
  reset?: () => void;
};

const ErrorPage = ({
  errorTitle = 'Erro inesperado',
  errorContentTitle = 'Ocorreu um erro na aplicação',
  errorContent = 'Tente novamente ou retorne para a página inicial.',
  error,
  reset,
}: ErrorPageProps) => {
  return (
    <div className='bg-background-3 flex flex-col items-center justify-center gap-12 p-8 rounded'>
      <ErrorMessage
        pageTitle={errorTitle}
        contentTitle={errorContentTitle}
        content={errorContent}
        className='text-text-4 text-center'
      />
      <ButtonError error={error} reset={reset} />
    </div>
  );
};

export default ErrorPage;
