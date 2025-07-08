import { PostsListAdmin } from '@/components/admin/PostsListAdmin';
import { SpinLoader } from '@/components/SpinLoader';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Post Admin',
};

const AdminPostPage = async () => {
  return (
    <Suspense fallback={<SpinLoader />}>
      <PostsListAdmin />
    </Suspense>
  );
};

export default AdminPostPage;
