import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

const FirstPost = ({data}) => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
    </Layout>
  );
};

export default FirstPost;