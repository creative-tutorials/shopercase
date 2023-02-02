import React from "react";
export function About({ styles }: any) {
  return (
    <section id={styles.about}>
      <h1 id={styles.about_heading}>About Us</h1>
      <span>Unlock eCommerce Potential Success</span>
      <p id={styles.paragraph_context}>
        Shopercase is dedicated to empowering eCommerce businesses with the
        tools for success. We offer tailored, user-friendly SaaS solutions for
        businesses of all sizes, from startups to enterprises. Our aim is to
        help businesses reach their full potential and achieve their goals.
        Partner with us to take your business to the next level.
      </p>
      <div id={styles.bottom}>
        <h1>Explore Shopercase&apos;s Core Features.</h1>
        <p id={styles.exp}>
          Shopercase offers a comprehensive feature set to enhance your SaaS
          experience, including analytics, reporting, automation, and
          integrations. Optimize your workflow, boost productivity, and reach
          your business goals with Shopercase&apos;s core features. Discover our
          capabilities and let us help you succeed.
        </p>
        <div id={styles.lists}>
          <div id={styles.list}>
            <div id={styles.icon}>
              <i className="fa-solid fa-chart-line-up"></i>
            </div>
            <h3>Powerful Analytics and Reporting Tools</h3>
            <p>
              At Shopercase, we&apos;re working hard to bring you powerful
              analytics and reporting tools. Stay tuned for our upcoming
              analytics and reporting tools - coming soon!
            </p>
          </div>
          <div id={styles.list}>
            <div id={styles.icon}>
              <i className="fa-solid fa-chart-network"></i>
            </div>
            <h3>Automated Workflows and Integrations</h3>
            <p>
              Streamline ecomm ops w/automated workflows, integrations. Fulfill
              orders, manage cust svc, inventory. Integrate store w/social
              media. Intuitive API for automating product addition.
            </p>
          </div>
          <div id={styles.list}>
            <div id={styles.icon}>
              <i className="fa-solid fa-swatchbook"></i>
            </div>
            <h3>Easy to Use Interface</h3>
            <p>
              Manage ecomm ops easily w/ intuitive interface. Easy navigation,
              drag-and-drop customization. Spend less time managing, focus on
              growing biz.
            </p>
          </div>
          <div id={styles.list}>
            <div id={styles.icon}>
              <i className="fa-solid fa-ballot-check"></i>
            </div>
            <h3>Scalable Solutions</h3>
            <p>
              Grow ecomm biz easily w/scalable solutions. Cloud-based platform,
              flexible architecture. Quick, easy customization for optimal
              performance.
            </p>
          </div>
          <div id={styles.list}>
            <div id={styles.icon}>
              <i className="fa-sharp fa-solid fa-headset"></i>
            </div>
            <h3>Fast and Reliable Support</h3>
            <p>
              Smooth ecomm ops w/fast, reliable support. 24/7 expert help.
              Intuitive help center. Peace of mind knowing store in good hands.
            </p>
          </div>
          <div id={styles.list}>
            <div id={styles.icon}>
              <i className="fa-duotone fa-shield"></i>
            </div>
            <h3>Comprehensive Security Measures</h3>
            <p>
              Showcase ecomm biz w/customizable profile. Intuitive tools,
              drag-and-drop interface. Engaging profile, build trust, establish
              brand.
            </p>
          </div>
          <div id={styles.list}>
            <div id={styles.icon}>
              <i className="fa-solid fa-square-user"></i>
            </div>
            <h3>Customizable profile</h3>
            <p>
              Showcase ecomm biz w/customizable profile. Intuitive tools,
              drag-and-drop interface. Engaging profile, build trust, establish
              brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
