import { Header } from "../components/Header/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {
  useState,
  useEffect,
  useRef,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  SetStateAction,
} from "react";
import { exportRouteToSignup } from "../components/functions/exportRouteToSignup";
const inter = Inter({ subsets: ["latin"] });

function FAQ({ index, item }: any) {
  const className = `item-${index}`;
  return (
    <div className={styles._qs} id={className}>
      <div className={styles._q_fv}>
        <span>{item.question}</span>
        <i className="fa-sharp fa-solid fa-caret-up"></i>
      </div>
      <div className={styles.answer_box}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [blurMenuActive, setBlurMenuActive] = useState(false);
  const [jsonData, setjsonData] = useState([]);
  const [isActive, setisActive] = useState(false);
  const [isMeidaHActive, setIsMeidaHActive] = useState(false);
  const router = useRouter();
  const RouteToSignup = exportRouteToSignup(router);
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
          <div
            className={styles.Header}
            id={isActive ? styles.active : undefined}
          >
            <div className={styles.header_content}>
              <div className={styles.logo}>
                <Image
                  src={"/icons/ShoperFrame.png"}
                  alt={"helloworld"}
                  width={50}
                  height={50}
                  blurDataURL={"$/"}
                  placeholder={"blur"}
                  unoptimized
                />
              </div>
              <div className={styles.linkContent}>
                <Link href={"/"}>Features</Link>
                <Link href={"/"}>Resources</Link>
                <Link href={"/"}>Community</Link>
                <Link href={"/"}>Contact</Link>
              </div>
              <div className={styles.headerBtns} id={isActive ? styles.active : undefined}>
                <button id={styles.btn_alpha_login_rw}>Log In</button>
                <button id={styles.btn_alpha_signuo_w2}>Get Started</button>
              </div>
              <div className={styles.media}>
                {isMeidaHActive ? (
                  <i
                    className="fa-solid fa-xmark"
                    onClick={() => setIsMeidaHActive(!isMeidaHActive)}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-bars"
                    onClick={() => setIsMeidaHActive(!isMeidaHActive)}
                  ></i>
                )}
              </div>
            </div>
            {isMeidaHActive ? (
              <div className={styles.mediaH}>
                <div className={styles.m_linkContent}>
                  <Link href={"/"}>Features</Link>
                  <Link href={"/"}>Resources</Link>
                  <Link href={"/"}>Community</Link>
                  <Link href={"/"}>Contact</Link>
                </div>
                <div className={styles.m_headerBtns}>
                  <button id={styles.btn_alpha_login_rw}>Log In</button>
                  <button id={styles.btn_alpha_signuo_w2}>Get Started</button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className={styles.sections}>
          <section className={styles.main}>
            <div className={styles.main_cy_3s}>
              <h2>
                The platform you need to <br />{" "}
                <span className={styles.highlight_}>kindle your business</span>{" "}
              </h2>
              <p>
                Monetize anything online, fast and easy! <br /> Start profiting
                from your content and products with our efficient services. Try
                us today!
              </p>
              <div className={styles.jwBtn}>
                <button id={styles.join_w}>
                  Join the waitlist <i className="fa-light fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className={styles.main_img}>
              <Image
                src={"/screely-1682466528075.png"}
                alt={"helloworld"}
                width={800}
                height={400}
                blurDataURL={"$/"}
                placeholder={"blur"}
                unoptimized
              />
            </div>
          </section>
          <section
            className={styles.pmi}
            id={isActive ? styles.active : undefined}
          >
            <div className={styles.moi}>
              <h3>Sell anything online</h3>
              <p>
                Maximize your sales potential. Create content, sell faster, and
                watch your profits skyrocket! 🚀
              </p>
            </div>
            <div className={styles._cards_wrapper}>
              <div className={styles.card}>
                <div className={styles.card_left}>
                  <div className={styles.card_tp}>
                    <h3>Digital Products</h3>
                    <p>
                      Create, and sell digital products right here on Shopercase
                    </p>
                  </div>
                  <div className={styles.card_btm}>
                    <button className={styles.ui_n}>
                      Join the waitlist{" "}
                      <i className="fa-light fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
                <div className={styles.card_righ}>
                  <div className={styles.ImgCard}>
                    <Image
                      src={"/submit.png"}
                      alt={"helloworld"}
                      width={400}
                      height={400}
                      blurDataURL={"$/"}
                      placeholder={"blur"}
                      unoptimized
                    />
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.card_left}>
                  <div className={styles.card_tp}>
                    <h3>Physical Products</h3>
                    <p>
                      Create, and sell physical products right here on
                      Shopercase
                    </p>
                  </div>
                  <div className={styles.card_btm}>
                    <button className={styles.ui_n}>
                      Join the waitlist{" "}
                      <i className="fa-light fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
                <div className={styles.card_righ}>
                  <div className={styles.ImgCard}>
                    <Image
                      src={"/stocks.png"}
                      alt={"helloworld"}
                      width={400}
                      height={400}
                      blurDataURL={"$/"}
                      placeholder={"blur"}
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className={styles.faq}
            id={isActive ? styles.active : undefined}
          >
            <div className={styles.faqHeader}>
              <h3>Frequently Asked Questions</h3>
            </div>

            <div
              className={styles.q_wrapper}
              id={isActive ? styles.active : undefined}
            >
              {jsonData ? (
                <>
                  {jsonData.map(
                    (
                      item: {
                        question:
                          | string
                          | number
                          | boolean
                          | ReactElement<
                              any,
                              string | JSXElementConstructor<any>
                            >
                          | ReactFragment
                          | ReactPortal
                          | null
                          | undefined;
                        answer:
                          | string
                          | number
                          | boolean
                          | ReactElement<
                              any,
                              string | JSXElementConstructor<any>
                            >
                          | ReactFragment
                          | ReactPortal
                          | null
                          | undefined;
                      },
                      index: Key | null | undefined
                    ) => (
                      <FAQ key={index} index={index} item={item} />
                    )
                  )}
                </>
              ) : null}
            </div>
          </section>
          <section className={styles.waitG_w} id={isActive ? styles.active : undefined}>
            <div className={styles.w_hw}>
              <h3>Be the first to try Shopercase</h3>
              <p>
                Join the waitlist to experience and help us improve our early
                preview of Shopercase.
              </p>
              <div className={styles.jwfAf3c}>
                <button id={styles.juq}>
                  Join the waitlist <i className="fa-light fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className={styles.ocImg}>
              <Image
                src={"/screely-1682445815201.png"}
                alt={"helloworld"}
                width={800}
                height={500}
                blurDataURL={"$/"}
                placeholder={"blur"}
                unoptimized
              />
            </div>
          </section>
          <section className={styles.contact_wxi3} id={isActive ? styles.active : undefined}>
            <div className={styles.cnth}>
              <h3>Get in touch</h3>
              <p>
                Let&apos;s get connected! If you have any questions, please
                don&apos;t hesitate to reach out to us.
              </p>
            </div>
            <div className={styles.cntCard}>
              <div className={styles.cn_lft}>
                <div className={styles.cn_lft_hw3u}>
                  <h3>Have a question?</h3>
                  <p>
                    If you have any questions you would like to share with us,
                    please feel free to reach out to us on our social media
                    handles.
                  </p>
                </div>
                <div className={styles.btm}>
                  <Link href={"https://twitter.com/shopercase_inc"} target="blank">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link
                    href={"https://instagram.com/shopercase_inc"}
                    target="blank"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </div>
              </div>
              <div className={styles.cn_rgt}>
                <div className={styles.cn_rgt_img}>
                  <Image
                    src={"/wepik-export-20230425160108.png"}
                    alt={"helloworld"}
                    width={400}
                    height={400}
                    blurDataURL={"$/"}
                    placeholder={"blur"}
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </section>
          <footer className={styles.endFooter}>
            <div className={styles.fw_flx}>
              <div className={styles.fw_logo}>
                <Image src={'/icons/ShoperFrame.png'} alt={'helloworld'} width={50} height={50} blurDataURL={'$/'} placeholder={'blur'} unoptimized />
              </div>
              <div className={styles.gapLinks}>
                <div className={styles.order}>
                  <div className={styles.pr}><p>Product</p></div>
                  <div className={styles.fw_link}>
                    <Link href={'/'}>Features</Link>
                    <Link href={'/'}>AI</Link>
                  </div>
                </div>
                <div className={styles.order}>
                  <div className={styles.pr}><p>Resources</p></div>
                  <div className={styles.fw_link}>
                    <Link href={'/'}>Docs</Link>
                    <Link href={'/'}>Tutorials</Link>
                  </div>
                </div>
                <div className={styles.order}>
                  <div className={styles.pr}><p>Company</p></div>
                  <div className={styles.fw_link}>
                    <Link href={'/'}>Careers</Link>
                    <Link href={'/'}>Terms & Condtions</Link>
                    <Link href={'/'}>Privacy</Link>
                  </div>
                </div>
                <div className={styles.order}>
                  <div className={styles.pr}><p>Contact</p></div>
                  <div className={styles.fw_link}>
                    <Link href={'/contact'}>@shopercase_inc</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.fw_btm}>
              <div className={styles.copywright}>
                <p>&copy;2023 - Shopercase, Inc.</p>
              </div>
              <div className={styles.socials}>
                <Link href={'/'}><i className="fa-brands fa-twitter"></i></Link>
                <Link href={'/'}><i className="fa-brands fa-instagram"></i></Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
