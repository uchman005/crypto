import { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import AccountLayout from '../../components/AccountLayout';
import nextCookie from 'next-cookies';
import Router, { useRouter } from 'next/router';
import IsWorking from '../../components/Working';
import { ToastContainer, toast } from 'react-toastify';
import React, { useState } from 'react';

interface Pass {
    token?: string;
    password?: string;
}
const Index: NextPage = ({ token, profile, password }: any) => {
    const router = useRouter();
    const newPass: Pass = {
        token: token,
        password: password,
    };

    const [registerError, setRegisterError] = useState('');
    const [regUser, setRegUser] = useState(newPass);
    const [busy, setBusy] = useState(false);

    const doProfileUpdate = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        setBusy(false);
        setRegisterError('');
        try {
            const response = await fetch('/api/users/update-password', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(regUser),
            });
            if (response.status == 200) {
                const data = await response.json();
                router.push('/accounts');
            } else {
                setRegisterError('Updating password failed.');
            }
        } catch (error) {
            setRegisterError('Updating password failed.');
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
                        Update Password For :{' '}
                        <strong className="text-green-500">
                            {profile.firstname} {profile.lastname}
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
                                    <input type="hidden" name="token" id="token" value={profile._id} />
                                    <table
                                        id="myDataTable"
                                        className="display w-full m-[20px] table table-responsive table-altered"
                                        width="100%"
                                    >
                                        <tr>
                                            <th scope="col">PASSWORD</th>
                                            <td scope="col">
                                                <div className="form-group mt-2">
                                                    <input
                                                        type="text"
                                                        name="security"
                                                        id="security"
                                                        required={true}
                                                        className="form-control text-lg"
                                                        value={regUser.password}
                                                        onChange={(e) =>
                                                            setRegUser({ ...regUser, password: e.target.value })
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
                                                        Update User Password
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
    if (!token) {
        if (typeof window === 'undefined') {
            context.res.writeHead(302, { Location: '/auth/login' });
            context.res.end();
        } else {
            Router.push('/auth/login');
        }
    }
    const passInfo = await fetch(`${process.env.DOMAIN}/api/users/${token}/password`);
    const passData = await passInfo.json();
    console.log(passData.password);

    const response = await fetch(`${process.env.DOMAIN}/api/users/${token}/info`);
    const userInfo = await response.json();
    http: return {
        props: {
            token: token,
            profile: userInfo,
            password: passData.password,
        },
    };
};
export default Index;
