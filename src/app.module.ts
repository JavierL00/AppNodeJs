import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CategoriesModule } from './categories/categories.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [UsersModule, PostsModule, CategoriesModule, MongooseModule.forRoot('mongodb://localhost/nest-project') ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
