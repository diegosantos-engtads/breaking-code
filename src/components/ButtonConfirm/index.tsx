import clsx from 'clsx';
import { forwardRef } from 'react';

type ButtonConfirmProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  autoFocus?: boolean;
  disabled?: boolean;
};

export const ButtonConfirm = forwardRef<HTMLButtonElement, ButtonConfirmProps>(
  (
    { children, className, onClick, type = 'button', autoFocus, disabled },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        autoFocus={autoFocus}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={clsx(
          'flex items-center justify-center',
          'px-16 py-4',
          'rounded',
          'hover:opacity-85',
          'cursor-pointer',
          'transition-all',
          className,
        )}
      >
        <span className='absolute'>{children}</span>
      </button>
    );
  },
);

ButtonConfirm.displayName = 'ButtonConfirm';
