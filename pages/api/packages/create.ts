import { NextApiRequest, NextApiResponse } from 'next';
import { dbCon } from '../../../models';
import { ResponseFunctions } from '../../../interfaces';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
    const catcher = (error: Error) => res.status(400).json({ status: 0, error: error });
    const handleCase: ResponseFunctions = {
        POST: async (req: NextApiRequest, res: NextApiResponse) => {
            const { name, description, minAmount, maxAmount } = req.body;

            const { Packages } = await dbCon();
            const created = await Packages.create({
                name: name,
                description: description,
                min: minAmount,
                max: maxAmount,
            }).catch(catcher);

            if (!created) {
                res.status(404).json({ status: 0, err: 'Error creating account' });
            } else {
                res.status(200).json({ status: 1, packageId: created._id });
            }
        },
    };

    const response = handleCase[method];
    if (response) response(req, res);
    else res.status(400).json({ status: 0, error: 'No Response for This Request' });
}
