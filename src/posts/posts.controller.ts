import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('posts')
export class PostsController {

    @Get()
    getPosts(): string {
        return 'Getting Posts';
    }

    @Post()
    postPost(): string {
        return 'Creating a post';
    }
    
    @Put()
    putPost(): string {
        return 'Updating a post';
    }

    @Delete()
    deletePost(): string {
        return 'Deleting post'
    }

}
