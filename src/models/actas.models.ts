import mongoose from "mongoose";

export interface ActaInput {
    usuarioAsignado: mongoose.Types.ObjectId;
    usuarioDestinatario: mongoose.Types.ObjectId;
    fechaResolucion: Date;
    descripcion: string;
    equipos: mongoose.Types.ObjectId[];
}

export interface ActaDocument extends ActaInput, mongoose.Document {}

const ActaSchema = new mongoose.Schema({
    usuarioAsignado: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
    usuarioDestinatario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
    fechaResolucion: { type: Date, required: true },
    descripcion: { type: String, required: true },
    equipos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Equipo" }],
}, { timestamps: true, collection: 'actas' });

export const ActaModel = mongoose.model<ActaDocument>("Acta", ActaSchema);