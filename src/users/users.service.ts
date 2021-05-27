import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from './dto/create-user.dto';
import { User } from "./interfaces/User";

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private userModel: Model<User>) {}

    async getUsers() {
        return await this.userModel.find();
    }

    async getUser(id: string) {
        return await this.userModel.findById(id);
    }

    async createUser(user: CreateUserDto) {
        const newUser = new this.userModel(user);
        return await newUser.save();
    }

    // FALTA PODER ACTUALIZAR

    async deleteUser(id: string) {
        return await this.userModel.findByIdAndDelete(id);
    }
}
