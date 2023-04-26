import { useState, useRef } from "react";
import ctt from "../styles/contact.module.css";
import Head from "next/head";
import Link from "next/link";
export default function Contact() {
  const [message, setMessage] = useState("");
  const [isAlert, setIsAlert] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const nameRef:any = useRef();
  const emailRef:any = useRef();
  const messageRef:any = useRef();
  const submitForm = async () => {
    try {
      const response = await fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameRef.current.value,
          email: emailRef.current.value,
          message: messageRef.current.value,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setMessage(result.message);
        setIsAlert(true);
        setIsErr(false)
        setTimeout(() => {
          setMessage("");
          setIsAlert(false);
        }, 2500);
      }
      if (!response.ok) {
        const result = await response.json();
        console.log(result);
        setMessage(result.message);
        setIsAlert(true);
        setIsErr(true)
        setTimeout(() => {
          setMessage("");
          setIsAlert(false);
          setIsErr(false)
        }, 2500);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Head>
        <title>Contact Us - Shop smarter, not harder</title>
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
      <div className={ctt.contactPage}>
        <h1 className={ctt.title}>Contact Us</h1>
        <div className={ctt.contact_container}>
          <div className={ctt.contactForm}>
            <div className={ctt.input}>
              <input type="text" placeholder="Full Name" ref={nameRef} />
            </div>
            <div className={ctt.input}>
              <input
                type="text"
                placeholder="Enter email address"
                ref={emailRef}
              />
            </div>
            <div className={ctt.input}>
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                placeholder="Describe your issue"
                ref={messageRef}
              ></textarea>
            </div>
          </div>
          <div className={ctt.btn}>
            <button onClick={submitForm}>Send</button>
          </div>
        </div>
        <div className={ctt.info_z}>
          <i className="fa-solid fa-fire"></i> Powered by <Link href={'https://shopercase.gitbook.io/shoperform-api/'} target="blank">shoperform</Link>
        </div>
        {isAlert ? <div className={ctt.alertNotify} id={isErr ? ctt.alrtErr : undefined}>{message}</div> : null}
      </div>
    </>
  );
}
