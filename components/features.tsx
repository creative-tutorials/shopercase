import React from "react";
export function Features({ styles }: any) {
  return (
    <section id={styles.features}>
      <h3 id={styles.your_heading1}>Features</h3>
      <h1 id={styles.your_heading}>Our Saas Features and Benefits</h1>
      <div id={styles.features_card}>
        <div id={styles.card}>
          {/* icon */}
          <i className="fa-sharp fa-solid fa-gears"></i>
          <h1>Product Management:</h1>
          <li>Upload and manage products with ease</li>
          <li>Add detailed descriptions, images, and pricing information</li>
          <li>Organize and categorize products for easy browsing</li>
        </div>
        <div id={styles.card}>
          {/* icon */}
          <i className="fa-sharp fa-solid fa-credit-card"></i>
          <h1>Order Processing</h1>
          <li>Quickly process customer orders</li>
          <li>Track order status from start to finish</li>
          <li>Receive updates on payment and shipping status</li>
        </div>
        <div id={styles.card}>
          {/* icon */}
          <i className="fa-solid fa-chart-line-up"></i>
          <h1>Sales Tracking:</h1>
          <li>Monitor sales performance in real-time</li>
          <li>View revenue, number of orders, and other key metrics</li>
          <li>Generate reports and insights to inform business decisions</li>
        </div>
        <div id={styles.card}>
          {/* icon */}
          <i className="fa-solid fa-users-gear"></i>
          <h1>Customer Management:</h1>
          <li>Keep track of customer information and purchasing habits</li>
          <li>Access order history for each customer</li>
          <li>Store and manage customer contact information</li>
        </div>
        <div id={styles.card}>
          {/* icon */}
          <i className="fa-duotone fa-scanner-touchscreen"></i>
          <h1>Intuitive Interface:</h1>
          <li>Navigate the platform with ease</li>
          <li>User-friendly interface for streamlined management</li>
          <li>Access all features and tools with minimal clicks</li>
        </div>
        <div id={styles.card}>
          {/* icon */}
          <i className="fa-solid fa-chart-simple"></i>
          <h1>Analytics Dashboard:</h1>
          <li>Gain valuable insights into business performance</li>
          <li>View detailed charts and graphs to track key metrics</li>
          <li>Make informed decisions based on real-time analytics data.</li>
        </div>
      </div>
    </section>
  );
}
