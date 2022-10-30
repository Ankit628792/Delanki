
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
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
            break;
        default:
            res.status(200).json({ name: 'John Doe' })
        // code block
    }
}
