import clsx from 'clsx';
import { forwardRef } from 'react';

type ButtonConfirmProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  autoFocus?: boolean;
  disabled?: boolean;
  variant: 'cancel' | 'confirm' | 'submit' | 'reset' | 'delete' | 'ok';
};

export const ButtonConfirm = forwardRef<
  HTMLButtonElement,
  ButtonConfirmProps
>(
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
      'text-text-4',
      'disabled:opacity-20 ',
      'disabled:cursor-not-allowed',
    );

    const variantClass = clsx({
      'bg-background-3/80  ': variant === 'cancel',
      'bg-background-3  ': variant === 'confirm',
      'bg-[red]  ': variant === 'delete',
      'bg-[#004cff]  ': variant === 'ok',
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
        <span
          className={clsx(
            'absolute',
            'flex',
            'gap-1',
            '[&_svg]:p-[2.8%]',
          )}
        >
          {children}
        </span>
      </button>
    );
  },
);

ButtonConfirm.displayName = 'ButtonConfirm';
