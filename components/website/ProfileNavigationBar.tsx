import Link from 'next/link';
import Image from 'next/image';
import { logout } from '../../utils/auth';

interface menuProps {
    menukey: string;
    token?: string;
}
function NavigationBar({ menukey, token }: menuProps) {
    return (
        <>
            <div className="navbar-area sticky-top">
                <div className="mobile-nav">
                    <Link href="/accounts/dashboard" className="logo">
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
                            <Link className="navbar-brand" href="/accounts/dashboard">
                                <Image
                                    src="/assets/img/logo.png"
                                    className="h-[50px]"
                                    height={63}
                                    width={256}
                                    alt="Bitcoin Investors"
                                />
                            </Link>
                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="navbar-brand text-7xl" href="#">
                                            <a className="text-7xl">Home</a>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="side-nav">
                                    <button className="consultant-btn" onClick={logout}>
                                        Logout SHQ
                                    </button>
                                    <Link className="navbar-brand text-7xl" href={`/admin/security`}>
                                        <a className="consultant-btn bg-green-500 mx-2">Security</a>
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
