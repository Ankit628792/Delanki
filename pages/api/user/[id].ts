
import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../db/connectDB';
import { getUserFromEmail, getUserFromUserId } from '../../../db/service/user.service';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await connectDB();
    try {
        res.status(200).send(await getUserFromEmail(req.query.id as string))
    } catch (error) {
        res.status(400).send({ msg: 'Something went wrong' })
    }

}

