
import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../db/connectDB';
import { getUsers } from '../../../db/service/user.service';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await connectDB();
    switch (req.method) {
        case "GET":
            try {
                res.status(200).send(await getUsers(req.query))
            } catch (error) {
                res.status(400).send({ msg: 'Something went wrong' })
            }
            break;
        default:
            res.status(200).json({ name: 'John Doe' })
    }
}
