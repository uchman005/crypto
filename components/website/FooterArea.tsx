import Link from 'next/link';
import Image from 'next/image';

function FooterArea() {
    return (
        <>
            <footer className="footer-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <div className="footer-item">
                                <div className="footer-logo">
                                    <Link className="logo" href="/">
                                        <Image
                                            src="/assets/img/logo-footer.png"
                                            className="h-[80px]"
                                            alt="Bitcoin Invvestor"
                                            width={256}
                                            height={81}
                                        />
                                    </Link>
                                    <p className="my-3">
                                        Since 2013, SHQBTC Investors has invested in digital assets and blockchain
                                        companies, providing investors with the full spectrum of exposure to the space.{' '}
                                    </p>
                                    <ul>
                                        <li>
                                            <i className="bx bx-phone-call" />
                                            <span>Phone:</span>
                                            <a href="tel:882569756">882-569-756</a>
                                        </li>
                                        <li>
                                            <i className="bx bx-mail-send" />
                                            <span>Email:</span>
                                            <a>info@shqbtcinvestor.com</a>
                                        </li>
                                        <li>
                                            <i className="bx bx-current-location" />
                                            <span>Address:</span>
                                            <a href="#">Plot 8 , Rue de geneva 109/80 1258 thonex switzerland.</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-2">
                            <div className="footer-item">
                                <div className="footer-links">
                                    <h3>Quick Links</h3>
                                    <ul>
                                        <li>
                                            <Link href="/pages/about">About SHQBTCI</Link>
                                        </li>
                                        <li>
                                            <Link href="/pages/services">Our Services</Link>
                                        </li>
                                        <li>
                                            <Link href="/pages/contact">Contact Our Team</Link>
                                        </li>
                                        <li>
                                            <Link href="/pages/advisory">Our Advisory</Link>
                                        </li>
                                        <li>
                                            <Link href="/pages/news">News & Updates</Link>
                                        </li>
                                        <li>
                                            <Link href="/pages/privacy">Privacy Policy</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <h3>Investors Newsletter</h3>
                                <div className="footer-newsletter">
                                    <p>
                                        Join our newsletter and grab early investment opportunities. We will never spam
                                        our clients.
                                    </p>
                                    <form className="newsletter-form" data-toggle="validator">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter email address"
                                            name="EMAIL"
                                            required
                                            autoComplete="off"
                                        />
                                        <button className="btn common-btn bg-orange-400" type="submit">
                                            Subscribe
                                            <span />
                                        </button>
                                        <div id="validator-newsletter" className="form-result" />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <div className="footer-links">
                                    <h3>What We Do</h3>
                                    <ul>
                                        <li>
                                            <Link href="/">Financial Advice</Link>
                                        </li>
                                        <li>
                                            <Link href="/">Planning Strategies</Link>
                                        </li>
                                        <li>
                                            <Link href="/">Investment Trading</Link>
                                        </li>
                                        <li>
                                            <Link href="/">Wealth Commitment</Link>
                                        </li>
                                        <li>
                                            <Link href="/">Bitcoin Advisory</Link>
                                        </li>
                                        <li>
                                            <Link href="/">Investment/Trading </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default FooterArea;
