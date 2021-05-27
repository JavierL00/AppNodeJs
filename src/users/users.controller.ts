import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(): string {
        return 'Getting users';
    }

    @Post()
    postUser(): string {
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
