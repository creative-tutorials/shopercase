import Image from "next/image";
import Link from "next/link";
export default function WaitingFeatured({ styles, isActive }: any) {
  return (
    <section
      className={styles.waitG_w}
      id={isActive ? styles.active : undefined}
    >
      <div className={styles.w_hw}>
        <h3>Be the first to try Shopercase</h3>
        <p>
          Join the waitlist to experience and help us improve our early preview
          of Shopercase.
        </p>
        <div className={styles.jwfAf3c}>
          <button id={styles.juq}>
            <Link href={"/join"}>
              Join the waitlist <i className="fa-light fa-arrow-right"></i>
            </Link>
          </button>
        </div>
      </div>
      <div className={styles.ocImg}>
        <Image
          src={"/screely-1682445815201.png"}
          alt={"helloworld"}
          width={800}
          height={500}
          blurDataURL={"$/"}
          placeholder={"blur"}
          unoptimized
        />
      </div>
    </section>
  );
}
