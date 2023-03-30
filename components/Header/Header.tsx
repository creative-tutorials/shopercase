import React from "react";
import { useRouter } from "next/router";
import { exportRouteToSignup } from "../functions/exportRouteToSignup";
import { useState } from 'react';
export function Header({ styles, Link, Image, setBlurMenuActive }: any) {
  const router = useRouter();
  const [ishidden, setishidden] = useState(true)
  const RouteToSignup = exportRouteToSignup(router);
  const showDropdwn = ()  => {
    setishidden(!ishidden)
  }
  return (
    <header id={styles.header}>
      <div id={styles.header_content}>
        <div id={styles.header_cl}>
          <div id={styles.logo}>
            <Image
              src={"/app2.png"}
              alt="shopercase"
              width={60}
              height={60}
              loading="lazy"
            />
            <h4>Shopercase</h4>
          </div>
          <div id={styles.links}>
            <Link href={"/"}>Home</Link>
            <Link href={`/#${styles.features}`}>Features</Link>
            <Link href={"/#blogs"}>Blog</Link>
            <Link href={"/#pricing"}>Pricing</Link>
            <Link href={"/#contact"}>Contact</Link>
          </div>
        </div>
        <div id={styles.header_cr}>
          <div id={styles.button}>
            <button id={styles.join_beta} onClick={RouteToSignup}>
              Sign Up
            </button>
          </div>
        </div>
        <div className={styles.headerDropdown}>
          <i className="fa-solid fa-grid" id={styles.icox} onClick={showDropdwn}></i>
          <div className={ishidden ? styles.dropdown : styles.show}>
            <div className={styles.mobileLink}>
              <Link href={"/"}>Home</Link>
              <Link href={`/#${styles.features}`}>Features</Link>
              <Link href={"/#blogs"}>Blog</Link>
              <Link href={"/#pricing"}>Pricing</Link>
              <Link href={"/#contact"}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
