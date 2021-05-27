import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { CreatePostDto } from './dto/create-post.dt'
import { PostI } from './interfaces/Post';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) {}

    @Get()
    getPosts(): Promise<PostI[]> {
        return this.postService.getPosts();
    }

    @Get(':id')
    getPost(@Param('id') id): Promise<PostI> {
        return this.postService.getPost(id);
    }

    @Post()
    postPost(@Body() post: CreatePostDto): Promise<PostI> {
        return this.postService.createPost(post);
    }
    
    // FALTA EL METODO DE ACTUALIZAR (PUT)

    @Delete(':id')
    deletePost(@Param('id') id): Promise<PostI> {
        return this.postService.deletePost(id);
    }

}
