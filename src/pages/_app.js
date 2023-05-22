import Theme from '../styles/theme';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Adit Dahal</title>
        <meta name="description" content="Your trusted software developer" />
        {/* <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" /> */}
        <link rel="icon" type="image/png" sizes="36x36" href="/favicon.png" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
