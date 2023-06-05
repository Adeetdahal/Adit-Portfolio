import Theme from '../styles/theme';
import Head from 'next/head'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Adit Dahal</title>
        <meta name="description" content="Your trusted software developer" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <Theme>
        <Component {...pageProps} />
        <ToastContainer
            theme="dark"
            // toastStyle={{ backgroundColor: 'black' }}
          />
      </Theme>
    </>
  );
}
