import { postsTable } from './schemas';
import { drizzleDb } from '.';
import { JsonPostRepository } from '@/repositories/__deprecated__/json-post-repository';

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();

  // await drizzleDb.insert(postsTable).values(posts);

  try {
    await drizzleDb.delete(postsTable);
    await drizzleDb.insert(postsTable).values(posts);
    console.log(`${posts.length} foram salvos corretamente`);
  } catch (error) {
    console.log('_____');
    console.log('_____');
    console.log(error);
  }
})();
