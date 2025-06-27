import clsx from 'clsx';
import Link from 'next/link';

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as: 'h1' | 'h2' | 'h3';
  className?: string;
  disableHover?: boolean;
};

export const PostHeading = ({
  children,
  url,
  as: TagH = 'h2',
  className,
  disableHover = false,
}: PostHeadingProps) => {
  return (
    <TagH>
      <Link
        href={url}
        className={clsx(
          !disableHover && 'hover:text-text-2 hover:underline transition',
          className
        )}
      >
        {children}
      </Link>
    </TagH>
  );
};
