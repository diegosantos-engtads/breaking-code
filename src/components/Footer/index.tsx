import Link from 'next/link';

export const Footer = () => {
  const linkClasses =
    'inline-block text-[#123] font-medium after:block after:w-0 after:h-[1px] after:bg-neutral-500 after:transition-all after:duration-400 after:ease-in-out hover:after:w-full';

  return (
    <footer className='flex justify-center'>
      <small className='my-10 text-center px-8 text-sm'>
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
      </small>
    </footer>
  );
};
