import { Controller, Delete, Get, Post, Put, Body } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto'

@Controller('users')
export class UsersController {

    @Get()
    getUsers(): string {
        return 'Getting users';
    }

    @Post()
    postUser(@Body() user: CreateUserDto): string {
        console.log(user);
        return 'Creating an user';
    }

    @Put()
    putUser(): string {
        return 'Updating an user';
    }

    @Delete()
    deleteUser(): string {
        return 'Deleting user'
    }

}
