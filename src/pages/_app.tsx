import "tailwindcss/tailwind.css";
import Head from "next/head";
import { AppProps } from "next/app";

import usePageView from "../hooks/usePageView";

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();

  return (
    <>
      <Head>
        <meta
          name="description"
          content="名古屋駅から近い、美味しい焼肉屋です。焼肉弁当販売中です。お家でおいしい焼肉をお召し上がりいただけます。カウンターで一人焼肉人気です。"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
