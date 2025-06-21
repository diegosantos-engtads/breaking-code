import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { resolve } from 'path';
import { readFile } from 'fs/promises';

const ROOT_DIR = process.cwd();
const JSON_POST_POST_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);

const SIMULATE_WAIT_IN_MS = 0;

export class JsonPostyRepository implements PostRepository {
  private async simulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 0) return;
    await new Promise(resolve => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }

  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POST_POST_PATH, 'utf-8');
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    return posts;
  }
  async findById(id: string): Promise<PostModel> {
    await this.simulateWait();
    const posts = await this.findAll();
    const post = posts.find(post => post.id === id);

    if (!post) throw new Error('Id Não Encontrado');

    return post;
  }
}

// postRepository.findAll().then(jsonContent => console.log(jsonContent));

// (async () => {
//   const posts = await postRepository.findAll();
//   console.log(posts.map(posts => posts.author));
// })();
