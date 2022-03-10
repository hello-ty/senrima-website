import Head from "next/head";
import { VFC } from "react";
import { Access } from "../components/Access";
import { Banner } from "../components/Banner";
import { Cource } from "../components/Cource";
import { Menus } from "../components/Menus";
import { Layout } from "../layout/";

const Home: VFC = () => {
  return (
    <div>
      <Head>
        <title>焼肉千里馬</title>
      </Head>

      <Layout>
        <>
          <Banner />
          <main className="border  py-7 lg:px-24 md:px-10 sm:px-1 w-screen font-fancy">
            <Menus />
            <Cource />
            <Access />
          </main>
        </>
      </Layout>
    </div>
  );
};

export default Home;
