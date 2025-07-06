import { findPublicPostBySlugCached } from '@/lib/post/queries/public';
import { notFound } from 'next/navigation';
import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';
import { SafeMarkdown } from '../SafeMarkdown';

type SinglePostProps = {
  slug: string;
};

export const SinglePost = async ({ slug }: SinglePostProps) => {
  const post = await findPublicPostBySlugCached(slug);

  if (!post) notFound();

  return (
    <article>
      <section>
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
          className='m-2 mb-12 sm:mb-16 gap-2'
          headingAs='h1'
          headingClass='cursor-auto'
          disableLink
        />
      </section>

      <SafeMarkdown markdown={post.content} />
    </article>
  );
};
