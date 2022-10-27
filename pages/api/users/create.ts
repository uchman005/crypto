import { NextApiRequest, NextApiResponse } from 'next';
import { dbCon } from '../../../models';
import { ResponseFunctions } from '../../../interfaces';
const bcrypt = require('bcryptjs');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
    const catcher = (error: Error) => res.status(400).json({ status: 0, error: error });
    const handleCase: ResponseFunctions = {
        GET: async (req: NextApiRequest, res: NextApiResponse) => {
            res.status(400).json({ status: false, err: 'Only POST Method is allowed' });
        },
        POST: async (req: NextApiRequest, res: NextApiResponse) => {
            const { firstname, lastname, mobile, email, country, address, password } = req.body;
            const salt = bcrypt.genSaltSync(10);
            const { Accounts } = await dbCon();
            const created = await Accounts.create({
                email: email,
                firstname: firstname,
                lastname: lastname,
                mobile: mobile,
                address: address,
                country: country,
                password: password,
            }).catch(catcher);
            if (!created) {
                res.status(404).json({ status: 0, err: 'Error creating account' });
            } else {
                res.status(200).json({ status: 1, accid: created.id, email: created.email });
            }
        },
    };

    const response = handleCase[method];
    if (response) response(req, res);
    else res.status(400).json({ status: 0, error: 'No Response for This Request' });
}
