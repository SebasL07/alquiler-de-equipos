import mongoose from "mongoose";
export interface ContratoInput {
    descripcion: string;
    equipo: mongoose.Types.ObjectId;
    usuario: mongoose.Types.ObjectId;
    fechaAlquiler: Date;
    fechaDevolucion: Date;
}

export interface ContratoDocument extends ContratoInput, mongoose.Document {}

const ContratoSchema = new mongoose.Schema({
    descripcion: { type: String, required: true },
    equipo: { type: mongoose.Schema.Types.ObjectId, ref: "Equipo" },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
    fechaAlquiler: { type: Date, required: true },
    fechaDevolucion: { type: Date, required: true },
}, { timestamps: true, collection: 'contratos' });

export const ContratoModel = mongoose.model<ContratoDocument>("Contrato", ContratoSchema);