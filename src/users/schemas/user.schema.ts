import { Schema } from "mongoose";

export const UserSchema = new Schema({
    nombre: String,
    apellido: String,
    direccion: String,
    email: String,
    celular: String
});