import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto'
import { User } from "./interfaces/User";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @Get()
    getUsers(): Promise<User[]>{
        return this.userService.getUsers();
    }

    @Get(':userId')
    getUser(@Param('userId') userId: string){
        return this.userService.getUser(userId)
    }

    @Post()
    postUser(@Body() user: CreateUserDto): Promise<User> {
        return this.userService.createUser(user)
    }

    // FALTA EL METODO DE ACTUALIZAR (PUT)

    @Delete(':id')
    deleteUser(@Param('id') id): Promise<User> {
        return this.userService.deleteUser(id);
    }

}
