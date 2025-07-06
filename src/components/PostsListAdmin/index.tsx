import { findAllPostAdmin } from '@/lib/post/queries/admin';
import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';
import Link from 'next/link';

export const PostsListAdmin = async () => {
  const posts = await findAllPostAdmin();
  return (
    <section className='flex flex-col gap-2.5 '>
      {posts.map(post => {
        return (
          <div
            className={clsx(
              'px-2 py-2 bg-background-2 flex items-center justify-between gap-2.5 rounded',
              !post.published && 'bg-background-4 text-text-4',
            )}
            key={post.id}
          >
            <Link href={`/admin/post/${post.id}`} className='clamp-a'>
              {post.title}
            </Link>

            <span></span>
            {!post.published && (
              <small className='italic text-xs text-center'>
                (Não publicado)
              </small>
            )}
            <button
              className={clsx(
                'text-red-500 cursor-pointer p-1 transition',
                '[&_svg]:hover:scale-110 [&_svg]:hover:text-red-700',
              )}
              aria-label={`Apagar post: ${post.title}`}
              title={`Apagar post: ${post.title}`}
            >
              <Trash2Icon size={18} />
            </button>
          </div>
        );
      })}
    </section>
  );
};
