import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { server } from "../../config";

import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductFeed from "../../components/ProductFeed";

export default function index({ products }) {
  const router = useRouter();
  const [data, setData] = useState("");
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setQuery(router.query.keyword);
  }, [router]);
  useEffect(() => {
    const filteredData = products.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredData);
  }, [query]);

  return (
    <div>
      <Head>
        <title>Result for {query} | Innocre</title>
        <meta name="description" content={`Search result for ${query}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner imageLink={"banner-2.webp"} />
        <section className="my-6 md:my-2">
          <ProductFeed products={filteredData} query={query} />
        </section>
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
