import { NextPage } from 'next';
import Head from 'next/head';
import PageLayout from '../../components/PageLayout';
import NeedConsultant from '../../components/website/NeedConsultant';
import ServiceSideList from '../../components/website/ServiceSideList';
import SubPage from '../../components/website/SubPage';

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>About Us | SHQ Bitcoin Investors</title>
            </Head>
            <PageLayout menukey="about">
                <SubPage title="About SHQ Bitcoin Investors" menutitle="About" />
                <div className="about-area py-[50px]">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="about-content">
                                    <div className="section-title">
                                        <span className="sub-title">SHQ Bitcoin Investors</span>
                                        <h2>About SHQ Bitcoin Investors</h2>
                                    </div>
                                    <div className="middle">
                                        <p>
                                            It is a long established fact that a reader will be distracted by the
                                            readable content of a page when looking at its layout. The point of using
                                            Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                                            opposed to using Content here, content here.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="widget-area">
                                    <ServiceSideList />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </>
    );
};

export default About;
