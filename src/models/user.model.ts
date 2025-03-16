import mongoose from "mongoose";



export interface UsuarioInput {
    nombre: string;
    tipo: string;
    equipos: mongoose.Types.ObjectId[];
    contrato: mongoose.Types.ObjectId;
    contraseña: string;
}

export interface UsuarioDocument extends UsuarioInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;   

}

const UsuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    tipo: { type: String, required: true },
    equipos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Equipo" }],
    contrato: { type: mongoose.Schema.Types.ObjectId, ref: "Contrato" },
    contraseña: { type: String, required: true },
}, { timestamps: true, collection: 'usuarios' });

export const UsuarioModel = mongoose.model<UsuarioDocument>("Usuario", UsuarioSchema);
