import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Categories from "../components/Categories";

import ProductFeed from "../components/ProductFeed";
import FullRow from "../components/FullRow";
import Footer from "../components/Footer";
import CardsRow from "../components/CardsRow";

import { server } from "../config";

export default function Home({ products }) {
  return (
    <div className="font-Walsheim">
      <Head>
        <title>Innocre Online Shop</title>
        <meta name="description" content="Innocre Online Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner />
        <section className="w-[90%] mx-auto my-6 md:my-2">
          <Categories />
          <ProductFeed products={products} />
        </section>
        {/* <FullRow /> */}
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch(`${server}/api/sample`).then((rest) =>
    rest.json()
  );

  return {
    props: {
      products,
    },
  };
}

// export async function getServerSideProps(context) {
//   const products = await fetch("http://localhost:3000/api/sample/").then(
//     (rest) => rest.json()
//   );

//   return {
//     props: {
//       products,
//     },
//   };
// }

// https://fakestoreapi.com/products/category/electronics
