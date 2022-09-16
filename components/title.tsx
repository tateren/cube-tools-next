import Head from "next/head";

const Title = ({ title }: { title: string }) => (
  <Head>
    <title>{`${title}`} | Cube Tools</title>
  </Head>
);

export default Title;
