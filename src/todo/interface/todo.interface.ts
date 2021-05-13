import { Document } from 'mongoose'
export interface Todo extends Document{
    readonly ci: string,
    readonly nombres: string,
    readonly apellidos: string,
    readonly lugar_de_nacimiento: string,
    readonly fecha_de_nacimiento: string,
    readonly carrera: string
}