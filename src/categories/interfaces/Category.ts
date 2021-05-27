import { Document } from "mongoose";

export interface Category extends Document{
    nombre: string
}