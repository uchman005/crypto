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
            const account = await Accounts.findOne({ _id: token }).catch(catcher);
            if (account) {
                res.status(200).json({
                    status: 1,
                    accid: account._id,
                    email: account.email,
                    mobile: account.mobile,
                    firstname: account.firstname,
                    lastname: account.lastname,
                    role: account.role,
                    address: account.address,
                    country: account.country,
                    avatar: account.avatar,
                    btc: account.btc,
                    usd: account.usd,
                    lastseen: account.lastseen,
                    active: account.active,
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
