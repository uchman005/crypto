import { NextApiRequest, NextApiResponse } from "next";
import { ResponseFunctions } from "../../interfaces";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
    // const catcher = (error: Error) => res.status(400).json({ error })
    const handleCase: ResponseFunctions = {
        GET: async (req: NextApiRequest, res: NextApiResponse) => {
            res.status(200).json({ status: false, err: "Invalid API endpoint" });
        },
        POST: async (req: NextApiRequest, res: NextApiResponse) => {
            res.status(200).json({ status: false, err: "Invalid API endpoint" });
        },
    };
    const response = handleCase[method];
    if (response) response(req, res);
    else res.status(400).json({ error: "No Response for This Request" });
}
