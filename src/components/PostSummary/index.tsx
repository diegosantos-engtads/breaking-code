import { formatRelativeDate, getFormattedDate } from '@/utils/format-datetime';
import { PostHeading } from '../PostHeading';

type PostSummaryProps = {
  post: {
    id: string;
    title: string;
    excerpt: string;
    createdAt: string;
    slug: string;
    author: string;
  };
};

export const PostSummary = ({ post }: PostSummaryProps) => {
  return (
    <div className='flex flex-col justify-center gap-4'>
      <small>
        {post.author}
        {' - '}
        <time
          dateTime={post.createdAt}
          title={formatRelativeDate(post.createdAt)}
          className='text-text-2'
        >
          {getFormattedDate(post.createdAt)}
        </time>
      </small>

      <PostHeading url={`/post/${post.slug}`} as='h2'>
        {post.title}
      </PostHeading>

      <p className='z-10'>{post.excerpt}</p>
    </div>
  );
};
