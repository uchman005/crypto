import { NextPage } from 'next';
import Head from 'next/head';
import PageLayout from '../../components/PageLayout';
import SubPage from '../../components/website/SubPage';
const Contacts: NextPage = () => {
    return (
        <>
            <Head>
                <title>Contact Us | SHQ Bitcoin Investors</title>
            </Head>
            <PageLayout menukey="contacts">
                <SubPage title="Contact SHQBTC Team" menutitle="Contact Us" />
            </PageLayout>
        </>
    );
};

export default Contacts;
