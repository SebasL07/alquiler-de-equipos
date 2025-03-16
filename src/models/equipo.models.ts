import mongoose from "mongoose";

export interface EquipoInput {
    inventoryCode: string;
    name: string;
    state: string; // "Nuevo", "Usado", "Reparación", "Descontinuado", "En mantenimiento", "En garantía"
    owner: mongoose.Types.ObjectId;
    type: string; // "Laptop", "PC", "Impresora", "Tablet", "Celular", "Pantalla"
    brand: string;
    model: string;
    description: string;
    stock: number;
    warrantyPeriod: string;
    releaseDate: Date;
    photo?: string;
}

export interface EquipoDocument extends EquipoInput {
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}

const EquipoSchema = new mongoose.Schema({
    inventoryCode: { type: String, required: true },
    name: { type: String, required: true },
    type: { 
        type: String, 
        required: true, 
        enum: ["Laptop", "PC", "Impresora", "Tablet", "Celular", "Pantalla"] 
    },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    warrantyPeriod: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    photo: { type: String },
}, { timestamps: true, collection: 'equipos' });

export const EquipoModel = mongoose.model<EquipoDocument>('Equipo', EquipoSchema);