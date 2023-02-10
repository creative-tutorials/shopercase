import { Header } from "../components/Header/Header";
import { Main } from "../components/main";
import { Features } from "../components/features";
import { Security } from "../components/security";
import { Intergrate } from "../components/intergrate";
import { SignupPage } from "../components/SignupPage";
import { Footer } from "../components/Footer";
import { BlurMenu } from "../components/blurMenu";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState, useEffect } from 'react';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [blurMenuActive, setBlurMenuActive] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then(registration => {
            console.log('Service worker registered:', registration);
          })
          .catch(error => {
            console.error('Error registering service worker:', error);
          });
      });
    }
  
    return () => {
      
    }
  }, [])
  
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
        <Features styles={styles} />
        <Security styles={styles} />
        <Intergrate styles={styles} />
        <div id={styles.pricingPage}>
          <div id={styles.prcingHeader}>
            <p id={styles.prcing_p}>Pricing</p>
            <h2 id={styles.pricing_hd}>Choose a Plan</h2>
            <p id={styles.prcing_pt}>
              Discover the Right Plan for Your Business - Compare Features and
              Benefits
            </p>
          </div>
          <div id={styles.pr_card_wrapper}>
            <div id={styles.pricing_card}>
              <div id={styles.plan_header}>Basic</div>
              <h2 id={styles.price}>$29.00</h2>
              <p id={styles.price_tag}>Monthly</p>
              <li>
                Analytics Data: Limited to basic sales and website traffic
                reports
              </li>
              <li>
                Social Media Integration: Limited to only one social media
                platform
              </li>
              <li>Product Upload: Limited to 50 products</li>
              <li>Purchase Products: Allowed</li>
              <li>Boost Sales: Not included</li>
            </div>
            {/*  */}
            <div id={styles.pricing_card}>
              <div id={styles.plan_header}>Professional</div>
              <h2 id={styles.price}>$59.00</h2>
              <p id={styles.price_tag}>Monthly</p>
              <li>
                Analytics Data: Advanced sales and website traffic reports
              </li>
              <li>
                Social Media Integration: Integration with multiple social media
                platforms
              </li>
              <li>Product Upload: Unlimited product uploads</li>
              <li>Purchase Products: Allowed</li>
              <li>Boost Sales: Limited to basic sales boosting features</li>
            </div>
            {/*  */}
            <div id={styles.pricing_card}>
              <div id={styles.plan_header}>Premium</div>
              <h2 id={styles.price}>$99.00</h2>
              <p id={styles.price_tag}>Monthly</p>
              <li>
                Analytics Data: Advanced sales and website traffic reports with
                custom analytics dashboards
              </li>
              <li>
                Social Media Integration: Integration with multiple social media
                platforms with advanced features
              </li>
              <li>Product Upload: Unlimited product uploads</li>
              <li>Purchase Products: Allowed</li>
              <li>Boost Sales: Advanced sales boosting features</li>
            </div>
          </div>
        </div>
        <SignupPage styles={styles} Image={Image} />
        <Footer styles={styles} Image={Image} Link={Link} />
        <BlurMenu
          blurMenuActive={blurMenuActive}
          setBlurMenuActive={setBlurMenuActive}
          styles={styles}
          Link={Link}
        />
      </div>
    </>
  );
}
