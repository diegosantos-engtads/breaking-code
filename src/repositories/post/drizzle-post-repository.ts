import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';
import { logColor } from '@/utils/log-color';
import { asyncDelay } from '@/utils/async-delay';
import { SIMULATE_WAIT_IN_MS } from '@/lib/post/constants';

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor('\n', 'Drizzle findAllPublic', Date.now(), '\n');

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });
    return posts;
  }
  async findBySlugPublic(slug: string): Promise<PostModel | undefined> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor('\n', 'Drizzle findBySlugPublic', Date.now(), '\n');

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });
    return post;
  }

  async findAll(): Promise<PostModel[]> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor('\n', 'Drizzle findAll', Date.now(), '\n');
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });
    return posts;
  }

  async findById(id: string): Promise<PostModel | undefined> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor('\n', 'Drizzle findById', Date.now(), '\n');
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });
    return post;
  }
}

// (async () => {
//   const repo = new DrizzlePostRepository();
//   const posts = await repo.findBySlugPublic(
//     'como-a-tecnologia-impacta-nosso-bem-estar',
//   );

//   // posts.map(post => console.log(post.slug, post.published));
//   console.log(posts);
// })();
