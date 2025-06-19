import clsx from 'clsx';
import React from 'react';

type MainProps = {
  children: React.ReactNode;
};

export const Main = ({ children }: MainProps) => {
  return (
    <main
      className={clsx('grid', 'grid-rows-[auto_1fr_auto]', 'min-h-screen', 'w-full')}
    >
      {children}
    </main>
  );
};
