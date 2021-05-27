import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { PostsController } from './posts/posts.controller';
import { CategoriesController } from './categories/categories.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { PostsService } from './posts/posts.service';
import { PostsModule } from './posts/posts.module';
import { CategoriesService } from './categories/categories.service';
import { CategoriesModule } from './categories/categories.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [UsersModule, PostsModule, CategoriesModule, MongooseModule.forRoot('mongodb://localhost/nest-project') ],
  controllers: [AppController, UsersController, PostsController, CategoriesController],
  providers: [AppService, UsersService, PostsService, CategoriesService],
})
export class AppModule {}
