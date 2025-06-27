import { formatRelativeDate, getFormattedDate } from '@/utils/format-datetime';

type PostDateProps = {
  dateTime: string;
};

export const PostDate = ({ dateTime }: PostDateProps) => {
  return (
    <time
      dateTime={dateTime}
      title={formatRelativeDate(dateTime)}
      className='text-text-2'
    >
      {getFormattedDate(dateTime)}
    </time>
  );
};
