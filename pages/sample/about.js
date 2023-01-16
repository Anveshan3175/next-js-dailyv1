//http://localhost:3000/sample/about

import Link from "next/link";

export default function About() {
  return (
    <>
      <h2>About Page</h2>
      <section>
        <Link legacyBehavior href="/">
          <a>Home</a>
        </Link>
        <br />
        <Link legacyBehavior href="./blog/1">
          <a>Blog 1</a>
        </Link>
        <br />
        <Link legacyBehavior href="./blog/2">
          <a>Blog 2</a>
        </Link>
      </section>
    </>
  );
}
