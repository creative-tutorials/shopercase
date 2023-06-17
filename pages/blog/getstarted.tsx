import str from "../../styles/started.module.css";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import { lazy, useState } from "react";
import Link from "next/link";
import Image from "next/image";
const Header = lazy(() =>
  import("../../components/element/Header").then((module) => ({
    default: module.Header,
  }))
);
export default function GetStartedBlog() {
  const [isOpen, setIsOpen] = useState(false);
  const pinnedBlog = "/blogs/pinned.png";
  return (
    <>
      <Head>
        <title>Get Started with Shopercase</title>
        <meta name="description" content="Get Started with Shopercase" />
        <meta property="og:title" content="Get Started with Shopercase" />
        <meta property="og:description" content="Get Started with Shopercase" />
        <meta property="og:url" content="https://shopercase.vercel.app/blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={str.container}>
        <Header styles={styles} setIsOpen={setIsOpen} Link={Link} />
        <div className={str.wrapper}>
          <div className={str.bc}>
            <div className={str.blogHeader}>
              <div className={str.blogHeader_content}>
                <h1>Get Started with Shopercase</h1>
                <div className={str.bhr_x3}>
                  <li>2023-06-17</li>
                  <li>1 min read</li>
                </div>
              </div>
              <div className={str.blogHeader_Image}>
                <Image
                  src={pinnedBlog}
                  width={730}
                  height={450}
                  unoptimized
                  alt="Picture of the author"
                  style={{ objectFit: "fill", borderRadius: "15px" }}
                />
              </div>
              <div className={str.blogContent}>
                <p>
                  In this blog post we&apos; be looking on how to setup and use
                  Shopercase, We will learn what shopercase <br /> is and how to
                  get it setup in minutes. We will guide you through the
                  key features of Shopercase and <br /> provide step-by-step
                  instructions to help you make the most out of our platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
