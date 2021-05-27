import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { CreateCategoryDto } from './dto/create-category.dto'
import { Category } from "./interfaces/Category";
import { CategoriesService } from "./categories.service";

@Controller('categories')
export class CategoriesController {
    
    constructor(private categoryService: CategoriesService) {}

    @Get()
    getCategories(): Promise<Category[]> {
        return this.categoryService.getCategories();
    }

    @Get(':id')
    getCategory(@Param('id') id): Promise<Category>{
        return this.categoryService.getCategory(id);
    }

    @Post()
    postCategory(@Body() category: CreateCategoryDto): Promise<Category> {
        return this.categoryService.createCategory(category);
    }
    
    // FALTA EL METODO DE ACTUALIZAR (PUT)

    @Delete(':id')
    deleteCategory(@Param('id') id): Promise<Category> {
        return this.categoryService.deleteCategory(id);
    }

}
