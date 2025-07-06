import clsx from 'clsx';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx('w-full p-6 mx-auto max-w-6xl flow-root', className)}>
      {children}
    </div>
  );
};
