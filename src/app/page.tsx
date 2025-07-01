import { PostFeatured } from '@/components/PostFeatured';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

const HomePage = async () => {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
        <PostsList />
      </Suspense>
    </>
  );
};

export default HomePage;
