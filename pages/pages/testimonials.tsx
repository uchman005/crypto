import { NextPage } from 'next';
import Head from 'next/head';
import PageLayout from '../../components/PageLayout';
import SubPage from '../../components/website/SubPage';
import Image from 'next/image';
import Link from 'next/link';

const Testimonials: NextPage = () => {
    return (
        <>
            <Head>
                <title>From our Clients | SHQ Bitcoin Investors</title>
            </Head>
            <PageLayout menukey="testimonials">
                <SubPage title="From our Clients" menutitle="Testimonials" />
                <section className="testimonials-area-three ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-lg-6">
                                <div className="testimonials-item">
                                    <div className="top">
                                        <i className="bx bxs-quote-alt-left bx-flip-horizontal" />
                                        <h2>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                            ultrices gravida. Risus commodo viverra maecenas accumsan lacufacilisis.
                                        </h2>
                                    </div>
                                    <div className="bottom">
                                        <Image
                                            src="/assets/img/testimonials-thumb4.jpg"
                                            width={100}
                                            height={100}
                                            alt="Testimonials"
                                        />
                                        <h3>Aliza Trupa</h3>
                                        <span>CEO of Finance &amp; Banking</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                                <div className="testimonials-item">
                                    <div className="top">
                                        <i className="bx bxs-quote-alt-left bx-flip-horizontal" />
                                        <h2>
                                            It is a long established fact that a reader will be distracted by the
                                            readable content of a page when looking at its layout. The point of using
                                            Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                                            opposed to using Content here.
                                        </h2>
                                    </div>
                                    <div className="bottom">
                                        <Image
                                            src="/assets/img/testimonials-thumb5.jpg"
                                            width={100}
                                            height={100}
                                            alt="Testimonials"
                                        />
                                        <h3>Zerad Kahf</h3>
                                        <span>Investment</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                                <div className="testimonials-item">
                                    <div className="top">
                                        <i className="bx bxs-quote-alt-left bx-flip-horizontal" />
                                        <h2>
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                            roots in a piece of classical Latin literature from 45 BC, making it over
                                            2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                                            College in Virginia.
                                        </h2>
                                    </div>
                                    <div className="bottom">
                                        <Image
                                            src="/assets/img/testimonials-thumb6.jpg"
                                            width={100}
                                            height={100}
                                            alt="Testimonials"
                                        />
                                        <h3>Jackob Zami</h3>
                                        <span>Consultant</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                                <div className="testimonials-item">
                                    <div className="top">
                                        <i className="bx bxs-quote-alt-left bx-flip-horizontal" />
                                        <h2>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                            ultrices gravida. Risus commodo viverra maecenas accumsan lacufacilisis.
                                        </h2>
                                    </div>
                                    <div className="bottom">
                                        <Image
                                            src="/assets/img/testimonials-thumb3.jpg"
                                            width={100}
                                            height={100}
                                            alt="Testimonials"
                                        />
                                        <h3>Tom Henry</h3>
                                        <span>Engineer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pagination-area">
                            <ul>
                                <li>
                                    <Link href="#">
                                        <i className="bx bx-chevron-left" />
                                    </Link>
                                </li>
                                <li>
                                    <Link className="active" href="#">
                                        1
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <i className="bx bx-chevron-right" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </PageLayout>
        </>
    );
};

export default Testimonials;
