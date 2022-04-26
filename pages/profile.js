import Head from "next/head";
import Header from "../components/Header";

function profile() {
  return (
    <div>
      <Head>
        <title>Profile | Innocre</title>
        <meta name="description" content="Your Innocre Online Shop Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}

export default profile;
