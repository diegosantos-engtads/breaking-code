import clsx from 'clsx';
import { FileTextIcon, HomeIcon } from 'lucide-react';
import Link from 'next/link';

export const MenuAdmin = () => {
  const navClass = clsx(
    'bg-background-3 text-text-4',
    'rounded p-2',
    'gap-4 flex',
    'clamp-a',
    'my-4',
  );
  const linkClass = clsx(
    'flex',
    'items-center',
    'gap-1 p-0.5',
    'clamp-a',
    'border-y border-transparent',
    'hover:border-current',
    'transition-all duration-200',
  );
  return (
    <nav className={navClass}>
      <a href='/' target='_blank' className={linkClass}>
        <HomeIcon size={18} /> Home
      </a>
      <Link href='/admin/post' className={linkClass}>
        <FileTextIcon size={18} /> Post
      </Link>
    </nav>
  );
};
