import { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import AccountLayout from '../../../../components/AccountLayout';
import nextCookie from 'next-cookies';
import Router, { useRouter } from 'next/router';
import IsWorking from '../../../../components/Working';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import React, { useState } from 'react';
import { WebUser } from '../../../../interfaces';

const Index: NextPage = ({ user, profile }: any) => {
    const router = useRouter();
    const newUser: WebUser = {
        token: user.accid,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        mobile: user.mobile,
        address: user.address,
        country: user.country,
    };

    const [registerError, setRegisterError] = useState('');
    const [regUser, setRegUser] = useState(newUser);
    const [busy, setBusy] = useState(false);

    const doProfileUpdate = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        setBusy(false);
        setRegisterError('');
        try {
            const response = await fetch('/api/users/update', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(regUser),
            });
            if (response.status == 200) {
                const data = await response.json();
                router.push('/admin');
            } else {
                setRegisterError('Updating user failed.');
            }
        } catch (error) {
            setRegisterError('Updating user failed.');
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
                        Profile For :{' '}
                        <strong className="text-green-500">
                            {user.firstname} {user.lastname}
                        </strong>
                        <hr />
                    </h2>
                </div>
                <div className="container">
                    <div className="m-[30px]">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <div className="col-md-12 w-full text-center my-4">
                                    <IsWorking loading={busy} />{' '}
                                    <span className="text-red-600 text-lg">{registerError}</span>
                                </div>
                                <form id="updateProfile" onSubmit={doProfileUpdate} method="post">
                                    <input type="hidden" name="token" id="token" value={user._id} />
                                    <table
                                        id="myDataTable"
                                        className="display w-full m-[20px] table table-responsive table-altered"
                                        width="100%"
                                    >
                                        <tr>
                                            <th scope="col">FIRST NAME</th>
                                            <td scope="col">
                                                <div className="form-group mt-2">
                                                    <input
                                                        type="text"
                                                        name="firstname"
                                                        id="firstname"
                                                        required={true}
                                                        className="form-control text-lg"
                                                        value={regUser.firstname}
                                                        onChange={(e) =>
                                                            setRegUser({ ...regUser, firstname: e.target.value })
                                                        }
                                                    />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <th scope="col">LAST NAME</th>
                                            <td scope="col">
                                                <div className="form-group mt-2">
                                                    <input
                                                        type="text"
                                                        name="lastname"
                                                        id="lastname"
                                                        required={true}
                                                        className="form-control text-lg"
                                                        value={regUser.lastname}
                                                        onChange={(e) =>
                                                            setRegUser({ ...regUser, lastname: e.target.value })
                                                        }
                                                    />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <th scope="col">EMAIL ADDRESS</th>
                                            <td scope="col">
                                                <div className="form-group mt-2">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        required={true}
                                                        className="form-control text-lg"
                                                        value={regUser.email}
                                                        onChange={(e) =>
                                                            setRegUser({ ...regUser, email: e.target.value })
                                                        }
                                                    />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <th scope="col">TELEPHONE</th>
                                            <td scope="col">
                                                <div className="form-group mt-2">
                                                    <input
                                                        type="mobile"
                                                        name="mobile"
                                                        id="mobile"
                                                        required={true}
                                                        className="form-control text-lg"
                                                        value={regUser.mobile}
                                                        onChange={(e) =>
                                                            setRegUser({ ...regUser, mobile: e.target.value })
                                                        }
                                                    />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <th scope="col">Address</th>
                                            <td scope="col">
                                                <div className="form-group mt-2">
                                                    <textarea
                                                        className="form-control text-lg"
                                                        name="address"
                                                        id="address"
                                                        cols={30}
                                                        rows={5}
                                                        onChange={(e) =>
                                                            setRegUser({ ...regUser, address: e.target.value })
                                                        }
                                                    >
                                                        {regUser.address}
                                                    </textarea>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <th scope="col">Country</th>
                                            <td scope="col">
                                                <div className="form-group mt-2">
                                                    <input
                                                        type="country"
                                                        name="country"
                                                        id="country"
                                                        required={true}
                                                        className="form-control text-lg"
                                                        value={regUser.country}
                                                        onChange={(e) =>
                                                            setRegUser({ ...regUser, country: e.target.value })
                                                        }
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
                            <div className="col-md-3"></div>
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

    const userResult = await fetch(`${domain}/api/users/${usertoken}/info`);
    const user = await userResult.json();

    http: return {
        props: {
            profile: result,
            user: user,
        },
    };
};

export default Index;
