import Head from "next/head";
import Banner from "../components/Banner";
import CardsRow from "../components/CardsRow";
import Footer from "../components/Footer";
import Header from "../components/Header";

function cart() {
  return (
    <div>
      <Head>
        <title>Cart | Innocre</title>
        <meta name="description" content="Your Innocre Online Shop Cart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner />
        <section className="w-[90%] mx-auto my-12">
          <CardsRow />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default cart;
