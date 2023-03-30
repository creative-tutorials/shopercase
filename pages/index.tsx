import { Header } from "../components/Header/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { exportRouteToSignup } from "../components/functions/exportRouteToSignup";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [blurMenuActive, setBlurMenuActive] = useState(false);
  const router = useRouter();
  const RouteToSignup = exportRouteToSignup(router);
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
        <Header
          styles={styles}
          Link={Link}
          Image={Image}
          setBlurMenuActive={setBlurMenuActive}
        />
        <section className={styles.hero_section}>
          <div className={styles.hero_content}>
            <h1>
              The platform you <br />
              need to kindle <br />
              <span className={styles.jc}>your business</span>
            </h1>
            <p className={styles.heroPar}>
              Shopercase makes it easy to share, monetize <br /> and Grow your
              brand.
            </p>
          </div>
          <div className={styles.hero_image}>
            <Image
              src={"/screely-1680032254255.png"}
              alt=""
              width={200}
              height={200}
              loading="lazy"
              placeholder="blur"
              blurDataURL="/app2.png"
              unoptimized
              id={styles.img}
            />
          </div>
        </section>
        <section className={styles.goal}>
          <div className={styles.goal_header}>
            <p>Our goal is simple</p>
            <h2>
              Quickly launch your online business <br /> and start monetizing
              today!
            </h2>
          </div>
          <div className={styles.goal_banner}>
            <div className={styles.goal_image}>
              <Image
                src={"/x.png"}
                alt=""
                width={200}
                height={200}
                loading="lazy"
                placeholder="blur"
                blurDataURL="/app2.png"
                unoptimized
                id={styles.img}
              />
            </div>
            <div className={styles.goalText}>
              <h1>
                Payments <br /> made simple
              </h1>
              <p>
                Crafted to support the{" "}
                <span id={styles.goalHubspot}>modern</span> entrepreneur,
                creator, <br /> business and developers that seeks increased
                efficiency.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.store_section}>
          <div className={styles.store_content}>
            <div className={styles.graphics}>
              <i className="fa-solid fa-stars"></i>
            </div>
            <div className={styles.k_card}>
              <div className={styles.kflex}>
                <div className={styles.kl}>
                  <Image
                    src={"/screely-1680047616406.png"}
                    width={500}
                    height={500}
                    alt=""
                    loading="lazy"
                    placeholder="blur"
                    unoptimized
                    blurDataURL="/app.png"
                    className={styles.image_kl}
                  ></Image>
                </div>
                <div className={styles.kr}>
                  <h1>Attract Your Customers to You</h1>
                  <p>
                    Gain visibility into your business&apos;s plan for big
                    expenses, manage profits, customers and more
                  </p>
                  <div className={styles.mg}>
                    <button onClick={RouteToSignup}>
                      Get Started - It&apos;s free
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.profile_section}>
          <div id={styles.neon}></div>
          <div className={styles.profile_container}>
            <div className={styles.profileMe}>
              <div className={styles.profile}>
                <Image
                  src={"/InShot_20230320_223257350.jpg"}
                  alt=""
                  width={200}
                  height={200}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/app2.png"
                  unoptimized
                  id={styles.img}
                />
              </div>
              <div className={styles.profile_content}>
                <div className={styles.quote}>
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <p id={styles.testify}>
                  I highly recommend Shopercase to anyone looking to sell their
                  products online. <br /> It&apos;s a powerful platform
                  that&apos;s easy to use, <br /> and the team behind it is
                  always innovating and improving
                </p>
                <p id={styles.creator}>Treasure Alekhojie</p>
                <p id={styles.title}>CEO, Founder</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.payment_section}>
          <div id={styles.neon}></div>
          <div className={styles.payment_wrapper}>
            <div className={styles.pyicon}>
              <div className={styles.pyicon_header}>
                <h2>
                  Payment <br /> Solutions
                </h2>
                <p className={styles.animtypewriter}>
                  Shopercase handles payments via Lemonsquezzy - it&apos;s that
                  easy!
                </p>
              </div>
              <Image
                src={"/icons/SBDi9PA-_400x400 1.png"}
                alt=""
                width={80}
                height={80}
                loading="lazy"
                placeholder="blur"
                blurDataURL="/app2.png"
                unoptimized
                id={styles.msj}
              />
            </div>
          </div>
        </section>
        <section className={styles.sub_section}>
          <div className={styles.sub_container}>
            <div className={styles.subHeader}>
              <h1>
                Be one of the exclusive 1,682 users <br /> eagerly awaiting our
                launch
              </h1>
            </div>
            <div className={styles.subscribewrapper}>
              <button className={styles.subcribeBtn} onClick={RouteToSignup}>
                Sign Up
              </button>
            </div>
          </div>
        </section>
        <footer className={styles.footer}>
          <div className={styles.footer_wrapper}>
            <div className={styles.top}>
              <div className={styles.tl}>
                <div className={styles.tltop}>
                  <p id={styles.info}>Helpful links</p>
                  <div className={styles.links}>
                    <Link href={"/"}>Join our club</Link>
                    <Link href={"/showcase"}>Showcase</Link>
                    <Link href={"/blog"}>Blog</Link>
                  </div>
                  <div className={styles.bottom}>
                    <div className={styles.bottom_links}>
                      <Link href={"https://twitter.com/shopercase_inc"}>
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href={
                          "https://www.linkedin.com/in/shopercase-inc-2a8863264"
                        }
                      >
                        <i className="fa-brands fa-linkedin"></i>
                      </Link>
                      <Link
                        href={
                          "https://join.slack.com/t/shopercase/shared_invite/zt-1sb5gnc9w-RlHbrUDpIQbbn0G8yn~Pzw"
                        }
                      >
                        <i className="fa-brands fa-slack"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tr}>
                <p>
                  Copyright &copy; 2023 Shopercase, Inc. All rights reserved
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
