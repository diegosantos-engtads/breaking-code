import clsx from 'clsx';
import { forwardRef } from 'react';

type ButtonConfirmProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  autoFocus?: boolean;
  disabled?: boolean;
  variant: 'cancel' | 'confirm' | 'submit' | 'reset';
};

export const ButtonConfirm = forwardRef<HTMLButtonElement, ButtonConfirmProps>(
  (
    {
      children,
      className,
      onClick,
      type = 'button',
      autoFocus,
      disabled,
      variant,
    },
    ref,
  ) => {
    const defaultClass = clsx(
      'flex items-center justify-center',
      'px-16 py-4',
      'rounded',
      'hover:opacity-85',
      'cursor-pointer',
      'transition-all',
    );

    const variantClass = clsx({
      'bg-background-3/80 text-text-4 disabled:opacity-20 disabled:cursor-not-allowed':
        variant === 'cancel',

      'bg-background-3 text-text-4 disabled:opacity-20 disabled:cursor-not-allowed':
        variant === 'confirm',

      'bg-[red] text-text-4 disabled:opacity-20 disabled:cursor-not-allowed':
        variant === 'reset',
    });

    return (
      <button
        ref={ref}
        autoFocus={autoFocus}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={clsx(defaultClass, variantClass, className)}
      >
        <span className='absolute'>{children}</span>
      </button>
    );
  },
);

ButtonConfirm.displayName = 'ButtonConfirm';
