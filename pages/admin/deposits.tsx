import { NextPage, GetServerSideProps } from 'next';
import AccountLayout from '../../components/AccountLayout';
import nextCookie from 'next-cookies';
import Router from 'next/router';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
const $ = require('jquery');
$.DataTable = require('datatables.net');

const Investments: NextPage = ({ token, deposits, profile }: any) => {
    const tableRef = useRef<HTMLTableElement | null>(null);
    return (
        <>
            <AccountLayout userinfo={profile} menukey="dashboard" subpage={false}>
                <div className="section-title three">
                    <h2>
                        Deposits
                        <hr />
                    </h2>
                </div>
                <div className="container">
                    <div className="m-[30px]">
                        <table id="myDataTable" className="display w-full m-[20px] table" width="100%" ref={tableRef}>
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">AMOUNT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {deposits.map((item: any, i: any) => (
                                    <>
                                        <tr>
                                            <th scope="row">{item._id}</th>
                                            <td>{item.amount}</td>
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
    // const investments;
    const deposits = await fetch(`${process.env.DOMAIN}/api/deposits`);
    const depositsList = await deposits.json();

    const response = await fetch(`${process.env.DOMAIN}/api/users/${token}/info`);
    const userInfo = await response.json();

    http: return {
        props: {
            token: token,
            deposits: depositsList.data,
            profile: userInfo,
        },
    };
};

export default Investments;
