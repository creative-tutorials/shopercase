import React from "react";
export function Footer({ styles, Image, Link }: any) {
  return (
    <footer id={styles.footer}>
      <div id={styles.fri}>
        <div id={styles.fl}>
          <div id={styles.fl_left}>
            <Image
              src={"/app.png"}
              alt="app_logo"
              width={100}
              height={100}
              loading="lazy"
              placeholder="blur"
              blurDataURL="/app.png"
            />
            <div id={styles.fl_uni}>
              <h3>Shopercase</h3>
            </div>
          </div>
          <div id={styles.fl_right}>
            <p id={styles.tx}>
              We Can&apos;t Wait to Welcome You to Shopercase!
            </p>
            <div id={styles.follow}>
              <div id={styles.fwl}>
                <p>Follow us on</p>
              </div>
              <div id={styles.fwr}>
                <Link href={process.env.NEXT_PUBLIC_TWITTERURL}>
                  <i className="bx bxl-twitter"></i>
                </Link>
                <Link href="/">
                  <i className="bx bxl-facebook-circle"></i>
                </Link>
                <Link href={process.env.NEXT_PUBLIC_LINKEDIN}>
                  <i className="bx bxl-linkedin-square"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id={styles.fr}>
          <h1 id={styles.letter}>Newsletter</h1>
          <p id={styles.lx}>
            Stay Up-to-Date with Shopercase – Sign Up for Our Newsletter!
          </p>
          <div id={styles.input}>
            <input type="text" placeholder="Enter your email" />
            <i className="bx bxs-send" id={styles.send}></i>
          </div>
        </div>
      </div>
      <div id={styles.copyright}>
        <span>&copy; 2022-2023 Shopercase - All rights reserved</span>
      </div>
    </footer>
  );
}
