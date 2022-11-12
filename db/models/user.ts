import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

export interface UserDocument extends mongoose.Document {
    email: string,
    name: string,
    image: string
    // password: string,
    createdAt: Date,
    updatedAt: Date,
    // comparePassword(condidatePassword: string): Promise<boolean>
}

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    image: { type: String },
    // password: { type: String, required: true }
}, { timestamps: true })

// UserSchema.pre('save', async function (next: any) {
//     let user = this as UserDocument
//     if (!user.isModified('password')) return next();

//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hashSync(user.password, salt)
//     user.password = hash
//     return next()
// })

// UserSchema.methods.comparePassword = async function (condidatePassword: string) {
//     const user = this as UserDocument;
//     return bcrypt.compare(condidatePassword, user.password).catch(e => false)
// }

const User = mongoose.models.User || mongoose.model<UserDocument>('User', UserSchema)

export default User