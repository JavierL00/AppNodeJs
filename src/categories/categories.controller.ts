import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { CreateCategoryDto } from './dto/create-category.dto'
import { Request, Response } from "express";

@Controller('categories')
export class CategoriesController {

    @Get()
    getCategories(): string {
        return 'Getting categorias';
    }

    @Post()
    postCategory(@Body() category): string {
        console.log(category);
        return 'Creating a category';
    }
    
    @Put(':id')
    putCategory(@Body() category: CreateCategoryDto, @Param('id') id): string {
        console.log(category);
        console.log(id);
        return 'Updating a category';
    }

    @Delete(':id')
    deleteCategory(@Param('id') id): string {
        console.log(id);
        return 'Deleting category'
    }

}
