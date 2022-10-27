import { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import AccountLayout from '../../../../components/AccountLayout';
import nextCookie from 'next-cookies';
import Router, { useRouter } from 'next/router';
import IsWorking from '../../../../components/Working';
import { ToastContainer } from 'react-toastify';
import React, { useState } from 'react';

const Index: NextPage = ({ token, user, profile, usdRate }: any) => {
    const router = useRouter();
    const { usertoken } = router.query;

    const newFund: any = {
        btc: 0,
        usd: 0,
        action: 'credit',
    };

    const newEditor = {
        inBTC: false,
        inUSD: false,
    };

    const [editor, setEditor] = useState(newEditor);

    const [fundError, setFundError] = useState('');
    const [fund, setFund] = useState(newFund);
    const [busy, setBusy] = useState(false);

    const covertUSDToBTC = (usd: any) => {
        const _btc = usd / usdRate;
        setFund({
            ...fund,
            btc: _btc,
            usd: usd,
        });
    };

    const doFundUpdate = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        setBusy(true);
        setFundError('');
        try {
            const response = await fetch(`/api/users/${usertoken}/fund`, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(fund),
            });
            if (response.status == 200) {
                const data = await response.json();
                router.push('/admin');
            } else {
                setFundError('Updating user failed.');
            }
        } catch (error) {
            setFundError('Updating user failed.');
        } finally {
            setBusy(false);
        }
    };

    // toast('Wow so easy!');
    return (
        <>
            <ToastContainer />
            <AccountLayout userinfo={profile} menukey="dashboard" subpage={true}>
                <div className="section-title three">
                    <h2>
                        Add BTC/USD Fund to :{' '}
                        <strong className="text-green-500">
                            {user.firstname} {user.lastname}
                        </strong>
                        <hr />
                    </h2>
                </div>
                <div className="container">
                    <div className="m-[30px]">
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <div className="col-md-12 w-full text-center my-4">
                                    <IsWorking loading={busy} />{' '}
                                    <span className="text-red-600 text-lg">{fundError}</span>
                                </div>
                                <form id="updateProfile" onSubmit={doFundUpdate} method="post">
                                    <input type="hidden" name="token" id="token" value={user._id} />

                                    <table
                                        id="myDataTable"
                                        className="display w-full m-[20px] table table-responsive table-altered"
                                        width="100%"
                                    >
                                        <tr>
                                            <th scope="col">CREDIT or DEBIT?</th>
                                            <td scope="col">
                                                <div className="form-group mt-2">
                                                    <label className="mx-2">
                                                        <input
                                                            type="radio"
                                                            name="creditordebit"
                                                            id="creditordebit"
                                                            required={true}
                                                            value="credit"
                                                            onChange={(e) =>
                                                                setFund({ ...fund, action: e.target.value })
                                                            }
                                                        />{' '}
                                                        Credit
                                                    </label>
                                                    <label className="mx-2">
                                                        <input
                                                            type="radio"
                                                            name="creditordebit"
                                                            id="creditordebit"
                                                            required={true}
                                                            value="debit"
                                                            onChange={(e) =>
                                                                setFund({ ...fund, action: e.target.value })
                                                            }
                                                        />{' '}
                                                        Debit
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <th scope="col">USDT ($USD)</th>
                                            <td scope="col">
                                                <span>1.0 BTC = ${usdRate}</span>
                                                <div className="form-group mt-2">
                                                    <input
                                                        type="number"
                                                        name="usdt"
                                                        id="usdt"
                                                        min={0}
                                                        required={true}
                                                        className="form-control text-lg"
                                                        value={fund.usd as number}
                                                        onChange={(e) => covertUSDToBTC(e.target.value)}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="col">BITCOIN (BTC)</th>
                                            <td scope="col">
                                                <div className="form-group mt-2">
                                                    <input
                                                        type="number"
                                                        name="btc"
                                                        id="btc"
                                                        required={true}
                                                        readOnly={true}
                                                        className="form-control text-lg"
                                                        value={fund.btc as string}
                                                    />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <th scope="col"></th>
                                            <td scope="col">
                                                <div className="col-lg-12 my-3">
                                                    <button
                                                        type="submit"
                                                        className="bg-green-400 w-full text-white hover:bg-green-600 btn common-btn"
                                                    >
                                                        Update User Profile
                                                        <span />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </form>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                </div>
            </AccountLayout>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { token } = nextCookie(context);
    const usertoken = context.params?.usertoken;
    if (!token) {
        if (typeof window === 'undefined') {
            context.res.writeHead(302, { Location: '/auth/login' });
            context.res.end();
        } else {
            Router.push('/auth/login');
        }
    }

    const domain = process.env.DOMAIN || 'http://localhost:3000';
    const response = await fetch(`${domain}/api/users/${token}/info`);
    const result = await response.json();

    const ratesResult = await fetch('https://bitpay.com/api/rates');
    const rates = await ratesResult.json();
    let usdRate = 0;
    rates.forEach((rate: any) => {
        if (rate.code == 'USD') usdRate = rate.rate;
        return;
    });
    const userResult = await fetch(`${domain}/api/users/${usertoken}/info`);
    const user = await userResult.json();

    http: return {
        props: {
            token: token,
            profile: result,
            user: user,
            usdRate: usdRate,
        },
    };
};

export default Index;
