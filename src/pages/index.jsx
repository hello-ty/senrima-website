import Head from "next/head";
import { Banner } from "src/components/Banner";
import Header from "src/components/Header";
import { Main } from "src/components/Main";
import classes from "/src/styles/Home.module.css";

const Home = () => {
  return (
    <div>
      <Head>
        <title>焼肉千里馬</title>
      </Head>

      <Header />
      <Banner />
      <Main />
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

export default Home;
