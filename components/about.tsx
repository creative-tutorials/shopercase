import React from "react";
export function About({ styles }: any) {
  return (
    <section id={styles.about}>
      <h1 id={styles.about_heading}>About Us</h1>
      <span>Unlock eCommerce Potential Success</span>
      <p id={styles.paragraph_context}>
        At Shopercase, we understand the power of eCommerce businesses and we
        are committed to providing the tools necessary for success. We offer
        comprehensive, easy-to-use SaaS solutions that are tailored to meet the
        needs of all types of businesses, from small startups to large
        enterprises. Our solutions are designed to help businesses maximize
        their potential and reach their goals. With Shopercase, you can take
        your business to the next level and experience the success you deserve.
      </p>
      <div id={styles.bottom}>
        <h1>Explore Shopercase&apos;s Core Features.</h1>
        <p id={styles.exp}>
          At Shopercase, we offer a comprehensive suite of features designed to
          help you get the most out of your SaaS. Our core features include
          everything from powerful analytics and reporting tools to automated
          workflows and integrations. With our core features, you can optimize
          your workflow, increase productivity, and achieve your business goals.
          Explore Shopercase&apos;s core features and see how we can help you
          succeed.
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
              Our automated workflows and integrations make it easy to
              streamline your ecommerce operations and extend your reach.
              Automate tasks such as order fulfillment, customer service, and
              inventory management. Integrate your store with social media
              platforms to manage your campaigns and increase engagement. Our
              intuitive API makes it easy to automate the addition of products
              to your store. With our automated workflows and integrations, you
              can save time and resources to become a more efficient and
              successful ecommerce business.
            </p>
          </div>
          <div id={styles.list}>
            <div id={styles.icon}>
              <i className="fa-solid fa-swatchbook"></i>
            </div>
            <h3>Easy to Use Interface</h3>
            <p>
              Our easy to use interface makes it simple for you to manage your
              ecommerce operations. Our intuitive design makes it easy to
              navigate through the various features and functions of your store.
              Our drag-and-drop tools let you customize your store quickly and
              easily. With our easy to use interface, you can spend less time
              managing your store and more time focusing on what matters most -
              growing your business.
            </p>
          </div>
          <div id={styles.list}>
            <div id={styles.icon}>
              <i className="fa-solid fa-ballot-check"></i>
            </div>
            <h3>Scalable Solutions</h3>
            <p>
              Our scalable solutions make it easy to grow your ecommerce
              business. With our cloud-based platform, you can easily scale your
              store up or down depending on your needs. Our flexible
              architecture allows for quick and easy customization to ensure
              your store is always running optimally. With our scalable
              solutions, you can ensure your store can handle any increase in
              traffic or demand and maximize your success.
            </p>
          </div>
          <div id={styles.list}>
            <div id={styles.icon}>
              <i className="fa-sharp fa-solid fa-headset"></i>
            </div>
            <h3>Fast and Reliable Support</h3>
            <p>
              Our fast and reliable support ensures that your ecommerce
              operations are running smoothly. Our knowledgeable team of experts
              is available 24/7 to help you with any questions or issues you may
              have. Our intuitive help center makes it easy to find the answers
              you need. With our fast and reliable support, you can have peace
              of mind knowing that your store is in good hands.
            </p>
          </div>
          <div id={styles.list}>
            <div id={styles.icon}>
              <i className="fa-duotone fa-shield"></i>
            </div>
            <h3>Comprehensive Security Measures</h3>
            <p>
              Our comprehensive security measures protect your ecommerce store
              and customer data. Our state-of-the-art encryption technology
              ensures that all your data is kept safe and secure. We also use
              two-factor authentication and access control to restrict access to
              sensitive data and protect your store from unauthorized access.
              Our proactive monitoring and response systems quickly detect and
              respond to any suspicious activity. With our comprehensive
              security measures, you can have peace of mind knowing that your
              store and customer data are safe.
            </p>
          </div>
          <div id={styles.list}>
            <div id={styles.icon}>
              <i className="fa-solid fa-square-user"></i>
            </div>
            <h3>Customizable profile</h3>
            <p>
              Our customizable profile makes it easy to showcase your ecommerce
              business. Our intuitive tools let you customize your profile to
              show off your products, services, and company culture. Our
              drag-and-drop interface makes it simple to create an engaging
              profile that stands out from the crowd. With our customizable
              profile, you can build trust and establish your brand to attract
              and engage customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
