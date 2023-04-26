import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <!-- Font Awesome PRO CDN --> */}
        <link rel="icon" href="/icons/ShoperFrame.png" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v6.0.0-beta3/css/all.css"
        />
        {/* <!-- Boxicons CSS --> */}
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
        
      </body>
    </Html>
  );
}
