import clsx from 'clsx';
import { FileTextIcon, HomeIcon, PlusIcon } from 'lucide-react';
import Link from 'next/link';

export const MenuAdmin = () => {
  const navClass = clsx(
    'bg-background-3 text-text-4',
    'rounded',
    'gap-2 flex items-center',
    'clamp-a',
    'my-4',
    'justify-around',
    'sm:justify-start',
  );

  const linkClass = clsx(
    'flex items-center gap-2 m-2 py-1 clamp-a',
    'border-y border-transparent',
    'hover:border-current',
    'transition-all duration-200',
    'sm:[&>svg]:size-[1.4rem]',
    '[&>svg]:size-[1.2rem]',
    'cursor-pointer',
  );

  return (
    <nav className={navClass}>
      <Link href='/' target='_blank' className={linkClass}>
        <HomeIcon /> Home
      </Link>
      <Link href='/admin/post' className={linkClass}>
        <FileTextIcon /> Post
      </Link>
      <Link href='/admin/post/new' className={linkClass}>
        <PlusIcon /> Criar Post
      </Link>
    </nav>
  );
};
