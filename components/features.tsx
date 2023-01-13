import React from "react";
export function Features({styles}:any) {
  return <section id={styles.features}>
        <h1 id={styles.your_heading}>
          Unlock Your Potential with Our Solutions
        </h1>
        <div id={styles.features_card}>
          <div id={styles.card}>
            {
          /* icon */
        }
            <i className="fa-solid fa-chart-simple"></i>
            <h1>Optimize Your Workflow with Our Dashboard</h1>
            <p>
              Our Dashboard helps you streamline your workflows, allowing you to
              quickly and easily manage your projects and tasks. Our intuitive
              interface and powerful tools make it easy to stay organized and on
              top of your workload. With our Dashboard, you can save time,
              reduce errors, and increase productivity.
            </p>
          </div>
          <div id={styles.card}>
            {
          /* icon */
        }
            <i className="fa-sharp fa-solid fa-credit-card"></i>
            <h1>Streamline Your Checkout Process</h1>
            <p>
              Our Checkout Process simplifies the buying journey, providing an
              intuitive and hassle-free experience for your customers. From
              streamlined payment options to quick and easy order tracking, our
              checkout process is designed to help you save time and keep your
              customers happy.
            </p>
          </div>
          <div id={styles.card}>
            {
          /* icon */
        }
            <i className="fa-duotone fa-users"></i>
            <h1>Elevate Your Customer&apos;s Experience</h1>
            <p>
              Our Customer Experience platform helps you provide your customers
              with an engaging and personalized experience. With our platform,
              you can create a seamless experience across all channels, from
              personalized product recommendations to interactive customer
              support. Elevate your customers&apos; experience and increase
              satisfaction with our platform.
            </p>
          </div>
          <div id={styles.card}>
            {
          /* icon */
        }
            <i className="fa-sharp fa-solid fa-headset"></i>
            <h1>Unparalleled Support Around the Clock</h1>
            <p>
              We provide 24/7 customer support to ensure that your customers
              have the best possible experience. Our knowledgeable and friendly
              support team is available to answer any questions and guide your
              customers through the entire process, from pre-purchase to
              post-purchase. With our unparalleled support, you can rest assured
              that your customers are in good hands.
            </p>
          </div>
        </div>
      </section>;
}
  