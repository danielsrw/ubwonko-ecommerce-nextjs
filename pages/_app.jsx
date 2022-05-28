import '../styles/globals.css'
import { useEffect } from 'react';
import { SnackbarProvider } from 'notistack';
import { StoreProvider } from '../utils/Store';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    return (
        <StoreProvider>
            <Component {...pageProps} />
        </StoreProvider>
    )
}

export default MyApp
