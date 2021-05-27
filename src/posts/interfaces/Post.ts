import { Document } from "mongoose";

export interface Post extends Document{
    id?: number;
    userId?: number;
    categoryId?: number;
    titulo: string;
    contenido: string;
    imagen: string
}