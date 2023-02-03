import { getURL } from "./functions/getUrl";
import React from "react";
export function Main({ styles }: any) {
  const url:any = getURL();
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
    </section>
  );
}


