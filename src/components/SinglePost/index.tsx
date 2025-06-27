import { findPostBySlugCached } from '@/lib/post/queries';
import { notFound } from 'next/navigation';
import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';

type SinglePostProps = {
  slug: string;
};

export const SinglePost = async ({ slug }: SinglePostProps) => {
  const post = await findPostBySlugCached(slug);

  if (!post) notFound();

  return (
    <article>
      <header>
        <PostCoverImage
          imageProps={{
            width: 1200,
            height: 720,
            src: post.coverImageUrl,
            alt: post.title,
            priority: true,
          }}
          className={'rounded-md'}
        />
        <PostSummary
          post={post}
          className='mt-2 mb-12 cursor-auto'
          headingAs='h1'
          disableLink
        />
      </header>
      <section className='bg-background-2 rounded-md p-6'>
        {post.content}
      </section>
    </article>
  );
};
