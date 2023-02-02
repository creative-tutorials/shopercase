import React from "react";
export function Intergrate({ styles }: any) {
  return (
    <section id={styles.intx}>
      <h1 id={styles.int_text}>Integrate With Your Social Media</h1>
      <p id={styles.in_p}>
        Shopercase offers easy integration of social media accounts to
        streamline strategy and maximize engagement. Features include quick
        updates, engagement tracking, and insights monitoring.
      </p>
      <div id={styles.in_cards}>
        <div id={styles.in_cardco}>
          <div id={styles.icon}>
            <i className="bx bxl-facebook-circle"></i>
          </div>
          <h1>Integrate With Facebook</h1>
          <p>
            Shopercase offers seamless integration with Facebook, making it easy
            to manage social media presence. The integration enables posting
            updates, tracking customer engagement, and monitoring insights,
            streamlining social media strategy and increasing reach. With this
            integration, staying connected and maximizing engagement with
            customers is possible.
          </p>
        </div>
        <div id={styles.in_cardco}>
          <div id={styles.icon}>
            <i className="bx bxl-instagram-alt"></i>
          </div>
          <h1>Integrate With Instagram</h1>
          <p>
            Shopercase offers seamless Instagram integration to boost your
            social media presence. Quickly post updates, track customer
            engagement, and monitor insights with our integration. Streamline
            your social media strategy, reach more customers, and increase your
            reach with our integration to stay connected with your customers and
            maximize engagement.
          </p>
        </div>
        <div id={styles.in_cardco}>
          <div id={styles.icon}>
            <i className="bx bxl-tiktok"></i>
          </div>
          <h1>Integrate With Tiktok</h1>
          <p>
            Shopercase to soon offer TikTok integration, allowing quick and easy
            posting of updates, tracking of customer engagement and monitoring
            of insights. Integration streamlines social media strategy and
            maximizes reach, coming soon.
          </p>
        </div>
      </div>
    </section>
  );
}
