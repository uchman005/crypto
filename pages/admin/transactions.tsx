import { NextPage, GetServerSideProps } from 'next';
import AccountLayout from '../../components/AccountLayout';
import nextCookie from 'next-cookies';
import Router from 'next/router';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
const $ = require('jquery');
$.DataTable = require('datatables.net');

const Transactions: NextPage = ({ token, transactions, profile }: any) => {
    const tableRef = useRef<HTMLTableElement | null>(null);
    return (
        <>
            <AccountLayout userinfo={profile} menukey="dashboard" subpage={false}>
                <div className="section-title three">
                    <h2>
                        All Transactions
                        <hr />
                    </h2>
                </div>
                <div className="container">
                    <div className="m-[30px]">
                        <table id="myDataTable" className="display w-full m-[20px] table" width="100%" ref={tableRef}>
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">PACKAGE</th>
                                    <th scope="col">AMOUNT</th>
                                    <th scope="col">START DATE</th>
                                    <th scope="col">EXPIRE DATE</th>
                                    <th scope="col">-</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {transactions.map((item: any, i: any) => (
                                    <>
                                        <tr>
                                            <th scope="row">{item._id}</th>
                                            <td>{item.packageid}</td>
                                            <td>{item.amount}</td>
                                            <td>{item.starts}</td>
                                            <td>{item.expires}</td>
                                            <td>
                                                <Link href="#" key={i}>
                                                    <a className="btn btn-sm btn-success text-white">Withdraw</a>
                                                </Link>
                                            </td>
                                        </tr>
                                    </>
                                ))} */}
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
    // // const investments;
    // const investments = await fetch(`${process.env.DOMAIN}/api/investments/${token}/list`);
    // const investmentlist = await investments.json();

    const response = await fetch(`${process.env.DOMAIN}/api/users/${token}/info`);
    const userInfo = await response.json();

    http: return {
        props: {
            token: token,
            transactions: {},
            profile: userInfo,
        },
    };
};

export default Transactions;
