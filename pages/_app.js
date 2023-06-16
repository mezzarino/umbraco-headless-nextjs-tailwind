import "../styles/globals.css";
import Head from "next/head";

import { Montserrat, Raleway } from "next/font/google";

const mont = Montserrat({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-mont",
});

const openSans = Raleway({
  weight: ["400", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-opensans",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <main className={`${mont.variable} ${openSans.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
