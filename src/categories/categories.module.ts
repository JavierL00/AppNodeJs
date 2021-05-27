import { Module } from '@nestjs/common';
import { CategoriesService } from "./categories.service";
import { CategoriesController } from "./categories.controller";
import { PostsController } from 'src/posts/posts.controller';
import { PostsService } from 'src/posts/posts.service';

@Module({
    imports: [],
    controllers: [PostsController],
    providers: [PostsService]
})
export class CategoriesModule {}
