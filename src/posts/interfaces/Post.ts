import { Document } from "mongoose";

export interface PostI extends Document{
    userId: string;
    categoryId: string;
    titulo: string;
    contenido: string;
    imagen: string
}