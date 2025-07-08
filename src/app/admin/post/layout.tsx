import { MenuAdmin } from '@/components/admin/MenuAdmin';

type AdminPostLayoutProps = {
  children: React.ReactNode;
};

const AdminPostLayout = ({ children }: AdminPostLayoutProps) => {
  return (
    <>
      <MenuAdmin />
      {children}
    </>
  );
};

export default AdminPostLayout;
