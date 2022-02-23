import Head from "next/head";
import Header from "src/components/Header";
import classes from "/src/styles/Home.module.css";
import { ProductLists } from "/src/components/ProductLists";
import { TopPhoto } from "src/components/TopPhoto";
import { BentouLists } from "src/components/BentouLists";

const Bentou = () => {
  return (
    <div>
      <Head>
        <title>焼肉弁当</title>
      </Head>

      <Header />

      {/* <TopPhoto title="焼肉弁当" imgSrc="/takeoutlogo3.png" alt="焼肉弁当" /> */}

      <BentouLists />

      <footer className={classes.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Yasui
        </a>
      </footer>
    </div>
  );
};

export default Bentou;
