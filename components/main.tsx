import { getURL } from "./functions/getUrl";
import Image from "next/image";
import { useEffect, useState } from "react";
export function Main({ styles }: any) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const checkDarkMode = () => {
      const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      setIsDarkMode(darkModeMediaQuery.matches);
    };

    checkDarkMode();
    window.addEventListener("load", checkDarkMode);
    window.addEventListener("color-scheme-change", checkDarkMode);

    return () => {
      window.removeEventListener("load", checkDarkMode);
      window.removeEventListener("color-scheme-change", checkDarkMode);
    };
  }, []);
  const url: any = getURL();
  return (
    <section id={styles.main}>
      <div id={styles.c4_lc}>
        <h1>Unlock Your eCommerce Potential with Shopercase</h1>
        <p>
          Transform Your eCommerce Business with Shopercase - The Most
          Comprehensive, Easy-to-Use SaaS Solution
        </p>
        <button
          onClick={() => {
            window.location.href = url;
          }}
        >
          Sign up Now <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div id={styles.c4_op}>
        <Image
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
          src={isDarkMode ? "/Remake-Dark.png" : "/Remake-Light.png"}
          alt="Picture of featured testimonials"
          width={500}
          unoptimized
          height={500}
        />
      </div>
    </section>
  );
}
