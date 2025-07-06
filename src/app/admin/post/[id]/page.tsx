export const dynamic = 'force-dynamic';

type AdminPostIdPageParams = {
  params: Promise<{
    id: string;
  }>;
};

const AdminPostIdPage = async ({ params }: AdminPostIdPageParams) => {
  const { id } = await params;
  return (
    <div>
      <h1>Admin Post Page {id}</h1>
    </div>
  );
};

export default AdminPostIdPage;
