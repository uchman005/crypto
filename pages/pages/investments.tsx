import { NextPage } from 'next';
import Head from 'next/head';
import PageLayout from '../../components/PageLayout';
import SubPage from '../../components/website/SubPage';

const Investments: NextPage = () => {
    return (
        <>
            <Head>
                <title>Our Investment Strategies | SHQ Bitcoin Investors</title>
            </Head>
            <PageLayout menukey="investments">
                <SubPage title="Our Investment Strategies" menutitle="Investments" />
            </PageLayout>
        </>
    );
};

export default Investments;
