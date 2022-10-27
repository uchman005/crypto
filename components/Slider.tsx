import Image from 'next/image';
import Link from 'next/link';
function Slider() {
    return (
        <>
            <div className="banner-area banner-bg-one">
                <div className="banner-shape">
                    <Image src="/assets/img/banner/banner-shape1.jpg" alt="Shape" layout="fill" />
                </div>
                <div className="banner-slider owl-theme owl-carousel">
                    <div className="banner-item">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="banner-content">
                                        <span>SHQ Bitcoin Investors</span>
                                        <h1>We Are Focused Exclusively On Blockchain Technology.</h1>
                                        <p>
                                            Since 2013, Pantera has invested in digital assets and blockchain companies,
                                            providing investors with the full spectrum of exposure to the space.{' '}
                                        </p>
                                        <div className="banner-btn-area">
                                            <Link className="banner-btn common-btn" href="/accounts/apply">
                                                Get Started
                                            </Link>
                                            <Link className="common-btn" href="/pages/contacts">
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="banner-slider-img">
                                        <Image src="/assets/img/banner/banner-main1.png" alt="Banner" layout="fill" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="banner-item">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="banner-content">
                                        <span>SHQ Bitcoin Investors</span>
                                        <h1>Dive Into The Cryptocurrency Markets Investment</h1>
                                        <p>
                                            Since 2013, Pantera has invested in digital assets and blockchain companies,
                                            providing investors with the full spectrum of exposure to the space.{' '}
                                        </p>
                                        <div className="banner-btn-area">
                                            <Link className="banner-btn common-btn" href="/accounts/apply">
                                                Get Started
                                            </Link>
                                            <Link className="common-btn" href="/pages/contacts">
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="banner-slider-img two">
                                        <Image src="/assets/img/banner/banner-main2.png" alt="Banner" layout="fill" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-item">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="banner-content">
                                        <span>SHQ Bitcoin Investors</span>
                                        <h1>We Will Deliver Business Opportunities To You</h1>
                                        <p>
                                            Since 2013, Pantera has invested in digital assets and blockchain companies,
                                            providing investors with the full spectrum of exposure to the space.{' '}
                                        </p>
                                        <div className="banner-btn-area">
                                            <Link className="banner-btn common-btn" href="/accounts/apply">
                                                Get Started
                                            </Link>
                                            <Link className="common-btn" href="/pages/contacts">
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="banner-slider-img three">
                                        <Image src="/assets/img/banner/banner-main3.png" alt="Banner" layout="fill" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Slider;
