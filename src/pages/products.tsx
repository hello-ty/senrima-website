import Head from "next/head";
import { Header } from "../layout/Header";
import { ProductLists } from "../components/ProductLists";
import { TopPhoto } from "src/components/TopPhoto";
import { VFC } from "react";
import { Footer } from "@/layout/Footer";

const Products: VFC = () => {
  return (
    <div>
      <Head>
        <title>お品書き「焼肉千里馬」</title>
      </Head>

      <Header />

      <TopPhoto title="お品書き" />

      <ProductLists />

      <Footer />
    </div>
  );
};

export default Products;
