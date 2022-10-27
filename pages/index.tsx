import type { NextPage } from "next";
import Head from "next/head";
import PageLayout from "../components/PageLayout";
import Slider from "../components/Slider";
const Home: NextPage = () => {
    return (
        <>
            <PageLayout menukey="home">
                <Head>
                    <title>Home | SHQ Bitcoin Investors</title>
                </Head>
                <Slider />
            </PageLayout>
        </>
    );
};

export default Home;
