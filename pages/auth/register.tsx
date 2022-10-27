import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState, useRef } from 'react';
import PageLayout from '../../components/PageLayout';
import SubPage from '../../components/website/SubPage';
import { WebUser } from '../../interfaces';

import IsWorking from '../../components/Working';

import { login, logout } from '../../utils/auth';

const Accounts: NextPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const newUser: WebUser = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    };

    const [registerError, setRegisterError] = useState('');
    const [regUser, setRegUser] = useState(newUser);

    const doRegister = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setRegisterError('');
        try {
            const response = await fetch('/api/users/create', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(regUser),
            });
            if (response.status == 200) {
                const data = await response.json();
                const token = data.accid;
                await login({ token });
            } else {
                setRegisterError('Registration failed: or email may already be in on file.');
            }
        } catch (error) {
            setRegisterError('Registration failed: or email may already be in on file.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Head>
                <title>Sign Up | SHQ Bitcoin Investors</title>
            </Head>
            <PageLayout menukey="apply">
                <SubPage title="Sign Up" menutitle="Sign Up" />
                <div className="user-form-area ptb-100 bg-gray-300">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <IsWorking loading={isLoading} />
                            </div>
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <div className="form-item">
                                    <form id="applyRegisterForm" onSubmit={doRegister}>
                                        <h2>Sign Up</h2>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <span className="text-red-500 text-lg text-center">
                                                    {registerError}
                                                </span>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        autoComplete="off"
                                                        className="form-control"
                                                        placeholder="First Name"
                                                        value={regUser.firstname}
                                                        onChange={(e) =>
                                                            setRegUser({
                                                                ...regUser,
                                                                firstname: e.target.value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        autoComplete="off"
                                                        className="form-control"
                                                        placeholder="Last Name"
                                                        value={regUser.lastname}
                                                        onChange={(e) =>
                                                            setRegUser({
                                                                ...regUser,
                                                                lastname: e.target.value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        autoComplete="off"
                                                        className="form-control"
                                                        placeholder="Email"
                                                        value={regUser.email}
                                                        onChange={(e) =>
                                                            setRegUser({
                                                                ...regUser,
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
                                                        value={regUser.password}
                                                        onChange={(e) =>
                                                            setRegUser({
                                                                ...regUser,
                                                                password: e.target.value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button type="submit" className="btn common-btn bg-orange-500">
                                                    Sign Up
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
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
