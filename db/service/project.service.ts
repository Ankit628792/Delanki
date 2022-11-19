import { DocumentDefinition, ObjectId } from "mongoose";
import Project, { ProjectDocument } from "../models/project"


export async function getProjectFromUserId(_id: ObjectId) {
    return await Project.find({ userId: _id });
}

export async function getProjects() {
    return await Project.find();
}

export async function createProject(input: DocumentDefinition<ProjectDocument>) {
    return await Project.create(input)
}

export async function updateProject(_id: ObjectId, input: DocumentDefinition<ProjectDocument>) {
    return await Project.findByIdAndUpdate({ _id: _id }, input)
}

export async function removeProject(_id: ObjectId) {
    return await Project.findByIdAndDelete({ _id: _id })
}
