import mongoose from "mongoose";



export interface UserInput {
    name: string;
    type: string;
    devices: mongoose.Types.ObjectId[];
    contract: mongoose.Types.ObjectId;
    password: string;
}

export interface UserDocument extends UserInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;   

}

const UsuarioSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    email: { type: String, required: true },
    devices: [{ type: mongoose.Schema.Types.ObjectId, ref: "Equipo" }],
    contract: { type: mongoose.Schema.Types.ObjectId, ref: "Contrato" },
    password: { type: String, required: true },
}, { timestamps: true, collection: 'usuarios' });

export const UserModel = mongoose.model<UserDocument>("Usuario", UsuarioSchema);
