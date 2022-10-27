import { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import AccountLayout from '../../components/AccountLayout';
import nextCookie from 'next-cookies';
import Router from 'next/router';

const Index: NextPage = ({ token, profile }: any) => {
    return (
        <>
            <AccountLayout userinfo={profile} menukey="dashboard" subpage={true}></AccountLayout>
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

    http: return {
        props: {
            token: token,
            profile: result,
        },
    };
};

export default Index;
