import { findPostBySlugCached } from '@/lib/post/queries';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { SinglePost } from '@/components/SinglePost';
import { SpinLoader } from '@/components/SpinLoader';

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({
  params,
}: PostSlugPageProps): Promise<Metadata> => {
  const slug = (await params).slug;
  const post = await findPostBySlugCached(slug);

  if (!post) {
    return {
      title: 'Post não encontrado',
    };
  }
  return {
    title: post.title,
    description: post.excerpt ?? '',
  };
};

const PostPage = async ({ params }: PostSlugPageProps) => {
  const slug = (await params).slug;

  return (
    <Suspense fallback={<SpinLoader />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
};

export default PostPage;
