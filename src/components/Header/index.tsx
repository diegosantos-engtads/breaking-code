import clsx from 'clsx';
import { Container } from '../Container';
import Link from 'next/link';
import { Bug } from 'lucide-react';

export const Header = () => {
  return (
    <header>
      <Container>
        <Link
          href='/'
          className={clsx('flex items-center gap-2.5 clamp-h1 font-medium')}
        >
          <Bug size={32} strokeWidth={2} className='flex' />
          Breaking Code
        </Link>
        <h2>Conhecimento e notícias sobre o mundo dev.</h2>
      </Container>
    </header>
  );
};
