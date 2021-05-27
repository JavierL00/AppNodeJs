import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Category } from "./interfaces/Category";

@Injectable()
export class CategoriesService {

    constructor(@InjectModel('Category') private categoryModel: Model<Category>) {}

}
