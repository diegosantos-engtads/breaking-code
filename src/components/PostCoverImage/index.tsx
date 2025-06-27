import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

type PostCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps?: React.ComponentProps<typeof Link>;
  className?: string;
};

export const PostCoverImage = ({
  imageProps,
  linkProps,
  className,
}: PostCoverImageProps) => {
  return linkProps ? (
    <Link
      {...linkProps}
      className={clsx('group overflow-hidden rounded-md', linkProps.className)}
    >
      <Image
        className={clsx(
          'group-hover:scale-105 transition',
          'object-cover object-center',
          imageProps.className,
        )}
        {...imageProps}
        alt={imageProps.alt}
      />
    </Link>
  ) : (
    <Image
      className={clsx(
        'group-hover:scale-105 transition',
        'object-cover object-center',
        imageProps.className,
        className,
      )}
      {...imageProps}
      alt={imageProps.alt}
    />
  );
};
