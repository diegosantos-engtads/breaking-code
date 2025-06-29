'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export type ButtonErrorProps = {
  error?: Error;
  reset?: () => void;
};

export const ButtonError = ({ error, reset }: ButtonErrorProps) => {
  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return (
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
  );
};
