import { JsonPostyRepository } from './json-post-repository';
import { PostRepository } from './post-repository';

export const postRepository: PostRepository = new JsonPostyRepository();
