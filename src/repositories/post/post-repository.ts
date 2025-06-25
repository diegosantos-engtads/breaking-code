import { PostModel } from '@/models/post/post-model';

export interface PostRepository {
  findAllPublic(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel | undefined>;
  findBySlug(slug: string): Promise<PostModel | undefined>;
}
