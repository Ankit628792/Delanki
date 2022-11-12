import mongoose from 'mongoose';

export interface ContactDocument extends mongoose.Document {
    name: string;
    email: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
}

const userContact = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Contact = mongoose.models.Contact || mongoose.model<ContactDocument>("Contact", userContact);

export default Contact;