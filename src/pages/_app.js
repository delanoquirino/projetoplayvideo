import Head from "next/head";
import { GlobalStyle } from "../styles/globals";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>VideoPlayer</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
}
