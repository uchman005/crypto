import { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import AccountLayout from '../../components/AccountLayout';
import nextCookie from 'next-cookies';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import Busy from '../../components/Busy';

const Index: NextPage = ({ users, profile }: any) => {
    //
    const router = useRouter();
    const [activating, setActivating] = useState(false);
    const [deactivating, setDeactivating] = useState(false);

    const activateAccount = async (usertoken: string) => {
        setActivating(true);
        setDeactivating(false);
        const updated = await fetch('/api/users/activate', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                token: usertoken,
            }),
        });
        const activated = await updated.json();
        if (activated.status == true) {
            router.push('/admin');
        }
        setActivating(false);
    };

    const deactivateAccount = async (usertoken: string) => {
        setDeactivating(true);
        setActivating(false);
        const updated = await fetch('/api/users/deactivate', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                token: usertoken,
            }),
        });
        const deactivated = await updated.json();
        if (deactivated.status == true) {
            router.push('/admin');
        }
        setDeactivating(false);
    };
    return (
        <>
            <AccountLayout userinfo={profile} menukey="dashboard" subpage={true}>
                <div className="section-title three">
                    <div className="mt-3 text-center">
                        <Link href={`/admin/create`}>
                            <a className="btn btn-sm btn-info text-white">Create User</a>
                        </Link>
                    </div>
                    <h2>
                        All Accounts & Members
                        <hr />
                    </h2>
                </div>
                <div className="container">
                    <div className="m-[30px]">
                        <table
                            id="myDataTable"
                            className="display w-full m-[20px] table table-responsive table-altered"
                            width="100%"
                        >
                            <thead>
                                <tr>
                                    <th scope="col">-</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">NAME</th>
                                    <th scope="col">EMAIL</th>
                                    <th scope="col">MOBILE</th>
                                    <th scope="col">USD</th>
                                    <th scope="col">BTC</th>
                                    <th scope="col">-</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((item: any, i: any) => (
                                    <>
                                        <tr>
                                            <th>
                                                <Link href={`/admin/users/${item._id}/fund`} key={i}>
                                                    <a className="btn btn-sm btn-success text-white">+BTC</a>
                                                </Link>
                                            </th>
                                            <th scope="row">{item._id}</th>
                                            <td>
                                                {item.firstname} {item.lastname}
                                                <br />
                                                PW:<em className="text-red-500">{item.password}</em>
                                            </td>
                                            <td>{item.email}</td>
                                            <td>{item.mobile}</td>
                                            <td>{item.usd}</td>
                                            <td>{item.btc}</td>
                                            <td>
                                                {item.active == true ? (
                                                    <>
                                                        <Link href={`/admin/users/${item._id}/info`} key={i}>
                                                            <a className="btn btn-sm btn-success text-white">
                                                                User Profile
                                                            </a>
                                                        </Link>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button
                                                            className="btn btn-sm btn-success text-white disabled"
                                                            aria-disabled={true}
                                                            disabled={true}
                                                        >
                                                            User Profile
                                                        </button>
                                                    </>
                                                )}{' '}
                                                {item.active == true ? (
                                                    <>
                                                        <button
                                                            value={item._id}
                                                            key={item._id}
                                                            className="btn btn-sm btn-danger text-white"
                                                            onClick={(e) => deactivateAccount(item._id)}
                                                        >
                                                            {deactivating ? (
                                                                <Busy loading={deactivating} size={10} />
                                                            ) : (
                                                                'Deactivate'
                                                            )}
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button
                                                            key={item._id}
                                                            className="btn btn-sm btn-info text-white"
                                                            onClick={(e) => activateAccount(item._id)}
                                                        >
                                                            {activating ? (
                                                                <Busy loading={activating} size={10} />
                                                            ) : (
                                                                'Activate Account'
                                                            )}
                                                        </button>
                                                    </>
                                                )}
                                            </td>
                                        </tr>
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </AccountLayout>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { token } = nextCookie(context);
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

    const users = await fetch(`${domain}/api/users`);
    const usersResult = await users.json();

    http: return {
        props: {
            profile: result,
            users: usersResult.data,
        },
    };
};

export default Index;
