import Link from "next/link";
import Image from "next/image";
export default function ContactSection({ styles, isActive }: any) {
  return (
    <section
      className={styles.contact_wxi3}
      id={isActive ? styles.active : undefined}
    >
      <div className={styles.cnth}>
        <h3>Get in touch</h3>
        <p>
          Let&apos;s get connected! If you have any questions, please don&apos;t
          hesitate to reach out to us.
        </p>
      </div>
      <div className={styles.cntCard}>
        <div className={styles.cn_lft}>
          <div className={styles.cn_lft_hw3u}>
            <h3>Have a question?</h3>
            <p>
              If you have any questions you would like to share with us, please
              feel free to reach out to us on our social media handles.
            </p>
          </div>
          <div className={styles.btm}>
            <Link href={"https://twitter.com/shopercase_inc"} target="blank">
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link href={"https://instagram.com/shopercase_inc"} target="blank">
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </div>
        </div>
        <div className={styles.cn_rgt}>
          <div className={styles.cn_rgt_img}>
            <Image
              src={"/wepik-export-20230425160108.png"}
              alt={"helloworld"}
              width={400}
              height={400}
              blurDataURL={"$/"}
              placeholder={"blur"}
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
