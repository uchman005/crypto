import { NextApiRequest, NextApiResponse } from 'next';
import { dbCon } from '../../../models';
import { ResponseFunctions } from '../../../interfaces';
// import nextCookie from 'next-cookies';
import mongoose from 'mongoose';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
    const catcher = (error: Error) => res.status(400).json({ status: 0, error: error });
    const handleCase: ResponseFunctions = {
        GET: async (req: NextApiRequest, res: NextApiResponse) => {
            res.status(400).json({ status: false, err: 'Only POST Method is allowed' });
        },
        POST: async (req: NextApiRequest, res: NextApiResponse) => {
            const { token } = req.cookies;
            const { packageid, amount, starts, ends } = req.body;
            const { Accounts } = await dbCon();
            const updateIt = await Accounts.updateOne(
                { _id: token },
                {
                    $push: {
                        investments: {
                            packageid: packageid,
                            amount: amount,
                            starts: starts,
                            expires: ends,
                        },
                    },
                }
            );

            if (!updateIt) {
                res.status(404).json({ status: 0, err: 'Error creating Investment' });
            } else {
                res.status(200).json({ status: 1, data: updateIt });
            }
        },
    };

    const response = handleCase[method];
    if (response) response(req, res);
    else res.status(400).json({ status: 0, error: 'No Response for This Request' });
}
