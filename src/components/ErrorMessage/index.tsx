type ErrorMessageProps = {
  pageTitle: string;
  contentTitle: string;
  content: React.ReactNode;
  className?: string;
};

export const ErrorMessage = ({
  pageTitle,
  contentTitle,
  content,
  className,
}: ErrorMessageProps) => {
  return (
    <>
      <title>{pageTitle}</title>
      <div className={className}>
        <div className='flex flex-col gap-2'>
          <h1>{pageTitle}</h1>
          <h2>{contentTitle}</h2>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};
