import { NextApiRequest, NextApiResponse } from 'next';
import { dbCon } from '../../../../models';
import { ResponseFunctions } from '../../../../interfaces';
import { exit } from 'process';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
    const catcher = (error: Error) => res.status(400).json({ status: 0, error: error });
    const handleCase: ResponseFunctions = {
        POST: async (req: NextApiRequest, res: NextApiResponse) => {
            //
            const { token } = req.query;
            const { btc, usd, action } = req.body;

            const { Accounts, Deposits } = await dbCon();

            let oldUSD = 0;
            let oldBTC = 0;

            const newUSD = parseFloat(usd);
            const newBTC = parseFloat(btc);

            const user: any = await Accounts.findOne({ _id: token }).catch(catcher);

            if (user) {
                //
                oldUSD = parseFloat(user.usd);
                oldBTC = parseFloat(user.btc);

                let _usd = 0;
                let _btc = 0;

                if (action == 'credit') {
                    _usd = oldUSD + newUSD;
                    _btc = oldBTC + newBTC;
                } else if (action == 'debit') {
                    _usd = oldUSD - newUSD;
                    _btc = oldBTC - newBTC;
                }

                const update: any = await Accounts.updateOne(
                    { _id: token },
                    {
                        usd: _usd,
                        btc: _btc,
                    }
                ).catch(catcher);

                if (update.modifiedCount > 0) {
                    const dep = Deposits.create({
                        userid: token,
                        amount: _usd,
                    });
                    res.status(200).json({
                        status: 1,
                    });
                } else {
                    res.status(400).json({
                        status: 0,
                    });
                }
            } else {
                res.status(400).json({
                    status: 0,
                });
            }
        },
    };
    const response = handleCase[method];
    if (response) response(req, res);
    else res.status(400).json({ status: 0, error: 'No Response for This Request' });
}
