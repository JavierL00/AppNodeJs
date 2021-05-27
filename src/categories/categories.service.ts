import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from "./interfaces/Category";

@Injectable()
export class CategoriesService {

    constructor(@InjectModel('Category') private categoryModel: Model<Category>) {}

    async getCategories() {
        return await this.categoryModel.find();
    }

    async getCategory(id: string) {
        return await this.categoryModel.findById(id);
    }

    async createCategory(category: CreateCategoryDto) {
        const newCategory = new this.categoryModel(category);
        return await newCategory.save();
    }

    // FALTA PODER ACTUALIZAR

    async deleteCategory(id: string) {
        return await this.categoryModel.findByIdAndDelete(id);
    }
}
