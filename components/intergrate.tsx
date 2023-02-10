import React from "react";
export function Intergrate({ styles }: any) {
  return (
    <section id={styles.intx}>
      <h1 id={styles.int_text}>Integrate With Your Social Media</h1>
      <p id={styles.in_p}>
        Social Media easy integration. <br />Streamline strategy, maximize engagement.
        Quick updates, track engagment., monitor insights.
      </p>
      <div id={styles.in_cards}>
        <div id={styles.in_cardco}>
          <div id={styles.icon}>
            <i className="bx bxl-facebook-circle"></i>
          </div>
          <h1>Integrate With Facebook</h1>
          <p>
            FB seamless integration. Effortless social media mgmt.
            Post, track, monitor all in one. Streamline strategy, boost reach.
          </p>
        </div>
        <div id={styles.in_cardco}>
          <div id={styles.icon}>
            <i className="bx bxl-instagram-alt"></i>
          </div>
          <h1>Integrate With Instagram</h1>
          <p>
            Insta seamless integration. Elevate social media presence.
            Quickly post, track, monitor. Streamline strategy, reach more.
          </p>
        </div>
        <div id={styles.in_cardco}>
          <div id={styles.icon}>
            <i className="bx bxl-tiktok"></i>
          </div>
          <h1>Integrate With Tiktok</h1>
          <p>
            TikTok coming soon. Quick, easy post, track, monitor.
            Streamline strategy, maximize reach. Get ready for it!
          </p>
        </div>
      </div>
    </section>
  );
}
