import '../public/assets/css/bootstrap.min.css';
import '../public/assets/css/meanmenu.css';
import '../public/assets/css/boxicons.min.css';
import '../public/assets/fonts/flaticon.css';
import '../public/assets/css/owl.carousel.min.css';
import '../public/assets/css/owl.theme.default.min.css';
import '../public/assets/css/animate.min.css';
import '../public/assets/css/odometer.min.css';
import '../public/assets/css/nice-select.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '../public/assets/css/magnific-popup.min.css';
import '../public/assets/css/style.css';
import '../public/assets/css/responsive.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../app/store';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
