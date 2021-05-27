import { Schema } from "mongoose";

export const PostSchema = new Schema({
    userId: String,
    categoryId: String,
    titulo: String,
    contenido: String,
    imagen: String
});