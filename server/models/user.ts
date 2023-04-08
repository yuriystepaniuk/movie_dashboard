import mongoose, { Document, Schema } from "mongoose";

export interface IUser {
    username: string;
    email: string;
    password: string;
}

export interface IUserModel extends IUser, Document {
    username: string;
    email: string;
    password: string;
}

const UserSchema: Schema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

export default mongoose.model<IUserModel>("User", UserSchema);