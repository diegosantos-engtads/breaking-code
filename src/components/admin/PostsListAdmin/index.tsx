import { findAllPostAdmin } from '@/lib/post/queries/admin';
import clsx from 'clsx';
import Link from 'next/link';
import { DeletePostButton } from '../DeletePostButton';
import ErrorPage from '@/components/Error/ErrorPage';

export const PostsListAdmin = async () => {
  const posts = await findAllPostAdmin();

  if (posts.length <= 0)
    return (
      <ErrorPage
        errorTitle='Breaking Code'
        errorContentTitle='Oops! Ainda não Publicaram nada'
        errorContent='Bora colocar a mão na massa'
      />
    );

  return (
    <section className='flex flex-col gap-2.5 '>
      {posts.map(post => {
        return (
          <div
            className={clsx(
              'px-2 py-2 bg-background-2 flex items-center justify-between transition gap-2.5 rounded hover:bg-background-4/50',
              !post.published && 'bg-background-4 text-text-4',
            )}
            key={post.id}
          >
            <Link
              href={`/admin/post/${post.id}`}
              className='clamp-a cursor-pointer'
            >
              {post.title}
            </Link>

            <span></span>
            {!post.published && (
              <small className='italic text-xs text-center'>
                (Não publicado)
              </small>
            )}
            <DeletePostButton id={post.id} title={post.title} />
          </div>
        );
      })}
    </section>
  );
};
