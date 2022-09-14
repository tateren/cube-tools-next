import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen">
      <nav className="navbar bg-neutral">
        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl">TOP</a>
        </Link>
        <Link href="/commutator">
          <a className="btn btn-ghost normal-case text-xl">
            Commutator Expander
          </a>
        </Link>
        <Link href="/three-style/edge">
          <a className="btn btn-ghost normal-case text-xl">Edge 3-Style</a>
        </Link>
        <Link href="/three-style/corner">
          <a className="btn btn-ghost normal-case text-xl">Corner 3-Style</a>
        </Link>
      </nav>
      <main className="container max-w-5xl mx-auto py-4 prose">{children}</main>
    </div>
  );
};

export default Layout;
