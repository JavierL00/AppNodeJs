import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { CreatePostDto } from './dto/create-post.dt'
import { Request, Response } from "express";

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
    
    @Put(':id')
    putPost(@Body() post: CreatePostDto, @Param('id') id): string {
        console.log(post);
        console.log(id);
        return 'Updating a post';
    }

    @Delete(':id')
    deletePost(@Param('id') id): string {
        console.log(id);
        return 'Deleting post'
    }

}
