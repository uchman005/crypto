import { NextPage } from 'next';
import Head from 'next/head';
import PageLayout from '../../components/PageLayout';
import SubPage from '../../components/website/SubPage';
import Link from 'next/link';
import Image from 'next/image';

const Services: NextPage = () => {
    return (
        <>
            <Head>
                <title>Our Services | SHQ Bitcoin Investors</title>
            </Head>
            <PageLayout menukey="services">
                <SubPage title="Our Services" menutitle="Services" />
                <section className="services-area-two ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-lg-4">
                                <div className="services-item-two">
                                    <div className="top">
                                        <Image
                                            src="/assets/img/services/services1.jpg"
                                            width={510}
                                            height={450}
                                            alt="Services"
                                        />
                                    </div>
                                    <div className="bottom">
                                        <h3>
                                            <Link href="#">Bitcoin Investment Planning</Link>
                                        </h3>
                                        <p>
                                            Our expert team will assist you to organise a profitable long-term and
                                            short-term investment plan.
                                        </p>
                                        <div className="services-btn">
                                            <i className="bx bx-right-arrow-alt" />
                                            <Link href="#">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="services-item-two">
                                    <div className="top">
                                        <Image
                                            src="/assets/img/services/services2.jpg"
                                            width={510}
                                            height={450}
                                            alt="Services"
                                        />
                                    </div>
                                    <div className="bottom">
                                        <h3>
                                            <Link href="#">Crypto Financial Consultancy</Link>
                                        </h3>
                                        <p>
                                            cryptocurrency marketspace, we can ensure you achieve maximum profit and
                                            returns on your investment (ROI).
                                        </p>
                                        <div className="services-btn">
                                            <i className="bx bx-right-arrow-alt" />
                                            <Link href="#">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="services-item-two">
                                    <div className="top">
                                        <Image
                                            src="/assets/img/services/services3.jpg"
                                            width={510}
                                            height={450}
                                            alt="Services"
                                        />
                                    </div>
                                    <div className="bottom">
                                        <h3>
                                            <Link href="#">Online BTC-Banking &amp; Loans</Link>
                                        </h3>
                                        <p>
                                            store of your BTC and other cryptocurrency assets, SHQ BTCI is the right
                                            choice you could make.
                                        </p>
                                        <div className="services-btn">
                                            <i className="bx bx-right-arrow-alt" />
                                            <Link href="#">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </PageLayout>
        </>
    );
};

export default Services;
