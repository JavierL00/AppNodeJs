import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Post } from "./interfaces/Post";

@Injectable()
export class PostsService {

    constructor(@InjectModel('Post') private postModel: Model<Post>) {}

}
