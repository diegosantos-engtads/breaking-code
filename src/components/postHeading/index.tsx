import Link from 'next/link';

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as: 'h1' | 'h2' | 'h3';
};

export const PostHeading = ({
  children,
  url,
  as: TagH = 'h2',
}: PostHeadingProps) => {
  return (
    <TagH>
      <Link href={url}>{children}</Link>
    </TagH>
  );
};
