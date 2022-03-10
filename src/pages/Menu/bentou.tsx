import Head from "next/head";
import { Header } from "../../layout/Header";
import { BentouLists } from "../../components/BentouLists";
import { VFC } from "react";
import { Footer } from "@/layout/Footer";

const Bentou: VFC = () => {
  return (
    <div>
      <Head>
        <title>焼肉弁当</title>
      </Head>

      <Header />

      <BentouLists />

      <Footer />
    </div>
  );
};

export default Bentou;
