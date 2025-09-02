import clsx from 'clsx';
import { useId } from 'react';

type InputTextProps = {
  labelText?: string;
} & React.ComponentProps<'input'>;

export const InputText = ({
  labelText = '',
  ...props
}: InputTextProps) => {
  const id = useId();
  const inputClass = clsx(
    'px-1 py-[.3rem] ring-1 rounded',
    'focus:bg-background-2 focus:outline-none focus:ring-1',
    'disabled:bg-background-4/45',
    'disabled:text-text-4',
    'disabled:placeholder-text-2/45',
    'disabled:focus:outline-none',
    'disabled:focus:ring-0',
    'disabled:focus:bg-inherit',
  );

  return (
    <div className='flex flex-col'>
      {labelText && (
        <label htmlFor={id} className='px-0.5'>
          {labelText}
        </label>
      )}
      <input {...props} id={id} className={inputClass} />
    </div>
  );
};
