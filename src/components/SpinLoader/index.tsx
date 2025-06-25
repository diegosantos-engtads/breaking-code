import clsx from 'clsx';

export const SpinLoader = () => {
  return (
    <div className='flex flex-1 h-full items-center justify-center'>
      <div
        className={clsx(
          'p-4.5 ',
          'border-2 border-t-transparent rounded-full border-[#123] animate-spin',
        )}
      ></div>
    </div>
  );
};
