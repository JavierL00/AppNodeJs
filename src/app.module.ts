import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { PostsController } from './posts/posts.controller';
import { CategoriesController } from './categories/categories.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, PostsController, CategoriesController],
  providers: [AppService],
})
export class AppModule {}
