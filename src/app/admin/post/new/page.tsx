import { ButtonConfirm } from '@/components/ButtonConfirm';

export const dynamic = 'force-dynamic';

const AdminPostNewPage = async () => {
  return (
    <>
      <h1>Admin Post Page</h1>

      <div className='flex justify-center gap-10 pt-2'>
        <ButtonConfirm variant='cancel'>Cancelar</ButtonConfirm>
        <ButtonConfirm variant='reset'>Confirmar</ButtonConfirm>
      </div>
    </>
  );
};

export default AdminPostNewPage;
