import React from "react";
export function Features({ styles }: any) {
  return (
    <section id={styles.features}>
      <h1 id={styles.your_heading}>Unlock Your Potential with Our Solutions</h1>
      <div id={styles.features_card}>
        <div id={styles.card}>
          {/* icon */}
          <i className="fa-solid fa-chart-simple"></i>
          <h1>Optimize Your Workflow with Our Dashboard</h1>
          <p>
            Manage payments, track sales w/ Dashboard. Monitor analytics, track
            product performance, sales.
          </p>
        </div>
        <div id={styles.card}>
          {/* icon */}
          <i className="fa-sharp fa-solid fa-credit-card"></i>
          <h1>Streamline Your Checkout Process</h1>
          <p>
            Simplify buying journey w/ intuitive checkout process. Streamlined
            payments, easy order tracking. Save time, keep customers happy.
          </p>
        </div>
        <div id={styles.card}>
          {/* icon */}
          <i className="fa-sharp fa-solid fa-headset"></i>
          <h1>Unparalleled Support Around the Clock</h1>
          <p>
            24/7 customer support offered by Shopercase to ensure best
            experience for customers. Support team knowledgeable and friendly to
            assist with questions and guide through entire process. Unparalleled
            support gives peace of mind that customers are in good hands.
          </p>
        </div>
      </div>
    </section>
  );
}
