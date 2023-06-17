import Head from "next/head";
import blgs from "../styles/blog.module.css";
import { lazy, useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
const Header = lazy(() =>
  import("../components/element/Header").then((module) => ({
    default: module.Header,
  }))
);
export default function Blog() {
  const [isOpen, setIsOpen] = useState(false);
  const pinnedBlog = "/blogs/pinned.png";
  return (
    <>
      <Head>
        <title>Blog | Shopercase</title>
        <meta name="description" content="Shopercase Blog" />
        <meta property="og:title" content="Shopercase Blog" />
        <meta property="og:description" content="Shopercase Blog" />
        <meta property="og:url" content="https://shopercase.vercel.app/blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={blgs.contaianer}>
        <Header styles={styles} setIsOpen={setIsOpen} Link={Link} />
        <div className={blgs.wrapper}>
          <div className={blgs.min32}>
            <h1>Blog</h1>
            <p>Read about shopercase announcemnt and news right here.</p>
          </div>
          <div className={blgs.blogSection}>
            <Link href="/blog/getstarted">
              <div className={blgs.pinned}>
                <div className={blgs.Image}>
                  <Image
                    src={pinnedBlog}
                    width={630}
                    height={350}
                    // unoptimized
                    alt="Picture of the author"
                    style={{ objectFit: "fill", borderRadius: "15px" }}
                  />
                </div>
                <div className={blgs.content_wrapper}>
                  <div className={blgs.tags}>
                    <li>17 June 2023</li>
                    <li>1 minutes read</li>
                  </div>
                  <div className={blgs.content}>
                    <h1 id={blgs.title}>Get Started with Shopercase</h1>
                    <p id={blgs.description}>
                      In this blog post we&apos; be looking on how to setup and
                      use Shopercase, <br /> We will learn what shopercase is
                      and how to get it setup in minutes.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
