'use client';

import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import { XCircleIcon } from 'lucide-react';
import { ButtonConfirm } from '../ButtonConfirm';

type DialogProps = {
  isVisible?: boolean;
  title: string;
  content: React.ReactNode;
  confirmAction: () => void;
  cancelAction: () => void;
  disabled: boolean;
};

export const Dialog = ({
  isVisible = false,
  title,
  content,
  confirmAction,
  cancelAction,
  disabled,
}: DialogProps) => {
  const cancelButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isVisible) {
      cancelButtonRef.current?.focus();
    }
  }, [isVisible]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        cancelAction();
      }
    };

    if (isVisible) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible, cancelAction]);

  if (!isVisible) return null;

  return (
    <div
      className={clsx(
        'fixed inset-0 z-50',
        'flex items-center justify-center',
        'bg-background-4/60 backdrop-blur-[2px]',
      )}
      onClick={cancelAction}
    >
      <div
        className={clsx(
          'relative bg-background-1 p-4 mx-6 rounded shadow-lg shadow-background-3/80',
          'flex flex-col gap-4 max-w-md w-full',
        )}
        role='dialog'
        aria-modal='true'
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={cancelAction}
          aria-label='Fechar'
          className='absolute top-1.5 right-1.5 opacity-80 hover:opacity-100 text-text-3 cursor-pointer'
        >
          <XCircleIcon size={20} />
        </button>

        <h2 id='dialog-title' className='text-text-3'>
          {title}
        </h2>

        <div id='dialog-description' className='text-text-3'>
          {content}
        </div>

        <div className='flex justify-center gap-10 pt-2'>
          <ButtonConfirm
            className='bg-background-3/80 text-text-4 disabled:opacity-20 disabled:cursor-not-allowed'
            onClick={cancelAction}
            disabled={disabled}
            ref={cancelButtonRef}
          >
            Cancelar
          </ButtonConfirm>
          <ButtonConfirm
            className='bg-background-3 text-text-4 disabled:opacity-20 disabled:cursor-not-allowed'
            onClick={confirmAction}
            disabled={disabled}
          >
            Confirmar
          </ButtonConfirm>
        </div>
      </div>
    </div>
  );
};
