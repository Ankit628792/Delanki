import mongoose from 'mongoose'

export interface UserDocument extends mongoose.Document {
    name: string,
    email: string,
    designation: string,
    bio: string,
    mobile: number,
    image: string,
    banner: string,
    linkedin: string,
    github: string,
    other: string,
    resume: string,
    status: string,
    role: string,
    skills: Array<string>,
    verified: boolean,
    level: number,
    createdAt: Date,
    updatedAt: Date,
}

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    designation: { type: String },
    bio: { type: String, default: '' },
    mobile: { type: Number },
    image: { type: String, default: '' },
    banner: { type: String, default: '' },
    linkedin: { type: String, default: '' },
    github: { type: String, default: '' },
    other: { type: String, default: '' },
    resume: { type: String, default: '' },
    skills: { type: Array, default: [] },
    role: { type: String, default: 'user' },
    status: { type: String, default: '' },
    level: { type: Number, default: 5 },
    verified: { type: Boolean, default: false }
}, { timestamps: true })


const User = mongoose.models.User || mongoose.model<UserDocument>('User', UserSchema)

export default User