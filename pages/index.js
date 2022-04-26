import { useState, useEffect } from "react";
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
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setData(products);
    setFilteredData(products);
  }, []);

  const handleCategory = (category) => {
    console.log(category);
    if (category !== "") {
      const filteredByCategory = data.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredData(filteredByCategory);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <div className="font-Karla">
      <Head>
        <title>Innocre Online Shop</title>
        <meta name="description" content="Innocre Online Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner imageLink={"full-banner-2.jpg"} />
        <Categories handleClick={handleCategory} />
        <section className="my-6 md:my-2">
          <ProductFeed products={filteredData} query={""} />
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
