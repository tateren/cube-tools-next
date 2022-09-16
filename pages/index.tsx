import type { NextPage } from "next";
import Link from "next/link";
import Title from "../components/title";

const Home: NextPage = () => {
  return (
    <>
      <Title title="Top" />
      <h1>Cube Tools</h1>
      <ul>
        {/*
        <li>
          <Link href="/commutator">
            <a className="link-hover">Commutator Expander</a>
          </Link>
        </li>
        */}
        <li>
          <Link href="/three-style/edge">
            <a className="link-hover">Edge 3-Style</a>
          </Link>
        </li>
        <li>
          <Link href="/three-style/corner">
            <a className="link-hover">Corner 3-Style</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
