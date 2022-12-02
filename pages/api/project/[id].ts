
import { ObjectId } from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../db/connectDB';
import { createProject, getProjectFromUserId, removeProject, updateProject } from '../../../db/service/project.service';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await connectDB();
    switch (req.method) {
        case "GET":
            try {
                res.status(200).send(await getProjectFromUserId(req.query.id as unknown as ObjectId))
            } catch (error) {
                res.status(400).send({ msg: 'Something went wrong' })
            }
            break;
        case "POST":
            try {
                res.status(200).send(await createProject(req.body))
            } catch (error) {
                res.status(400).send({ msg: 'Something went wrong' })
            }
            break;
        case "PATCH":
            try {
                res.status(200).send(await updateProject(req.body))
            } catch (error) {
                res.status(400).send({ msg: 'Something went wrong' })
            }
            break;
        case "DELETE":
            try {
                res.status(200).send(await removeProject(req.query.id as unknown as ObjectId))
            } catch (error) {
                res.status(400).send({ msg: 'Something went wrong' })
            }
            break;
        default:
            res.status(200).json({ name: 'John Doe' })

    }
}

