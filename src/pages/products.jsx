import Head from "next/head";
import Header from "src/components/Header";
import classes from "/src/styles/Home.module.css";
import { ProductLists } from "/src/components/ProductLists";
import { TopPhoto } from "src/components/TopPhoto";

const Products = () => {
  return (
    <div>
      <Head>
        <title>焼肉千里馬</title>
      </Head>

      <Header />

      <TopPhoto />

      <ProductLists />

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

export default Products;
