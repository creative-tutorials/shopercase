import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css"
import Link from "next/link";
import PageHeader from "../components/function/header/pageHeader";
import HeroSection from "../components/function/sections/heroSection";
import ProductsSection from "../components/function/sections/productsSection";
import FAQSection from "../components/function/sections/faqSection";
import WaitingFeatured from "../components/function/sections/waitingfeaturedSection";
import ContactSection from "../components/function/sections/contactSection";
import PageFooter from "../components/function/footer/pageFooter";
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [jsonData, setjsonData] = useState([]);
  const [isActive, setisActive] = useState(false);
  const [isMeidaHActive, setIsMeidaHActive] = useState(false);
  useEffect(() => {
    function handleScroll() {
      // replace 'header' with the actual selector for your header element
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        setisActive(true); // replace 'scrolled' with the class name for the new header background
      } else {
        setisActive(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    fetchJSONData();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchJSONData = async () => {
    const response = await fetch("db.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const result = await response.json();
      setjsonData(result);
      console.log(result);
    }
  };
  return (
    <>
      <Head>
        <title>Shopercase - Shop smarter, not harder</title>
        <meta
          name="description"
          content="Shop smarter, not harder - with the ultimate shopping destination, Shopercase!"
        />
        <meta
          property="og:title"
          content="Shop smarter, not harder - with the ultimate shopping destination, Shopercase!"
        />
        <meta
          property="og:description"
          content="Shop smarter, not harder - with the ultimate shopping destination, Shopercase!"
        />
        <meta property="og:url" content="https://snipcart.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div id={styles.App}>
        <div className={styles.align}>
          <PageHeader
            styles={styles}
            isActive={isActive}
            setIsMeidaHActive={setIsMeidaHActive}
            isMeidaHActive={isMeidaHActive}
          />
        </div>
        <div className={styles.sections}>
          <HeroSection styles={styles} />
          <ProductsSection styles={styles} isActive={isActive} />
          <FAQSection styles={styles} jsonData={jsonData} isActive={isActive} />
          <WaitingFeatured styles={styles} isActive={isActive} />
          <ContactSection styles={styles} isActive={isActive} />
          <PageFooter styles={styles} />
        </div>
      </div>
    </>
  );
}
