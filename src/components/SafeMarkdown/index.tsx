import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type SafeMarkdownProps = {
  markdown: string;
};

export const SafeMarkdown = ({ markdown }: SafeMarkdownProps) => {
  return (
    <section
      className={clsx(
        'bg-background-2 p-2 rounded',
        'prose',
        'max-w-full',
        'prose-code:whitespace-pre-wrap',
        'prose-img:mx-auto',
      )}
    >
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ ...props }) => <h2 className='m-h2' {...props} />,
          h3: ({ ...props }) => <h3 className='m-h3' {...props} />,
          p: ({ ...props }) => <p className='m-p' {...props} />,
          a: ({ ...props }) => <a className='m-a' {...props} />,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </section>
  );
};
