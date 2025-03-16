import mongoose from "mongoose";

export interface EmpresaInput {
    nombre: string;
    equipos: mongoose.Types.ObjectId[];
    empleados: mongoose.Types.ObjectId[];
}

export interface EmpresaDocument extends EmpresaInput, mongoose.Document {}

const EmpresaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    equipos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Equipo" }],
    empleados: [{ type: mongoose.Schema.Types.ObjectId, ref: "Usuario" }],
}, { timestamps: true, collection: 'empresas' });

export const EmpresaModel = mongoose.model<EmpresaDocument>("Empresa", EmpresaSchema);