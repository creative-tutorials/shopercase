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
      </Head>
      <body>
        <Main />
        <NextScript />
        
      </body>
    </Html>
  );
}
