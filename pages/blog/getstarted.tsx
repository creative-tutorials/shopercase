import str from "../../styles/started.module.css";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import { lazy, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// const Header = lazy(() => import("../../components/element/Header"));
import Header from "../../components/element/Header";
import OpenMenu from "../../components/element/openMenu";
export default function GetStartedBlog() {
  const [isOpen, setIsOpen] = useState(false);
  const pinnedBlog = "/blogs/pinned.png";
  const canvaQuery = "/blogs/Shopercase Query Design.png";
  const canvaInsert = "/blogs/Shopercase Insert Design.png";
  const canvaMetrics = "/blogs/Shopercase Track Analytics.png";
  const canvaSales = "/blogs/Shopercase Boost Sales.png";
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
                  <li>2 minutes read</li>
                </div>
              </div>
              <div className={str.blogHeader_Image}>
                <Image
                  src={pinnedBlog}
                  width={730}
                  height={450}
                  unoptimized
                  placeholder="blur"
                  blurDataURL={pinnedBlog}
                  alt="Picture of the author"
                  style={{ objectFit: "fill", borderRadius: "15px" }}
                />
              </div>
              <div className={str.blogContent}>
                <p id={str.intro}>
                  In this blog post we&apos; be looking on how to setup and use
                  Shopercase, We will learn what shopercase <br /> is and how to
                  get it setup in minutes. We will guide you through the key
                  features of Shopercase and <br /> provide step-by-step
                  instructions to help you make the most out of our platform.
                </p>
                <h2>1. Creating Your Shopercase Account</h2>
                <p id={str.heading_description}>
                  To begin your e-commerce journey with Shopercase, follow these
                  simple steps to create your account
                </p>
                <div className={str.exp_list}>
                  <ul>
                    <li>Visit the Shopercase website at www.shopercase.com.</li>
                    <li>
                      Click on the &#34;Sign Up&#34; button located at the top
                      right corner of the homepage.
                    </li>
                    <li>
                      Fill in the required information, such as your name, email
                      address, and password.
                    </li>
                    <li>Complete the verification process if prompted.</li>
                    <li>
                      Congratulations! You now have your very own Shopercase
                      account.
                    </li>
                  </ul>
                </div>
                <h2>2. Querying Products (Coming Soon)</h2>
                <div className={str.blogHeader_Image} id={str.blob}>
                  <Image
                    src={canvaQuery}
                    width={730}
                    height={450}
                    unoptimized
                    placeholder="blur"
                    blurDataURL={canvaQuery}
                    alt="Picture of the author"
                    style={{ objectFit: "fill", borderRadius: "15px" }}
                  />
                </div>
                <p id={str.heading_description}>
                  At Shopercase, we understand the importance of a comprehensive
                  product catalog. Soon, we will be <br /> launching the
                  querying feature that allows you to search and explore a vast
                  range of products. Stay <br />
                  tuned for updates and get ready to discover exciting products
                  to sell in your online store.
                </p>
                <h2>3. Showcasing Your Inventory</h2>
                <div className={str.blogHeader_Image} id={str.blob}>
                  <Image
                    src={canvaInsert}
                    width={730}
                    height={450}
                    unoptimized
                    placeholder="blur"
                    blurDataURL={canvaInsert}
                    alt="Picture of the author"
                    style={{ objectFit: "fill", borderRadius: "15px" }}
                  />
                </div>
                <p id={str.heading_description}>
                  To showcase your products effectively, follow these steps to
                  upload them to your Shopercase account
                </p>
                <div className={str.exp_list}>
                  <ul>
                    <li>Log in to your Shopercase account.</li>
                    <li>
                      Navigate to the dashboard and locate the
                      &#34;Inventory&#34; or &#34;Products&#34; section.
                    </li>
                    <li>
                      Fill in the required information, such as your name, email
                      address, and password.
                    </li>
                    <li>Complete the verification process if prompted.</li>
                    <li>
                      Congratulations! You now have your very own Shopercase
                      account.
                    </li>
                  </ul>
                </div>
                <h2>4. Track Your Performance (Coming Soon)</h2>
                <div className={str.blogHeader_Image} id={str.blob}>
                  <Image
                    src={canvaMetrics}
                    width={730}
                    height={450}
                    unoptimized
                    placeholder="blur"
                    blurDataURL={canvaMetrics}
                    alt="Picture of the author"
                    style={{ objectFit: "fill", borderRadius: "15px" }}
                  />
                </div>
                <p id={str.heading_description}>
                  To help you make data-driven decisions and optimize your
                  business strategy, Shopercase will soon <br />
                  introduce a robust metrics monitoring feature. This will allow
                  you to track key performance indicators, <br />
                  such as sales, conversion rates, and customer engagement. Stay
                  tuned for updates on this exciting
                  <br />
                  feature and gain valuable insights into your business.
                </p>
                <h2>5. Boosting Your Online Sales</h2>
                <div className={str.blogHeader_Image} id={str.blob}>
                  <Image
                    src={canvaSales}
                    width={730}
                    height={450}
                    unoptimized
                    placeholder="blur"
                    blurDataURL={canvaSales}
                    alt="Picture of the author"
                    style={{ objectFit: "fill", borderRadius: "15px" }}
                  />
                </div>
                <p id={str.heading_description}>
                  Now that you have your products uploaded and ready to go,
                  it&apos;s time to start selling! Here&apos;s how you can{" "}
                  <br />
                  leverage Shopercase to drive sales:
                </p>
                <div className={str.exp_list}>
                  <ul>
                    <li>
                      Share your unique Shopercase store URL with potential
                      customers.
                    </li>
                    <li>
                      Utilize social media platforms and other marketing
                      channels to promote your products.
                    </li>
                    <li>
                      Offer enticing discounts and promotions to attract
                      customers.
                    </li>
                    <li>
                      Ensure your product descriptions are detailed, accurate,
                      and appealing.
                    </li>
                    <li>
                      Respond promptly to customer inquiries and provide
                      excellent customer service.
                    </li>
                    <li>
                      Regularly analyze your sales data and adjust your
                      strategies accordingly.
                    </li>
                  </ul>
                </div>
                {/*  */}
                <div className={str.ending}>
                  <p id={str.heading_description}>
                    With Shopercase, selling your products and growing your
                    e-commerce business has never been easier!
                  </p>
                  <p id={str.heading_description}>
                    We hope this blog post has given you a comprehensive
                    overview of the key features of Shopercase and how to <br />
                    make the most of our platform. Stay tuned for more exciting
                    updates, tips, and tricks to help you succeed in the <br />{" "}
                    ever-evolving world of e-commerce.
                  </p>
                  <br />
                  <p id={str.heading_description}>
                    Happy selling with Shopercase!
                  </p>
                  <div id={str.code}>
                    Please note that the features mentioned as &apos;Coming
                    Soon&apos; are part of our official roadmap and will be
                    implemented <br />
                    in the future. We are actively working on these updates to
                    enhance the Shopercase platform. For the most accurate{" "}
                    <br />
                    and up-to-date information, please continue to follow our
                    official Shopercase website and feel free to reach out to
                    <br />
                    our support team if you have any questions or need further
                    assistance.
                  </div>
                  <div className={str.backButton}>
                    <Link href='/blog'>Go back</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isOpen && <OpenMenu setIsOpen={setIsOpen} />}
      </div>
    </>
  );
}


