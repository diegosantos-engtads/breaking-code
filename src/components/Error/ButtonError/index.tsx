'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { ButtonConfirm } from '@/components/ButtonConfirm'; // ajuste o caminho conforme estrutura

export type ButtonErrorProps = {
  error?: Error;
  reset?: () => void;
};

export const ButtonError = ({ error, reset }: ButtonErrorProps) => {
  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return (
    <div className='flex gap-6'>
      {reset && (
        <ButtonConfirm onClick={reset} className='bg-background-2 px-26'>
          Tentar novamente
        </ButtonConfirm>
      )}

      <ButtonConfirm className='bg-background-2/90 px-26'>
        <Link href='/'>Retornar para Home Page</Link>
      </ButtonConfirm>
    </div>
  );
};
