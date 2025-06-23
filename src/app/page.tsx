import { Container } from '@/components/Container';
import { PostCoverImage } from '@/components/PostCoverImage';
import { PostHeading } from '@/components/PostHeading';
import PostsList from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';
import { Suspense } from 'react';

const HomePage = async () => {
  return (
    <>
      <Container>
        <section
          className={clsx('group grid grid-cols-1 gap-6', 'sm:grid-cols-2')}
        >
          <PostCoverImage
            linkProps={{ href: '/post/algumacoisa' }}
            imageProps={{
              width: 1200,
              height: 720,
              src: '/images/bryen_0.png',
              alt: 'Alt da Imagem',
              priority: true,
            }}
          />

          <div className='flex flex-col gap-2 sm:justify-center'>
            <time dateTime='2025-04-20' className='text-text-2'>
              20/04/2025 10:00
            </time>

            <PostHeading url='#' as='h2'>
              Lorem ipsum dolor
            </PostHeading>

            <p className='z-10'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum id
              culpa iure! Vel sunt magni, perspiciatis fugit numquam molestiae,
            </p>
          </div>
        </section>
        <Suspense fallback={<SpinLoader />}>
          <PostsList />
        </Suspense>
      </Container>
    </>
  );
};

export default HomePage;
