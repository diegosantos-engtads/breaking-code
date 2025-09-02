// import { ButtonConfirm } from '@/components/ButtonConfirm';
// import { BanIcon, BugIcon, CheckIcon, DeleteIcon } from 'lucide-react';

import { InputText } from '@/components/InputText';

export const dynamic = 'force-dynamic';

const AdminPostNewPage = async () => {
  return (
    <>
      <div className='flex flex-col gap-6'>
        <InputText
          labelText='Nome'
          id=''
          placeholder='Digite seu nome'
        />
        <InputText
          labelText='Sobrenome'
          id=''
          placeholder='Digite seu sobrenome'
          disabled
        />
        <InputText
          labelText='Sobrenome'
          id=''
          placeholder='Digite seu sobrenome'
          readOnly
        />

        {/* <ButtonConfirm variant='confirm'>
          <BugIcon /> Confirmar
        </ButtonConfirm>
        <ButtonConfirm variant='cancel'>
          <BanIcon /> Cancelar
        </ButtonConfirm>
        <ButtonConfirm variant='ok'>
          <CheckIcon /> Ok
        </ButtonConfirm>
        <ButtonConfirm variant='delete'>
          <DeleteIcon /> Apagar
        </ButtonConfirm> */}
      </div>
    </>
  );
};

export default AdminPostNewPage;
