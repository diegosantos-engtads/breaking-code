import clsx from 'clsx';
import { PostDate } from '../PostDate';
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
  headingAs?: 'h1' | 'h2' | 'h3';
  headingClass?: string;
  disableLink?: boolean;
  className?: string;
};

export const PostSummary = ({
  post,
  headingAs = 'h2',
  headingClass,
  disableLink,
  className,
}: PostSummaryProps) => {
  return (
    <div
      className={clsx(
        'text-left flex flex-col justify-center gap-2',
        className,
      )}
    >
      <small>
        {post.author}
        {' | '}
        <PostDate dateTime={post.createdAt} />
      </small>

      <PostHeading
        url={`/post/${post.slug}`}
        as={headingAs}
        className={headingClass}
        disableHover={disableLink}
      >
        {post.title}
      </PostHeading>

      <p>{post.excerpt}</p>
    </div>
  );
};
