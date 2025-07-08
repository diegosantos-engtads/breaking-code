import clsx from 'clsx';
import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';
import { findAllPublicPostsCached } from '@/lib/post/queries/public';
import ErrorPage from '../Error/ErrorPage';

export const PostFeatured = async () => {
  const posts = await findAllPublicPostsCached();
  if (posts.length <= 0)
    return (
      <ErrorPage
        errorTitle='Breaking Code'
        errorContentTitle='Oops! Isso não é um erro'
        errorContent='Apenas estamos sem postagens nesta pagina'
      />
    );

  const post = posts[0];

  return (
    <section
      className={clsx(
        'group grid md:grid-cols-2 gap-2',
        'sm:grid-cols-2 sm:gap-6 mb-14',
      )}
    >
      <PostCoverImage
        linkProps={{ href: `/post/${post.slug}` }}
        imageProps={{
          width: 1200,
          height: 720,
          src: post.coverImageUrl,
          alt: post.title,
          priority: true,
          title: post.title,
        }}
      />
      <PostSummary post={post} />
    </section>
  );
};
