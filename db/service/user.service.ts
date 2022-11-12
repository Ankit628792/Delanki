import { DocumentDefinition } from "mongoose";
import User, { UserDocument } from "../models/user"

export async function getUserFromEmail(email: string) {
    try {
        return await User.findOne({ email: email });
    } catch (error) {
        console.log(error);
        return false
    }
}

export async function getUserFromUserId(_id: UserDocument['_id']) {
    return await User.findById({ _id: _id });
}

export async function getUsers() {
    return await User.find();
}

export async function createUser(input: DocumentDefinition<UserDocument>) {
    return await User.create(input)
}