import mongoose from "mongoose";
export interface MensajeInput {
    descripcion: string;
    tipo: string;
    destinatario: mongoose.Types.ObjectId;
    emisor: mongoose.Types.ObjectId;
}

export interface MensajeDocument extends MensajeInput, mongoose.Document {}

const MensajeSchema = new mongoose.Schema({
    descripcion: { type: String, required: true },
    tipo: { type: String, required: true },
    destinatario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
    emisor: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
}, { timestamps: true, collection: 'mensajes' });

export const MensajeModel = mongoose.model<MensajeDocument>("Mensaje", MensajeSchema);