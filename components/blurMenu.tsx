import React from "react";
import { getURL } from "./functions/getUrl";
export function BlurMenu({
  blurMenuActive,
  setBlurMenuActive,
  styles,
  Link,
}: any) {
  const url: any = getURL();
  return (
    <div className={blurMenuActive ? "blurMenu active" : "blurMenu inactive"}>
      <div id={"blur_close"} onClick={() => setBlurMenuActive(false)}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div id={"blurContent"}>
        <div id={"blurLinks"}>
          <Link href={"/"}>Home</Link>
          <Link href={`/#${styles.features}`}>Features</Link>
          <Link href={"/#blogs"}>Blog</Link>
          <Link href={"/#pricing"}>Pricing</Link>
          <Link href={"/#contact"}>Contact</Link>
        </div>
        <div
          id={"blurButton"}
          onClick={() => {
            window.location.href = url;
          }}
        >
          <button id={"blurbtn"}>Sign up</button>
        </div>
      </div>
    </div>
  );
}
