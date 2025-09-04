'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ButtonConfirm } from '@/components/ButtonConfirm';

export type ButtonErrorProps = {
  error?: Error;
  reset?: () => void;
};

export const ButtonError = ({ error, reset }: ButtonErrorProps) => {
  const router = useRouter();

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return (
    <div className='flex gap-6'>
      {reset && (
        <ButtonConfirm
          variant='cancel'
          className='px-6'
          onClick={reset}
        >
          Tentar novamente
        </ButtonConfirm>
      )}

      <ButtonConfirm
        variant='cancel'
        className='px-8 py-3'
        onClick={() => router.push('/')}
      >
        Retornar para Home Page
      </ButtonConfirm>
    </div>
  );
};
