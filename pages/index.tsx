import { Header } from "../components/Header/Header";
import { Main } from "../components/main";
import { About } from "../components/about";
import { Features } from "../components/features";
import { Security } from "../components/security";
import { Intergrate } from "../components/intergrate";
import { SignupPage } from "../components/SignupPage";
import { Footer } from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [blurMenuActive, setBlurMenuActive] = useState(false);
  return (
    <>
      <Head>
        <title>Shopercase - Shop with Confidence</title>
        <meta name="description" content="Shopercase - Shop with Confidence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div id={styles.App}>
        <Header
          styles={styles}
          Link={Link}
          Image={Image}
          setBlurMenuActive={setBlurMenuActive}
        />
        <Main styles={styles} />
        <About styles={styles} />
        <Features styles={styles} />
        <Security styles={styles} />
        <Intergrate styles={styles} />
        <SignupPage styles={styles} Image={Image} />
        <Footer styles={styles} Image={Image} Link={Link} />
        <div
          className={blurMenuActive ? "blurMenu active" : "blurMenu inactive"}
        >
          <div id={"blur_close"} onClick={() => setBlurMenuActive(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div id={"blurContent"}>
            <div id={"blurLinks"}>
              <Link href={"/"}>Home</Link>
              <Link href={`/#${styles.about}`}>About</Link>
              <Link href={`/#${styles.features}`}>Features</Link>
              <Link href={"/#blogs"}>Blog</Link>
              <Link href={"/#pricing"}>Pricing</Link>
              <Link href={"/#contact"}>Contact</Link>
            </div>
            <div id={"blurButton"}>
              <button id={"blurbtn"}>Join Beta</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
