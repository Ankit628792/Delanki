
import { ObjectId } from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../db/connectDB';
import { getUserFromUserId, removeUser, updateUser } from '../../../db/service/user.service';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await connectDB();
    switch (req.method) {
        case "GET":
            try {
                res.status(200).send(await getUserFromUserId(req.query.id as unknown as ObjectId))
            } catch (error) {
                res.status(400).send({ msg: 'Something went wrong' })
            }
            break;
        case "PATCH":
            try {
                res.status(200).send(await updateUser(req.query.id as unknown as ObjectId, req.body))
            } catch (error) {
                res.status(400).send({ msg: 'Something went wrong' })
            }
            break;
        case "DELETE":
            try {
                res.status(200).send(await removeUser(req.query.id as unknown as ObjectId))
            } catch (error) {
                res.status(400).send({ msg: 'Something went wrong' })
            }
            break;
        default:
            res.status(200).json({ name: 'John Doe' })

    }
}

