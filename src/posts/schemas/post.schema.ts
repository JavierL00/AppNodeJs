import { Schema } from "mongoose";

export const PostSchema = new Schema({
    userId: Number,
    categoryId: Number,
    titulo: String,
    contenido: String,
    imagen: String
});