import { postRepository } from '@/repositories/post';

export const PostsList = async () => {
  const posts = await postRepository.findAll();

  return (
    <div className='bg-[#fff]'>
      {posts.map(post => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
};

export default PostsList;
