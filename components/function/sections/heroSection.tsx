import Image from "next/image";
import Link from 'next/link'
export default function HeroSection({ styles }: any) {
  return (
    <section className={styles.main}>
      <div className={styles.main_cy_3s}>
        <h2>
          The platform you need to <br />{" "}
          <span className={styles.highlight_}>kindle your business</span>{" "}
        </h2>
        <p>
          Monetize anything online, fast and easy! <br /> Start profiting from
          your content and products with our efficient services. Try us today!
        </p>
        <div className={styles.jwBtn}>
          <button id={styles.join_w}>
            <Link href={"/join"}>
              Join the waitlist <i className="fa-light fa-arrow-right"></i>
            </Link>
          </button>
        </div>
      </div>
      <div className={styles.main_img}>
        <Image
          src={"/screely-1682466528075.png"}
          alt={"helloworld"}
          width={800}
          height={400}
          blurDataURL={"$/"}
          placeholder={"blur"}
          unoptimized
        />
      </div>
    </section>
  );
}
