import React from "react";
import { getURL } from "./functions/getUrl";
export function SignupPage({ styles, Image }: any) {
  const url: any = getURL();
  return (
    <section id={styles.signup}>
      <div id={styles.ponent}>
        <div id={styles.ourImg}>
          <Image
            src={"/app2.png"}
            alt=""
            width={200}
            height={200}
            loading="lazy"
            placeholder="blur"
            blurDataURL="/app2.png"
          />
        </div>
        <h1 id={styles.signup_text}>Shop Securely with Shopercase.</h1>
        <h1 id={styles.signup_text2}>Powered by Cutting-Edge Technology.</h1>
        <div id={styles.call_to_action}>
          <button
            id={styles.u73}
            onClick={() => {
              window.location.href = url;
            }}
          >
            Sign Up Now!
          </button>
        </div>
      </div>
    </section>
  );
}
