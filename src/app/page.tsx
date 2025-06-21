import { Container } from '@/components/Container';
import PostsList from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

const HomePage = async () => {
  return (
    <>
      <Container>
        <Suspense fallback={<SpinLoader />}>
          <PostsList />
        </Suspense>
      </Container>
    </>
  );
};

export default HomePage;

// .container {
//   width: 100%;
//   @media (width >= 40rem /* 640px */) {
//     max-width: 40rem /* 640px */;
//   }
//   @media (width >= 48rem /* 768px */) {
//     max-width: 48rem /* 768px */;
//   }
//   @media (width >= 64rem /* 1024px */) {
//     max-width: 64rem /* 1024px */;
//   }
