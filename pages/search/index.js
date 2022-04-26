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
  const [keyword, setKeyword] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setKeyword(router.query.keyword);
  }, [router]);
  useEffect(() => {
    const filteredData = products.filter(
      (item) =>
        item.title.toLowerCase().includes(keyword.toLowerCase()) ||
        item.description.toLowerCase().includes(keyword.toLowerCase()) ||
        item.category.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredData(filteredData);
  }, [keyword]);

  return (
    <div>
      <Head>
        <title>Result for {keyword} | Innocre</title>
        <meta name="description" content={`Search result for ${keyword}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner imageLink={"banner-2.webp"} />
        <section className="my-6 md:my-2">
          <ProductFeed products={filteredData} query={keyword} />
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
