import { NextPage } from 'next';
import AccountLayout from '../../components/AccountLayout';
import IsWorking from '../../components/Working';
import nextCookie from 'next-cookies';
import Router from 'next/router';
import React, { useState } from 'react';
import { Context } from 'vm';

interface Package {
    name?: string;
    description?: String;
    minAmount?: number;
    maxAmount?: number;
}
const Invest: NextPage = ({ lists, profile }: any) => {
    const [createError, setCreateError] = useState('');
    const [packageItem, setPackageItem] = useState<Package>({ name: '', description: '', minAmount: 0, maxAmount: 0 });
    const [busy, setBusy] = useState(false);

    const doCreatePackage = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setBusy(true);
        setCreateError('');
        try {
            const response = await fetch('/api/packages/create', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(packageItem),
            });
            if (response.status == 200) {
                const data = await response.json();
                Router.push('/admin/packages');
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
                            Create New Package <hr />
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
                                            <form id="applyLoginForm" onSubmit={doCreatePackage}>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <span className="text-red-500 text-lg text-center">
                                                            {createError}
                                                        </span>
                                                    </div>

                                                    <div className="col-lg-12">
                                                        <label htmlFor="name" className="text-xl">
                                                            Package Name
                                                        </label>
                                                        <div className="form-group mt-2">
                                                            <div className="form-group mt-2">
                                                                <input
                                                                    name="name"
                                                                    id="name"
                                                                    required={true}
                                                                    type={'text'}
                                                                    value={packageItem.name}
                                                                    className="form-control text-lg"
                                                                    onChange={(e) =>
                                                                        setPackageItem({
                                                                            ...packageItem,
                                                                            name: e.target.value,
                                                                        })
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 mt-3">
                                                        <label htmlFor="description" className="text-xl">
                                                            Package Description
                                                        </label>
                                                        <div className="form-group mt-2">
                                                            <div className="form-group mt-2">
                                                                <textarea
                                                                    name="description"
                                                                    id="description"
                                                                    required={true}
                                                                    cols={30}
                                                                    rows={3}
                                                                    className="form-control text-lg"
                                                                    onChange={(e) =>
                                                                        setPackageItem({
                                                                            ...packageItem,
                                                                            description: e.target.value,
                                                                        })
                                                                    }
                                                                >
                                                                    {packageItem.description}
                                                                </textarea>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 mt-3">
                                                        <label htmlFor="minAmount" className="text-xl">
                                                            Minimum Investment
                                                        </label>
                                                        <div className="form-group mt-2">
                                                            <input
                                                                name="minAmount"
                                                                id="minAmount"
                                                                required={true}
                                                                type={'number'}
                                                                value={packageItem.minAmount}
                                                                className="form-control text-lg"
                                                                onChange={(e) =>
                                                                    setPackageItem({
                                                                        ...packageItem,
                                                                        minAmount: parseFloat(e.target.value),
                                                                    })
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 mt-3">
                                                        <label htmlFor="maxAmount" className="text-xl">
                                                            Maximum Investment
                                                        </label>
                                                        <div className="form-group mt-2">
                                                            <input
                                                                name="maxAmount"
                                                                id="maxAmount"
                                                                required={true}
                                                                type={'number'}
                                                                value={packageItem.maxAmount}
                                                                className="form-control text-lg"
                                                                onChange={(e) =>
                                                                    setPackageItem({
                                                                        ...packageItem,
                                                                        maxAmount: parseFloat(e.target.value),
                                                                    })
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 my-3">
                                                        <button type="submit" className="btn common-btn bg-orange-400">
                                                            Create Package
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
