import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';
import { findAllPublicPostsCached } from '@/lib/post/queries/public';

export const PostsList = async () => {
  const posts = await findAllPublicPostsCached();

  return (
    <section className='my-6 gap-6 grid sm:grid-cols-2 md:grid-cols-3'>
      {posts.slice(1).map(post => {
        const postLink = `/post/${post.slug}`;

        return (
          <div key={post.id} className='group flex flex-col gap-2'>
            <PostCoverImage
              linkProps={{ href: postLink }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
                priority: true,
              }}
            />

            <PostSummary post={post} />
          </div>
        );
      })}
    </section>
  );
};
