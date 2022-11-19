import { DocumentDefinition, ObjectId } from "mongoose";
import User, { UserDocument } from "../models/user"

let pics = [
    `https://res.cloudinary.com/${process.env.cloud_name}/image/upload/v1668868754/n1.png`,
    `https://res.cloudinary.com/${process.env.cloud_name}/image/upload/v1668868754/n2.png`,
    `https://res.cloudinary.com/${process.env.cloud_name}/image/upload/v1668868754/n3.png`,
    `https://res.cloudinary.com/${process.env.cloud_name}/image/upload/v1668868754/n4.png`,
    `https://res.cloudinary.com/${process.env.cloud_name}/image/upload/v1668868754/n5.png`
]

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
    return await User.find({ verified: true });
}

export async function createUser(input: DocumentDefinition<UserDocument>) {
    return await User.create({ ...input, image: pics[Math.floor(Math.random() * 5)], banner: `https://res.cloudinary.com/${process.env.cloud_name}/image/upload/v1668869214/banner.jpg` })
}

export async function updateUser(_id: ObjectId, input: DocumentDefinition<UserDocument>) {
    return await User.findByIdAndUpdate({ _id: _id }, input, { new: true })
}

export async function removeUser(_id: ObjectId) {
    return await User.findByIdAndDelete({ _id: _id })
}
