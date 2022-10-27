import Link from 'next/link';
import Image from 'next/image';
import { logout } from '../../utils/auth';

interface menuProps {
    menukey: string;
}
function NavigationBar({ menukey }: menuProps) {
    return (
        <>
            <div className="navbar-area sticky-top">
                <div className="mobile-nav">
                    <Link href="/" className="logo">
                        <Image
                            className="h-[50px]"
                            height={60}
                            width={60}
                            src="/assets/img/logomobile.png"
                            alt="Bitcoin Investors"
                        />
                    </Link>
                </div>
                <div className="main-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link className="navbar-brand" href="/">
                                <Image
                                    src="/assets/img/logo.png"
                                    height={63}
                                    width={256}
                                    className="h-[50px]"
                                    alt="Bitcoin Investors"
                                />
                            </Link>
                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="navbar-brand" href="/">
                                            <a className={menukey == 'home' ? 'active' : ''}>Home</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/pages/about" className="nav-link">
                                            <a className={menukey == 'about' ? 'active' : ''}>About Us</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/pages/services" className="nav-link">
                                            <a className={menukey == 'services' ? 'active' : ''}>Services</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/pages/advisory" className="nav-link">
                                            <a className={menukey == 'advisory' ? 'active' : ''}>Advisory</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/pages/investments" className="nav-link">
                                            <a className={menukey == 'investments' ? 'active' : ''}>Investments</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/pages/news" className="nav-link">
                                            <a className={menukey == 'news' ? 'active' : ''}>News</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/pages/testimonials" className="nav-link">
                                            <a className={menukey == 'testimonials' ? 'active' : ''}>Testimonies</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/pages/contacts" className="nav-link">
                                            <a className={menukey == 'contacts' ? 'active' : ''}>Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="side-nav">
                                    <Link href="/auth/login">
                                        <a className="consultant-btn">SHQ Login</a>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavigationBar;
