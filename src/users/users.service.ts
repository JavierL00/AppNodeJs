import { Injectable } from '@nestjs/common';
import { User } from "./interfaces/User";

@Injectable()
export class UsersService {

    users: User[] = [
        {
            id: 1,
            nombre: "Juan1",
            apellido: "Herrera1",
            direccion: "Av Manzana1",
            email: "JHman1@gmail.com",
            celular: "147583746"
        },
        {
            id: 2,
            nombre: "Juan2",
            apellido: "Herrera2",
            direccion: "Av Manzana2",
            email: "JHman2@gmail.com",
            celular: "247583746"
        },
        {
            id: 3,
            nombre: "Juan3",
            apellido: "Herrera3",
            direccion: "Av Manzana3",
            email: "JHman3@gmail.com",
            celular: "347583746"
        }
        
    ];

    getUsers(): User[] {
        return this.users;
    }

    getUser(id: number): User {
        return this.users.find(user => user.id === id);
    }

}
