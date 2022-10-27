import type { NextPage } from "next";
import Head from "next/head";
import PageLayout from "../components/PageLayout";
import Link from "next/link";

const _404: NextPage = () => {
    return (
        <>
            <PageLayout menukey="_404">
                <Head>
                    <title>404 Error | Page not found</title>
                </Head>
                <div className="error-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="error-content">
                                    <i className="bx bx-sad bx-flashing" />
                                    <h1>Opps!</h1>
                                    <h2>We ran into a problem</h2>
                                    <p>The page you are looking for it maybe deleted</p>
                                    <Link href="/">Go To Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </>
    );
};

export default _404;
