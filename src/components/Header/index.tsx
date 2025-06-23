import clsx from 'clsx';
import { Container } from '../Container';
import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <Container>
        <Link href='#' className={clsx('clamp-h1 font-medium')}>
          Breaking Code
        </Link>
        <h2>Conhecimento e notícias sobre o mundo dev.</h2>
      </Container>
    </header>
  );
};
