import React from "react";
import { NextPage } from "next";
import newstyle from "../styles/notfound.module.css";
import Head from "next/head";
const Custom404: NextPage = () => {
  return (
    <>
     <Head>
        <title>404: This page could not be found</title>
        <meta
          name="description"
          content="Shop smarter, not harder - with the ultimate shopping destination, Shopercase!"
        />
        <meta
          property="og:title"
          content="Shop smarter, not harder - with the ultimate shopping destination, Shopercase!"
        />
        <meta
          property="og:description"
          content="Shop smarter, not harder - with the ultimate shopping destination, Shopercase!"
        />
        <meta property="og:url" content="https://snipcart.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={newstyle.pager}>
        <div className={newstyle.pagerwrapper}>
          <h1>404</h1>
          <p>This page could not be found.</p>
        </div>
      </div>
    </>
  );
};

export default Custom404;
