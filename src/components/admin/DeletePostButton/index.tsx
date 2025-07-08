'use client';

import { deletePost } from '@/actions/post/delete-post';
import { Dialog } from '@/components/Dialog';
import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';
import { useState, useTransition } from 'react';
import { toast } from 'react-toastify';

type DeletePostButtonProps = {
  id: string;
  title: string;
};

export const DeletePostButton = ({ id, title }: DeletePostButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const [showDialog, setShowDialog] = useState(false);

  const handleClick = () => {
    setShowDialog(true);
  };

  const handleConfirm = () => {
    startTransition(async () => {
      const result = await deletePost(id);
      if (result.error) {
        toast.error(result.error);
        return;
      }
      toast.success('Post Apagado');
    });
  };

  return (
    <>
      <button
        className={clsx(
          'flex items-center justify-center',
          'text-red-500 cursor-pointer transition',
          'enabled:[&_svg]:hover:scale-110 enabled:[&_svg]:hover:text-red-700',
          'disabled:cursor-not-allowed',
          'disabled:animate-spin disabled:border disabled:rounded-full disabled:border-t-transparent',
        )}
        aria-label={`Apagar post: ${title}`}
        title={`Apagar post: ${title}`}
        onClick={handleClick}
        disabled={isPending}
      >
        <Trash2Icon
          size={18}
          className={clsx(isPending && 'text-transparent')}
        />
      </button>

      {showDialog && (
        <Dialog
          isVisible={showDialog}
          title='Breaking Code'
          content={
            <div className='space-y-2'>
              <p>
                <strong className='text-red-600'>Deseja apagar o post:</strong>
              </p>
              <p className='underline'>{title}</p>
            </div>
          }
          cancelAction={() => setShowDialog(false)}
          confirmAction={handleConfirm}
          disabled={isPending}
        />
      )}
    </>
  );
};
