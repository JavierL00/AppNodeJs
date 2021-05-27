import { Document } from "mongoose";

export interface User extends Document{
    id?: number;
    nombre: string;
    apellido:string;
    direccion: string;
    email: string;
    celular: string
}