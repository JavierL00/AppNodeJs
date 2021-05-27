import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

    @Get()
    getCategories(): string {
        return 'Getting categorias';
    }

    @Post()
    postCategory(): string {
        return 'Creating a category';
    }
    
    @Put()
    putCategory(): string {
        return 'Updating a category';
    }

    @Delete()
    deleteCategory(): string {
        return 'Deleting category'
    }

}
