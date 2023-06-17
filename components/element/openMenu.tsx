import Link from "next/link";
import styles from "../../styles/Home.module.css"
import { Dispatch, SetStateAction } from "react";
interface typeProp {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export default function OpenMenu({ setIsOpen }:typeProp) {
  return (
    <div className={styles.openMenu}>
      <div className={styles.opClose}>
        <i className="fa-solid fa-xmark" onClick={() => setIsOpen(false)}></i>
      </div>
      <div className={styles.oLink}>
        <Link href="/docs">Docs</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </div>
      <div className={styles.ie3}>
        <Link href="https://github.com/creative-tutorials/shopercase">
          <i className="fa-solid fa-star fa-2xs"></i> Star us on GitHub
        </Link>
      </div>
    </div>
  );
}
