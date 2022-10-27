import { NextPage } from 'next';
import Head from 'next/head';
import PageLayout from '../../components/PageLayout';
import SubPage from '../../components/website/SubPage';

const Advisory: NextPage = () => {
    return (
        <>
            <Head>
                <title>Our Blockchain Advisory | SHQ Bitcoin Investors</title>
            </Head>
            <PageLayout menukey="advisory">
                <SubPage title="Our Blockchain Advisory" menutitle="Advisory" />
            </PageLayout>
        </>
    );
};

export default Advisory;
