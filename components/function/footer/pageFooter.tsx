import Image from 'next/image'
import Link from 'next/link'
export default function PageFooter({styles}:any) {
  return (
    <footer className={styles.endFooter}>
      <div className={styles.fw_flx}>
        <div className={styles.fw_logo}>
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
        <div className={styles.gapLinks}>
          <div className={styles.order}>
            <div className={styles.pr}>
              <p>Product</p>
            </div>
            <div className={styles.fw_link}>
              <Link href={"/"}>Features</Link>
              <Link href={"/"}>AI</Link>
            </div>
          </div>
          <div className={styles.order}>
            <div className={styles.pr}>
              <p>Resources</p>
            </div>
            <div className={styles.fw_link}>
              <Link href={"/"}>Docs</Link>
              <Link href={"/"}>Tutorials</Link>
            </div>
          </div>
          <div className={styles.order}>
            <div className={styles.pr}>
              <p>Company</p>
            </div>
            <div className={styles.fw_link}>
              <Link href={"/"}>Careers</Link>
              <Link href={"/"}>Terms & Condtions</Link>
              <Link href={"/"}>Privacy</Link>
            </div>
          </div>
          <div className={styles.order}>
            <div className={styles.pr}>
              <p>Contact</p>
            </div>
            <div className={styles.fw_link}>
              <Link href={"/contact"}>@shopercase_inc</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fw_btm}>
        <div className={styles.copywright}>
          <p>&copy;2023 - Shopercase, Inc.</p>
        </div>
        <div className={styles.socials}>
          <Link href={"https://twitter.com/shopercase_inc"}>
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link href={"https://instagram.com/shopercase_inc"}>
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}