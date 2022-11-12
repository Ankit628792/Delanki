
import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../db/connectDB';
import { getUserFromUserId, getUsers } from '../../../db/service/user.service';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await connectDB();
    switch (req.method) {
        case "POST":
            // post code block
            break;
        case "DELETE":
            // delete code block
            break;
        case "PATCH":
            // patch code block
            break;
        case "GET":
            // get code block
            try {
                res.status(200).send(getUsers())
            } catch (error) {
                res.status(400).send({ msg: 'Something went wrong' })
            }
            break;
        default:
            res.status(200).json({ name: 'John Doe' })
    }
}
