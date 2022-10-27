import { NextApiRequest, NextApiResponse } from 'next';
import { dbCon } from '../../../models';
import { ResponseFunctions } from '../../../interfaces';
const bcrypt = require('bcryptjs');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
    const catcher = (error: Error) => res.status(400).json({ status: 0, error: error });
    const handleCase: ResponseFunctions = {
        GET: async (req: NextApiRequest, res: NextApiResponse) => {
            res.status(200).json({ status: false, err: 'Only POST Method is allowed' });
        },
        POST: async (req: NextApiRequest, res: NextApiResponse) => {
            const { token } = req.body;
            const { Accounts } = await dbCon();
            const account = await Accounts.updateOne(
                { _id: token },
                {
                    active: false,
                }
            ).catch(catcher);
            if (account) {
                res.status(200).json({
                    status: 1,
                    data: account,
                });
            } else {
                res.status(404).json({ status: 0, err: 'Account not found' });
            }
        },
    };

    const response = handleCase[method];
    if (response) response(req, res);
    else res.status(400).json({ error: 'No Response for This Request' });
}
