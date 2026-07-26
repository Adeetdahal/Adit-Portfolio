import Theme from '../styles/theme';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Adit Dahal — Software Engineer · Sydney</title>
        <meta
          name="description"
          content="Adit Dahal is a Sydney-based Software Engineer specializing in React, Next.js, and TypeScript, with a background in Cyber Security."
        />
        <meta name="keywords" content="Adit Dahal, Software Engineer, React Developer, Next.js, Sydney, Cyber Security" />
        <meta name="author" content="Adit Dahal" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Adit Dahal — Software Engineer · Sydney" />
        <meta
          property="og:description"
          content="Sydney-based Software Engineer specializing in React, Next.js, and TypeScript, with a background in Cyber Security."
        />
        <meta property="og:image" content="/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Adit Dahal — Software Engineer · Sydney" />
        <meta
          name="twitter:description"
          content="Sydney-based Software Engineer specializing in React, Next.js, and TypeScript, with a background in Cyber Security."
        />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
