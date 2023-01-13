import React from "react";
export function Header({ styles, Link, Image }: any) {
  return (
    <header id={styles.header}>
      <div id={styles.header_content}>
        <div id={styles.header_cl}>
          <div id={styles.logo}>
            <Image
              src={"/app.png"}
              alt="shopercase"
              width={60}
              height={60}
              loading="lazy"
            />
            <h4>Shopercase</h4>
          </div>
        </div>
        <div id={styles.header_cr}>
          <div id={styles.links}>
            <Link href={"/"}>Home</Link>
            <Link href={`/#${styles.about}`}>About</Link>
            <Link href={`/#${styles.features}`}>Features</Link>
            <Link href={"/#blogs"}>Blog</Link>
            <Link href={"/#pricing"}>Pricing</Link>
            <Link href={"/#contact"}>Contact</Link>
          </div>
          <div id={styles.button}>
            <button id={styles.join_beta}>Join Beta</button>
          </div>
        </div>
      </div>
    </header>
  );
}
