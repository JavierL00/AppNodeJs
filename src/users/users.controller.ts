import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

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
