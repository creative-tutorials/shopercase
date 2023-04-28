import Image from "next/image";
import Link from 'next/link'
export default function ProductsSection({ styles, isActive }: any) {
  return (
    <section className={styles.pmi} id={isActive ? styles.active : undefined}>
      <div className={styles.moi}>
        <h3>Sell anything online</h3>
        <p>
          Maximize your sales potential. Create content, sell faster, and watch
          your profits skyrocket! 🚀
        </p>
      </div>
      <div className={styles._cards_wrapper}>
        <div className={styles.card}>
          <div className={styles.card_left}>
            <div className={styles.card_tp}>
              <h3>Digital Products</h3>
              <p>Create, and sell digital products right here on Shopercase</p>
            </div>
            <div className={styles.card_btm}>
              <button className={styles.ui_n}>
                <Link href={"/join"}>
                  Join the waitlist <i className="fa-light fa-arrow-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div className={styles.card_righ}>
            <div className={styles.ImgCard}>
              <Image
                src={"/submit.png"}
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
        <div className={styles.card}>
          <div className={styles.card_left}>
            <div className={styles.card_tp}>
              <h3>Physical Products</h3>
              <p>Create, and sell physical products right here on Shopercase</p>
            </div>
            <div className={styles.card_btm}>
              <button className={styles.ui_n}>
                <Link href={"/join"}>
                  Join the waitlist <i className="fa-light fa-arrow-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div className={styles.card_righ}>
            <div className={styles.ImgCard}>
              <Image
                src={"/stocks.png"}
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
        <div className={styles.card}>
          <div className={styles.card_left}>
            <div className={styles.card_tp}>
              <h3>Online Services</h3>
              <p>Create, and sell online services right here on Shopercase</p>
            </div>
            <div className={styles.card_btm}>
              <button className={styles.ui_n}>
                <Link href={"/join"}>
                  Join the waitlist <i className="fa-light fa-arrow-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div className={styles.card_righ}>
            <div className={styles.ImgCard}>
              <Image
                src={"/consultation.png"}
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
      </div>
    </section>
  );
}
