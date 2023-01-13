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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Shopercase - Shop with Confidence</title>
        <meta name="description" content="Shopercase - Shop with Confidence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/app.ico" />
        {/* <!-- Font Awesome PRO CDN --> */}
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v6.0.0-beta3/css/all.css"
        />
        {/* <!-- Boxicons CSS --> */}
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <Header styles={styles} Link={Link} Image={Image} />
      <Main styles={styles} />
      <About styles={styles} />
      <Features styles={styles} />
      <Security styles={styles} />
      <Intergrate styles={styles} />
      <SignupPage styles={styles} Image={Image} />
      <Footer styles={styles} Image={Image} />
    </>
  );
}
