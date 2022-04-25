import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Categories from "../components/Categories";

import ProductFeed from "../components/ProductFeed";
import FullRow from "../components/FullRow";
import Footer from "../components/Footer";

export default function Home({ products }) {
  return (
    <div className="font-Walsheim dark:bg-[#222222]">
      <Head>
        <title>Innocre Online Shop</title>
        <meta name="description" content="Innocre Online Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <Test /> */}
      <main>
        <div className="bg-[#ebebeb] md:bg-white pt-10 pb-4">
          <Banner />
        </div>
        <div className="w-[90%] mx-auto mt-6 md:mt-0">
          <Categories />
          <ProductFeed products={products} />
        </div>
        <FullRow />
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch(
    "https://fakestoreapi.com/products/category/electronics"
  ).then((rest) => rest.json());

  return {
    props: {
      products,
    },
  };
}

// https://fakestoreapi.com/products/category/electronics
