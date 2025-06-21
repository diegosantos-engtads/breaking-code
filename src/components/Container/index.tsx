import clsx from 'clsx';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  externalClassName?: string;
};

export const Container = ({
  children,
  className,
  externalClassName,
}: ContainerProps) => {
  return (
    <div className={clsx('max-w-5xl', 'flow-root', externalClassName)}>
      <div className={clsx('m-6', className)}>{children}</div>
    </div>
  );
};
