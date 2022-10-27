import Head from 'next/head';
import Script from 'next/script';
import { ReactNode } from 'react';
import { ApiUser } from '../interfaces';
import AccountSubPage from './website/AccountSubPage';
import CopyRight from './website/CopyRight';
import FooterArea from './website/FooterArea';
import HeaderArea from './website/HeaderArea';
import ProfileNavigationBar from './website/ProfileNavigationBar';

interface Props {
    userinfo: ApiUser;
    menukey: string;
    children?: ReactNode;
    subpage?: boolean;
}

function AccountLayout({ userinfo, menukey, children, subpage }: Props) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="shortcut icon" href="/assets/img/favicon.png" type="image/x-icon" />
                <link rel="shortcut icon" href="/assets/img/favicon.png" type="image/png" />
                <title>{` ${userinfo.firstname} ${userinfo.lastname}`} | SHQBTCI</title>
            </Head>
            <HeaderArea />
            <ProfileNavigationBar menukey={menukey} token={userinfo.token} />
            <AccountSubPage userProfile={userinfo} subpage={subpage} />
            {children}
            <FooterArea />
            <CopyRight />
            <Script src="/assets/js/jquery-3.5.1.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/popper.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/bootstrap.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/jquery.ajaxchimp.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/jquery.meanmenu.js" strategy="lazyOnload" />
            <Script src="/assets/js/owl.carousel.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/wow.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/odometer.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/jquery.appear.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/jquery.nice-select.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
            <Script src="/assets/js/custom.js" strategy="lazyOnload" />
        </>
    );
}

export default AccountLayout;
