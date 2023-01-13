import React from "react";
export function SignupPage({styles, Image}:any) {
  return (
    <section id={styles.signup}>
      <div id={styles.ponent}>
        <div id={styles.ourImg}>
          <Image
            src={"/app.png"}
            alt=""
            width={200}
            height={200}
            loading="lazy"
            placeholder="blur"
            blurDataURL="/app.png"
          />
        </div>
        <h1 id={styles.signup_text}>Shop Securely with Shopercase.</h1>
        <h1 id={styles.signup_text2}>Powered by Cutting-Edge Technology.</h1>
        <div id={styles.call_to_action}>
          <button id={styles.u73}>Sign Up Now!</button>
        </div>
      </div>
    </section>
  );
}
