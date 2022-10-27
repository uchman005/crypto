import { NextPage } from 'next';
import AccountLayout from '../../components/AccountLayout';
import IsWorking from '../../components/Working';
import nextCookie from 'next-cookies';
import Router from 'next/router';
import React, { useState } from 'react';
import { Context } from 'vm';

interface Packed {
    packageid: string;
    amount?: number;
    starts?: string;
    ends?: string;
}
const Invest: NextPage = ({ lists, profile }: any) => {
    const [createError, setCreateError] = useState('');
    const [packed, setPacked] = useState<Packed>({ packageid: '', amount: 0, starts: '', ends: '' });
    const [busy, setBusy] = useState(false);

    const doCreate = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setBusy(true);
        setCreateError('');
        try {
            const response = await fetch('/api/investments/create', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(packed),
            });
            if (response.status == 200) {
                const data = await response.json();
                setCreateError('Wow! Investment has been created');
                Router.push('/accounts/investments');
            } else {
                setCreateError('Creating Investment failed.');
            }
        } catch (error) {
            setCreateError('Creating Investment failed.');
        } finally {
            setBusy(false);
        }
    };
    return (
        <>
            <AccountLayout userinfo={profile} menukey="dashboard" subpage={false}>
                <section className="provide-area pt-[0px] pb-70">
                    <div className="section-title three">
                        <h2>
                            Create Bitcoin Investment <hr />
                        </h2>
                    </div>
                    <div className="container">
                        <div className="m-[30px]">
                            <div className="row">
                                <div className="col-md-12 w-full text-center my-4">
                                    <IsWorking loading={busy} />
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-6">
                                    <div className="container">
                                        <div className="form-item">
                                            <form id="applyLoginForm" onSubmit={doCreate}>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <span className="text-red-500 text-lg text-center">
                                                            {createError}
                                                        </span>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <label htmlFor="packageid" className="text-xl">
                                                            Select Package
                                                        </label>
                                                        <div className="form-group mt-2">
                                                            <select
                                                                name="packageid"
                                                                id="packageid"
                                                                required={true}
                                                                className="form-control text-lg"
                                                                onChange={(e) =>
                                                                    setPacked({ ...packed, packageid: e.target.value })
                                                                }
                                                            >
                                                                <option value="">Select Package</option>
                                                                {lists.map((listed: any, i: any) => (
                                                                    <option value={listed.name} key={i}>
                                                                        {listed.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 mt-3">
                                                        <label htmlFor="amount" className="text-xl">
                                                            Investment Amounts
                                                        </label>
                                                        <div className="form-group mt-2">
                                                            <input
                                                                name="amount"
                                                                id="amount"
                                                                required={true}
                                                                type={'number'}
                                                                value={packed.amount}
                                                                className="form-control text-lg"
                                                                onChange={(e) =>
                                                                    setPacked({
                                                                        ...packed,
                                                                        amount: parseInt(e.target.value),
                                                                    })
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 mt-3">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <label htmlFor="starts" className="text-xl">
                                                                    Start Date
                                                                </label>
                                                                <div className="form-group mt-2">
                                                                    <input
                                                                        name="starts"
                                                                        id="starts"
                                                                        required={true}
                                                                        type={'datetime-local'}
                                                                        value={packed.starts}
                                                                        className="form-control text-lg"
                                                                        onChange={(e) =>
                                                                            setPacked({
                                                                                ...packed,
                                                                                starts: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="ends" className="text-xl">
                                                                    End Date
                                                                </label>
                                                                <div className="form-group mt-2">
                                                                    <input
                                                                        name="ends"
                                                                        id="ends"
                                                                        required={true}
                                                                        type={'datetime-local'}
                                                                        value={packed.ends}
                                                                        className="form-control text-lg"
                                                                        onChange={(e) =>
                                                                            setPacked({
                                                                                ...packed,
                                                                                ends: e.target.value,
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 my-3">
                                                        <button type="submit" className="btn common-btn bg-orange-400">
                                                            Sign In
                                                            <span />
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </AccountLayout>
        </>
    );
};

export async function getServerSideProps(context: Context) {
    const { token } = nextCookie(context);
    if (!token) {
        if (typeof window === 'undefined') {
            context.res.writeHead(302, { Location: '/auth/login' });
            context.res.end();
        } else {
            Router.push('/auth/login');
        }
    }

    const packages = await fetch(`${process.env.DOMAIN}/api/packages/list`);
    const packagesData = await packages.json();

    const response = await fetch(`${process.env.DOMAIN}/api/users/${token}/info`);
    const result = await response.json();

    http: return {
        props: {
            lists: packagesData.data,
            profile: result,
        },
    };
}

export default Invest;
