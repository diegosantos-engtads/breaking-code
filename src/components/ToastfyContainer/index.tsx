'use client';

import { useTheme } from 'next-themes';
import { Bounce, ToastContainer } from 'react-toastify';

export const ToastfyContainer = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme={resolvedTheme === 'light' ? 'light' : 'dark'}
        transition={Bounce}
      />
    </div>
  );
};
