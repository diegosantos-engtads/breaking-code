import clsx from 'clsx';
import Link from 'next/link';
import { Container } from '../Container';

export const Footer = () => {
  const linkClasses = clsx(
    'inline-block',
    'text-text-3',
    'font-medium',
    'after:block',
    'after:w-0',
    'after:h-[1px]',
    'after:bg-background-3',
    'after:transition-all',
    'after:duration-400',
    'after:ease-in-out',
    'hover:after:w-full',
  );

  return (
    <footer>
      <Container className='text-center text-sm'>
        Criado por{' '}
        <Link
          href='https://github.com/diegosantos-engtads'
          className={linkClasses}
          target='_blank'
        >
          Diego Santos
        </Link>{' '}
        • Copyright © {new Date().getFullYear()}{' '}
        <Link href='/' className={linkClasses}>
          Breaking Code
        </Link>{' '}
        – Todos os direitos reservados.
      </Container>
    </footer>
  );
};
