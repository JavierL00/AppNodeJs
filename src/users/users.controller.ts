import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto'
import { User } from "./interfaces/User";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @Get()
    getUsers(): User[]{
        return this.userService.getUsers();
    }

    @Get(':userId')
    getUser(@Param('userId') userId: string): User {
        return this.userService.getUser(parseInt(userId))
    }

    @Post()
    postUser(@Body() user: CreateUserDto): string {
        console.log(user);
        return 'Creating an user';
    }

    @Put(':id')
    putUser(@Body() user: CreateUserDto, @Param('id') id): string {
        console.log(user);
        console.log(id);       
        return 'Updating an user';
    }

    @Delete(':id')
    deleteUser(@Param('id') id): string {
        console.log(id);
        return 'Deleting user'
    }

}
