import clsx from 'clsx';

export const SpinLoader = () => {
  const clAses = clsx('flex', 'items-center', 'justify-center');
  return (
    <span className={clAses}>
      <span
        className={clsx(
          'p-4.5',
          'border-2 border-t-transparent rounded-full border-[#123] animate-spin',
        )}
      ></span>
    </span>
  );
};
