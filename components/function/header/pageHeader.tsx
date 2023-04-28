import Image from "next/image";
import Link from "next/link";
interface PropsBuilder {
  styles: any;
  isActive: any;
  setIsMeidaHActive: any;
  isMeidaHActive: any;
}
export default function PageHeader({
  styles,
  isActive,
  setIsMeidaHActive,
  isMeidaHActive,
}: PropsBuilder) {
  return (
    <div className={styles.Header} id={isActive ? styles.active : undefined}>
      <div className={styles.header_content}>
        <div className={styles.logo}>
          <Image
            src={"/icons/ShoperFrame.png"}
            alt={"helloworld"}
            width={50}
            height={50}
            blurDataURL={"$/"}
            placeholder={"blur"}
            unoptimized
          />
        </div>
        <div className={styles.linkContent}>
          <Link href={"/features"}>Features</Link>
          <Link href={"/resources"}>Resources</Link>
          <Link href={"/community"}>Community</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
        <div
          className={styles.headerBtns}
          id={isActive ? styles.active : undefined}
        >
          <button id={styles.btn_alpha_login_rw}><Link href={'/join'}>Log In</Link></button>
          <button id={styles.btn_alpha_signuo_w2}><Link href={'/join'}>Get Started</Link></button>
        </div>
        <div className={styles.media}>
          {isMeidaHActive ? (
            <i
              className="fa-solid fa-xmark"
              onClick={() => setIsMeidaHActive(!isMeidaHActive)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-bars"
              onClick={() => setIsMeidaHActive(!isMeidaHActive)}
            ></i>
          )}
        </div>
      </div>
      {isMeidaHActive ? (
        <div className={styles.mediaH}>
          <div className={styles.m_linkContent}>
            <Link href={"/features"}>Features</Link>
            <Link href={"/resources"}>Resources</Link>
            <Link href={"/community"}>Community</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
          <div className={styles.m_headerBtns}>
            <button id={styles.btn_alpha_login_rw}><Link href={'/join'}>Log In</Link></button>
            <button id={styles.btn_alpha_signuo_w2}><Link href={'/join'}>Get Started</Link></button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
