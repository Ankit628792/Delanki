import mongoose, { ObjectId, Schema } from 'mongoose'

export interface ProjectDocument extends mongoose.Document {
    title: string,
    userId: ObjectId,
    description: string,
    portrait: string,
    landscape: string,
    link: string,
    techs: Array<string>,
    createdAt: Date,
    updatedAt: Date,
}

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true, },
    userId: { type: Schema.Types.ObjectId, required: true },
    description: { type: String, required: true, default: '' },
    portrait: { type: String, default: '' },
    landscape: { type: String, required: true, default: '' },
    link: { type: String, required: true, default: '' },
    techs: { type: Array, required: true, default: [] }
}, { timestamps: true })


const Project = mongoose.models.Project || mongoose.model<ProjectDocument>('Project', ProjectSchema)

export default Project