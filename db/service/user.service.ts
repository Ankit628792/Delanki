import { DocumentDefinition, ObjectId } from "mongoose";
import User, { UserDocument } from "../models/user"

export async function getUserFromEmail(email: string) {
    try {
        return await User.findOne({ email: email });
    } catch (error) {
        return false
    }
}

export async function getUserFromUserId(_id: ObjectId) {
    return await User.findById({ _id: _id });
}

export async function getUsers() {
    return await User.find();
}

export async function createUser(input: DocumentDefinition<UserDocument>) {
    return await User.create(input)
}

export async function updateUser(_id: ObjectId, input: DocumentDefinition<UserDocument>) {
    return await User.findByIdAndUpdate({ _id: _id }, input, { new: true })
}

export async function removeUser(_id: ObjectId) {
    return await User.findByIdAndDelete({ _id: _id })
}
