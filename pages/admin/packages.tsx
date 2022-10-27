import { NextPage, GetServerSideProps } from 'next';
import AccountLayout from '../../components/AccountLayout';
import nextCookie from 'next-cookies';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';
const $ = require('jquery');

const Investments: NextPage = ({ packages, profile }: any) => {
    const router = useRouter();
    const deletePackage = async (pid: string) => {
        const del = await fetch(`/api/packages/${pid}/delete`);
        const deleted = await del.json();
        router.push(`/admin/packages?deleted=${deleted.status}`);
    };
    return (
        <>
            <AccountLayout userinfo={profile} menukey="dashboard" subpage={false}>
                <div className="section-title three">
                    <div className="mt-3 text-center">
                        <Link href={`/admin/create-package`}>
                            <a className="btn btn-sm btn-info text-white">Create Package</a>
                        </Link>
                    </div>
                    <h2>
                        All Packages
                        <hr />
                    </h2>
                </div>
                <div className="container">
                    <div className="m-[30px]">
                        <table id="myDataTable" className="display w-full m-[20px] table" width="100%">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">PACKAGE</th>
                                    <th scope="col">DESCRIPTION</th>
                                    <th scope="col">MIN AMOUNT</th>
                                    <th scope="col">MAX AMOUNT</th>
                                    <th scope="col">-</th>
                                </tr>
                            </thead>
                            <tbody>
                                {packages.map((item: any, i: any) => (
                                    <>
                                        <tr>
                                            <th scope="row">{item._id}</th>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                            <td>${item.min}</td>
                                            <td>${item.max}</td>
                                            <td>
                                                <button onClick={() => deletePackage(item._id)} key={i}>
                                                    <a className="btn btn-sm btn-danger text-white">delete</a>
                                                </button>
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

    // const packages;
    const packages = await fetch(`${process.env.DOMAIN}/api/packages/list`);
    const packagesList = await packages.json();

    const response = await fetch(`${process.env.DOMAIN}/api/users/${token}/info`);
    const userInfo = await response.json();

    http: return {
        props: {
            token: token,
            packages: packagesList.data,
            profile: userInfo,
        },
    };
};

export default Investments;
