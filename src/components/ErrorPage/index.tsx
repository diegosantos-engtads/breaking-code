'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ErrorMessage } from '@/components/ErrorMessage';

export type ErrorPageProps = {
  errorTitle?: string;
  errorContentTitle?: string;
  errorContent?: string;
  error?: Error;
  reset?: () => void;
};

const ErrorPage = ({
  error,
  reset,
  errorTitle = 'Erro inesperado',
  errorContentTitle = 'Ocorreu um erro na aplicação',
  errorContent = 'Tente novamente ou retorne para a página inicial.',
}: ErrorPageProps) => {
  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return (
    <div className='bg-background-3 flex flex-col items-center justify-center gap-12 p-8 rounded'>
      <ErrorMessage
        pageTitle={errorTitle}
        contentTitle={errorContentTitle}
        content={errorContent}
        className='text-text-4 text-center'
      />
      <div className='flex gap-4'>
        {reset && (
          <button
            type='button'
            onClick={reset}
            className='bg-background-1 p-2 rounded hover:opacity-70 transition cursor-pointer shadow-text-1'
          >
            Tentar novamente
          </button>
        )}
        <Link
          href='/'
          className='bg-background-1 p-2 rounded hover:opacity-70 transition cursor-pointer shadow-text-1'
        >
          Retornar para Home Page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
