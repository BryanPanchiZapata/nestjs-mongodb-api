import { Schema } from "mongoose";

export const TodoSchema = new Schema({
    ci: String,
    nombres: String,
    apellidos: String,
    lugar_de_nacimiento: String,
    fecha_de_nacimiento: String,
    carrera: String
});