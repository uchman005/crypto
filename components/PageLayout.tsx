import Head from 'next/head';
import Script from 'next/script';
import { ReactNode } from 'react';
import CopyRight from './website/CopyRight';
import FooterArea from './website/FooterArea';
import HeaderArea from './website/HeaderArea';
import NavigationBar from './website/NavigationBar';

interface Props {
    menukey: string;
    children?: ReactNode;
}

function PageLayout({ menukey, children }: Props) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="shortcut icon" href="/assets/img/favicon.png" type="image/x-icon" />
                <link rel="shortcut icon" href="/assets/img/favicon.png" type="image/png" />
            </Head>
            <Script src="/assets/js/jquery-3.5.1.min.js" strategy="lazyOnload" />
            <HeaderArea />
            <NavigationBar menukey={menukey} />
            {children}
            <FooterArea />
            <CopyRight />
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

export default PageLayout;
