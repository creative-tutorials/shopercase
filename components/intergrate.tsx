import React from "react";
export function Intergrate({ styles }: any) {
  return (
    <section id={styles.intx}>
      <h1 id={styles.int_text}>Integrate With Your Social Media</h1>
      <p id={styles.in_p}>
        At Shopercase, we make it easy to integrate your social media accounts
        into our platform. With our social media integration, you can quickly
        and easily post updates to your accounts, track customer engagement, and
        monitor insights. Our integration allows you to streamline your social
        media strategy and maximize your engagement, giving you the tools you
        need to reach your customers and grow your business.
      </p>
      <div id={styles.in_cards}>
        <div id={styles.in_cardco}>
          <div id={styles.icon}>
            <i className="bx bxl-facebook-circle"></i>
          </div>
          <h1>Integrate With Facebook</h1>
          <p>
            Shopercase makes it easy to integrate with Facebook. With our
            Facebook integration, you can quickly and easily post updates, track
            customer engagement, and monitor insights. Our integration allows
            you to streamline your social media strategy, reach more customers,
            and increase your reach. With our integration, you can stay
            connected with your customers and maximize your engagement.
          </p>
        </div>
        <div id={styles.in_cardco}>
          <div id={styles.icon}>
            <i className="bx bxl-instagram-alt"></i>
          </div>
          <h1>Integrate With Instagram</h1>
          <p>
            Shopercase makes it easy to integrate with Instagram. With our
            Instagram integration, you can quickly and easily post updates,
            track customer engagement, and monitor insights. Our integration
            allows you to streamline your social media strategy, reach more
            customers, and increase your reach. With our integration, you can
            stay connected with your customers and maximize your engagement.
          </p>
        </div>
        <div id={styles.in_cardco}>
          <div id={styles.icon}>
            <i className="bx bxl-twitter"></i>
          </div>
          <h1>Integrate With Twitter</h1>
          <p>
            Shopercase makes it easy to integrate with Twitter. With our Twitter
            integration, you can quickly and easily post updates, track customer
            engagement, and monitor insights. Our integration allows you to
            streamline your social media strategy, reach more customers, and
            increase your reach. With our integration, you can stay connected
            with your customers and maximize your engagement.
          </p>
        </div>
        <div id={styles.in_cardco}>
          <div id={styles.icon}>
            <i className="bx bxl-tiktok"></i>
          </div>
          <h1>Integrate With Tiktok</h1>
          <p>
            At Shopercase, we&apos;re excited to soon offer our customers the
            ability to easily integrate with TikTok. Our integration will allow
            you to quickly and easily post updates, track customer engagement,
            and monitor insights. With our integration, you&apos;ll have the
            tools you need to streamline your social media strategy and maximize
            your reach. Stay tuned for our upcoming TikTok integration -{" "}
            <strong>coming soon!</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
