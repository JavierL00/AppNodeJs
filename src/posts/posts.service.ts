import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreatePostDto } from './dto/create-post.dt';
import { PostI } from "./interfaces/Post";

@Injectable()
export class PostsService {

    constructor(@InjectModel('Post') private postModel: Model<PostI>) {}

    async getPosts() {
        return await this.postModel.find();
    }

    async getPost(id: string) {
        return await this.postModel.findById(id);
    }

    async createPost(post: CreatePostDto) {
        const newPost = new this.postModel(post);
        return await newPost.save();
    }

    // FALTA PODER ACTUALIZAR

    async deletePost(id: string) {
        return await this.postModel.findByIdAndDelete(id);
    }

}
