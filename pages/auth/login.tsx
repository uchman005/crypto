import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import SubPage from '../../components/website/SubPage';
import { WebUser } from '../../interfaces';

import IsWorking from '../../components/Working';
import { login } from '../../utils/auth';

const Accounts: NextPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const oldUser: WebUser = {
        email: '',
        password: '',
    };

    const [loginError, setLoginError] = useState('');
    const [loginUser, setLoginUser] = useState(oldUser);

    const doLogin = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setLoginError('');
        try {
            const response = await fetch('/api/users/login', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginUser),
            });
            if (response.status == 200) {
                const data = await response.json();
                const token = data.accid;
                await login({ token });
            } else {
                setLoginError('Login failed: User details may be incorrect.');
            }
        } catch (error) {
            setLoginError('Login failed: User details may be incorrect.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Head>
                <title>Sign In | SHQ Bitcoin Investors</title>
            </Head>
            <PageLayout menukey="apply">
                <SubPage title="Sign In" menutitle="Sign In" />
                <div className="user-form-area ptb-100 bg-gray-300">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <div className="container">
                                    <div className="form-item">
                                        <form id="applyLoginForm" onSubmit={doLogin}>
                                            <h2>Sign In</h2>
                                            <div className="row">
                                                <div className="col-md-12 text-center w-full mb-4">
                                                    <IsWorking loading={isLoading} />
                                                </div>
                                                <div className="col-lg-12">
                                                    <span className="text-red-500 text-lg text-center">
                                                        {loginError}
                                                    </span>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            autoComplete="off"
                                                            className="form-control"
                                                            placeholder="Email"
                                                            value={loginUser.email}
                                                            onChange={(e) =>
                                                                setLoginUser({
                                                                    ...loginUser,
                                                                    email: e.target.value,
                                                                })
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <input
                                                            type="password"
                                                            autoComplete="off"
                                                            className="form-control"
                                                            placeholder="Password"
                                                            value={loginUser.password}
                                                            onChange={(e) =>
                                                                setLoginUser({
                                                                    ...loginUser,
                                                                    password: e.target.value,
                                                                })
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
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
            </PageLayout>
        </>
    );
};

export default Accounts;
