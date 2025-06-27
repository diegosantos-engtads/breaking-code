import clsx from 'clsx';

export const SpinLoader = () => {
  return (
    <div className='flex flex-1 h-full items-center justify-center'>
      <div
        className={clsx(
          'p-4.5 ',
          'border-2 border-t-transparent rounded-full border-[(--text-3)]',
        )}
      ></div>
    </div>
  );
};
