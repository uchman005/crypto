import { NextPage } from 'next';
import Head from 'next/head';
import PageLayout from '../../components/PageLayout';
import SubPage from '../../components/website/SubPage';


const News: NextPage = () => {
    return (
        <>
            <Head>
                <title>News & Updates | SHQ Bitcoin Investors</title>
            </Head>
            <PageLayout menukey="news">
                <SubPage title="News & Updates" menutitle="Crypto News" />
            </PageLayout>
        </>
    );
};

export default News;
