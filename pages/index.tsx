import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { lazy, Suspense, useState } from "react";
const UnitedStates = lazy(
  () => import("../components/icons/flags/unitedStates")
);
const UnitedKingdom = lazy(
  () => import("../components/icons/flags/unitedKingdom")
);
const India = lazy(() => import("../components/icons/flags/india"));
const Canda = lazy(() => import("../components/icons/flags/canada"));
const Nigeria = lazy(() => import("../components/icons/flags/nigeria"));
const Australia = lazy(() => import("../components/icons/flags/australia"));
const React = lazy(() => import("../components/icons/tech/react"));
const MongoDB = lazy(() => import("../components/icons/tech/mongodb"));
const Supabase = lazy(() => import("../components/icons/tech/supabase"));
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>
          Shopercase | Revolutionize Your Online Store with Shopercase:
        </title>
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
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.hCol}>
              <div className={styles.hleft}>
                <div className={styles.Logo}>
                  <Image
                    src="/icons/ShoperFrame.png"
                    width={35}
                    height={35}
                    alt="Shopercase Logo"
                  />
                </div>
                <div className={styles.m_Links}>
                  <Link href="/">Docs</Link>
                  <Link href="/">Blog</Link>
                  <Link href="/">About</Link>
                </div>
              </div>
              <div className={styles.hright}>
                <div className={styles.str}>
                  <Link href="https://github.com/creative-tutorials/shopercase">
                    <i className="fa-solid fa-star fa-2xs"></i> Star us on
                    GitHub
                  </Link>
                </div>
                <div className={styles.menu}>
                  <i
                    className="fa-solid fa-bars"
                    onClick={() => setIsOpen(true)}
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sections}>
            <section id={styles.landingPage}>
              <div className={styles.center}>
                <h1>
                  Revolutionize Your Online Store with Shopercase: <br />{" "}
                  <span id={styles.highlight}>
                    Unleash the Power of Seamless E-commerce
                  </span>
                </h1>
                <p>
                  Improve the way you run your business with just a simple
                  click, <br /> manage your sales with our simple bookkeeping
                  system
                </p>
                <div className={styles.buttons}>
                  <button id={styles.book}>Book demo</button>
                  <button id={styles.watch}>
                    <i className="fa-solid fa-circle-play"></i> Watch video
                  </button>
                </div>
                <div className={styles.stacks}>
                  <p>The stack we use and love</p>
                  <div className={styles.brand}>
                    <i
                      className="bx bxl-react"
                      style={{ color: "#808996" }}
                    ></i>
                    <i
                      className="bx bxl-mongodb"
                      style={{ color: "#808996" }}
                    ></i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44.8"
                      height="44.8"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#808996"
                        d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </section>
            <section id={styles.section2}>
              <div className={styles.center}>
                <h1>Sell faster and focus on your product</h1>
                <p>Let&apos;s handle the sales for you with these tools</p>
              </div>
              <div className={styles.grid_x3}>
                <div className={styles.ebx_3}>
                  <div className={styles.ebx_3_u3}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#808996"
                        d="M8 3a7 7 0 0 0 0 14h1.07a7.06 7.06 0 0 1 0-2H8A5 5 0 0 1 8 5h8a5 5 0 0 1 4.9 6a7.021 7.021 0 0 1 1.426 2A7 7 0 0 0 16 3H8Zm8 10a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 9.172 2.757l2.535 2.536l-1.414 1.414l-2.536-2.535A5 5 0 0 1 11 16Z"
                      />
                    </svg>
                    <p>SEO</p>
                  </div>
                  <div className={styles.ebx_3_u2}>
                    <span>
                      Every product is configured with our SEO tools. Search
                      product better and faster with our flexible search engine
                    </span>
                  </div>
                </div>
                <div className={styles.ebx_3}>
                  <div className={styles.ebx_3_u3}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#808996"
                        fill-rule="evenodd"
                        d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6zm10 2a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0V8zm-4 3a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0v-5zm8 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <p>Realtime Analytics</p>
                  </div>
                  <div className={styles.ebx_3_u2}>
                    <span>
                      Monitor those metrics and get real-time insights on your
                      sales. Get real data of your product.
                    </span>
                  </div>
                </div>
                <div className={styles.ebx_3}>
                  <div className={styles.ebx_3_u3}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#808996"
                        d="M21 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7H2v-2l1-5h18l1 5v2h-1ZM5 13v6h14v-6H5Zm1 1h8v3H6v-3ZM3 3h18v2H3V3Z"
                      />
                    </svg>
                    <p>Account store</p>
                  </div>
                  <div className={styles.ebx_3_u2}>
                    <span>
                      No need to deal with having a physical store, your account
                      is used as your store, simply create an account and start
                      selling.
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section id={styles.section3}>
              <div className={styles.center}>
                <h1>Built for the community</h1>
                <p>
                  Shopercase is supported by every one of several cities and
                  countries
                </p>
              </div>
              <div className={styles.grid_fl3}>
                <div className={styles.fl3_gg}>
                  <Suspense fallback={<p>Loading...</p>}>
                    <UnitedStates />
                    <h4>United States</h4>
                  </Suspense>
                </div>
                <div className={styles.fl3_gg}>
                  <Suspense fallback={<p>Loading...</p>}>
                    <UnitedKingdom />
                    <h4>United Kingdom</h4>
                  </Suspense>
                </div>
                <div className={styles.fl3_gg}>
                  <Suspense fallback={<p>Loading...</p>}>
                    <India />
                    <h4>India</h4>
                  </Suspense>
                </div>
                <div className={styles.fl3_gg}>
                  <Suspense fallback={<p>Loading...</p>}>
                    <Canda />
                    <h4>Canada</h4>
                  </Suspense>
                </div>
                <div className={styles.fl3_gg}>
                  <Suspense fallback={<p>Loading...</p>}>
                    <Australia />
                    <h4>Australia</h4>
                  </Suspense>
                </div>
                <div className={styles.fl3_gg}>
                  <Suspense fallback={<p>Loading...</p>}>
                    <Nigeria />
                    <h4>Nigeria</h4>
                  </Suspense>
                </div>
                <div className={styles.fl3_gg}>
                  <Suspense fallback={<p>Loading...</p>}>
                    <h2>+193</h2>
                  </Suspense>
                </div>
              </div>
            </section>
            <section id={styles.section5}>
              <div className={styles.center}>
                <h1>
                  Built with the fastest <br /> and most trusted technologies
                </h1>
                <p>
                  Shopercase uses the best technologies to give you the best
                  experience.
                </p>
              </div>
              <div className={styles.tch_y3}>
                <div className={styles.y3_ch3}>
                  <Suspense fallback={<p>Loading...</p>}>
                    <Supabase />
                    <h3>Supabase</h3>
                    <span>
                      Supabase is an open source Firebase alternative for
                      building secure and performant Postgres backends with
                      minimal configuration.
                    </span>
                  </Suspense>
                </div>
                <div className={styles.y3_ch3}>
                  <Suspense fallback={<p>Loading...</p>}>
                    <MongoDB />
                    <h3>MongoDB</h3>
                    <span>
                      MongoDB is a flexible, scalable NoSQL database that stores
                      data in JSON-like documents. It&apos;s ideal for handling
                      large amounts of unstructured data and supports dynamic
                      schemas. MongoDB is commonly used for web applications,
                      big data, and real-time analytics.
                    </span>
                  </Suspense>
                </div>
                <div className={styles.y3_ch3}>
                  <Suspense fallback={<p>Loading...</p>}>
                    <React />
                    <h3>React</h3>
                    <span>
                      React is a JavaScript library for creating reusable UI
                      components, efficiently updating them, and building
                      dynamic web applications.
                    </span>
                  </Suspense>
                </div>
              </div>
            </section>
            <section id={styles.section4}>
              <div className={styles.center}>
                <h1>Join the discussion</h1>
                <p>
                  Have a discussion? Join the community and share your
                  suggestions
                </p>
                <div className={styles.buttons}>
                  <button id={styles.book}>
                    <i className="fa-brands fa-github"></i> Github discussion
                  </button>
                  <button id={styles.watch}>
                    <i className="fa-brands fa-discord"></i> Discord
                  </button>
                </div>
              </div>
            </section>
            <section id={styles.section6}>
              <div className={styles.center}>
                <h1>Tired of old e-commerce platforms</h1>
                <div className={styles.buttons}>
                  <button id={styles.book}>Book demo</button>
                </div>
              </div>
            </section>
            <footer id={styles.footer}>
              <div className={styles.ft3_cy}>
                <div className={styles.cy_left}>
                  <p>&copy; 2023 Shopercase - All rights reserved</p>
                </div>
                <div className={styles.cy_right}>
                  <Link href="/">
                    <i className="fa-brands fa-github"></i>
                  </Link>
                  <Link href="/">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                </div>
              </div>
            </footer>
          </div>
          {isOpen && (
            <div className={styles.openMenu}>
              <div className={styles.opClose}>
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => setIsOpen(false)}
                ></i>
              </div>
              <div className={styles.oLink}>
                <Link href="/">Docs</Link>
                <Link href="/">Blog</Link>
                <Link href="/">About</Link>
              </div>
              <div className={styles.ie3}>
                <Link href="https://github.com/creative-tutorials/shopercase">
                  <i className="fa-solid fa-star fa-2xs"></i> Star us on GitHub
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
