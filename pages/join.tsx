import { useEffect, useState, LegacyRef, RefObject, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import jnn from "../styles/join.module.css";
import styles from "../styles/Home.module.css";
import PageHeader from "../components/function/header/pageHeader";
import AlertNotify from "../components/function/alert/alertNotify";
interface CheckboxChangeEvent {
  target: {
    checked: boolean;
  };
}
interface InputEvent {
  target: {
    value: string;
    classList: any;
  };
}
interface CaptchaRef {
  current:
    | {
        captcha: any | null;
        checked: boolean;
      }
    | any;
}
interface RequestVal {
  current:
    | {
        fNameVal: string | null;
        emailVal: string | null;
        value: string;
      }
    | any;
}
export default function WaitingListPage() {
  const [isCaptchaResolved, setIsCaptchaResolved] = useState(false);
  const [isActive, setisActive] = useState(false);
  const [isMeidaHActive, setIsMeidaHActive] = useState(false);
  const [isFirstCardActive, setIsFirstCardActive] = useState(true);
  const [isSecondCardActive, setIsSecondCardActive] = useState(false);
  const [message, setMessage] = useState("");
  const [isAlert, setIsAlert] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const captcha: CaptchaRef = useRef();
  const fNameVal: RequestVal = useRef();
  const emailVal: RequestVal = useRef();
  const handleCheckboxChange = (event: CheckboxChangeEvent) => {
    setIsCaptchaResolved(event.target.checked);
  };
  const handleSwipeCard = () => {
    setIsFirstCardActive(!isFirstCardActive);
    setIsSecondCardActive(!isSecondCardActive);
  };
  const checkIfInputisValid = (event: InputEvent) => {
    if (event.target.value === "") {
      console.log("isBlank");
      event.target.classList.add(jnn.invalid);
    } else {
      console.log("isNotBlank");
      event.target.classList.remove(jnn.invalid);
    }
  };
  const resolveCaptcha = () => {
    if (captcha.current !== null) {
      captcha.current.checked = false;
      console.log(captcha.current.checked);
    }
  };
  const performThreeActions = () => {
    handleSwipeCard();
    resolveCaptcha();
    setIsCaptchaResolved(false);
  };
  const submitRequest = async () => {
    try {
      const response = await fetch("http://localhost:8080/joinbeta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: fNameVal.current.value,
          email: emailVal.current.value,
        }),
      });
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setMessage(result.message);
        setIsAlert(true);
        setIsErr(false);
        setTimeout(() => {
          setMessage("");
          setIsAlert(false);
        }, 2500);
      } else {
        const result = await response.json();
        setMessage(result.message);
        setIsAlert(true);
        setIsErr(true);
        setTimeout(() => {
          setMessage("");
          setIsAlert(false);
          setIsErr(false);
        }, 2500);
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    isSecondCardActive ? console.log("active") : console.error("ERR");

    return () => {};
  }, [isSecondCardActive]);

  return (
    <>
      <Head>
        <title>Join Beta</title>
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
      <div className={jnn.JoinPage}>
        <PageHeader
          styles={styles}
          isActive={isActive}
          setIsMeidaHActive={setIsMeidaHActive}
          isMeidaHActive={isMeidaHActive}
        />
        <div className={jnn.cards}>
          <div
            className={jnn.card}
            id={isFirstCardActive ? jnn.active : undefined}
          >
            <div className={jnn.cardHeader}>
              <h3>Please review and provide your consent</h3>
              <p>
                After reviewing our{" "}
                <Link
                  href={
                    "https://shopercase.gitbook.io/shopercase/faqs/what-is-shopercase/terms-and-conditions"
                  }
                  target="blank"
                >
                  Terms and Conditions
                </Link>
                , click the checkbox to continue to the next stage.
              </p>
            </div>
            <div className={jnn.customCaptcha}>
              <input
                type="checkbox"
                name="customCaptcha"
                id={"captcha"}
                ref={captcha}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={"captcha"}>
                I agree with the terms and conditions
              </label>
            </div>
            <div className={jnn.Btn_cTA}>
              {isCaptchaResolved ? (
                <button id={jnn.continue} onClick={handleSwipeCard}>
                  Continue
                </button>
              ) : (
                <button id={jnn.continue} className={jnn.disabled} disabled>
                  Continue
                </button>
              )}
            </div>
          </div>
          <div
            className={jnn.card}
            id={isSecondCardActive ? jnn.active : undefined}
          >
            <div className={jnn.cardHeader}>
              <h3>Please provide the necessary information</h3>
              <p>Please fill the required information</p>
            </div>
            <div className={jnn.CardForm}>
              <div className={jnn.cardInput}>
                <input
                  type="text"
                  placeholder="Elon Musk"
                  className={jnn.invalid}
                  id="f-name"
                  autoComplete="off"
                  ref={fNameVal}
                  onChange={checkIfInputisValid}
                />
                <label htmlFor="f-name">Full Name</label>
              </div>
              <div className={jnn.cardInput}>
                <input
                  type="text"
                  placeholder="spacex@email.org"
                  className={jnn.invalid}
                  id="e-mail"
                  autoComplete="off"
                  ref={emailVal}
                  onChange={checkIfInputisValid}
                />
                <label htmlFor="e-mail">Email Address</label>
              </div>
            </div>
            <div className={jnn.cardDrpDwnContainer}>
              <div className={jnn.drpdwn_element}>
                <select name="" id="">
                  <option value="select an option" disabled>
                    Where did you hear about us
                  </option>
                  <option value="a friend">A friend</option>
                  <option value="google search">Google Search</option>
                  <option value="twitter">Twitter</option>
                  <option value="instagram">Instagram</option>
                </select>
              </div>
            </div>
            <div className={jnn.m_w3}>
              <button id={jnn.goBack} onClick={performThreeActions}>
                Go Back
              </button>
              <button id={jnn.saveChng} onClick={submitRequest}>
                Submit
              </button>
            </div>
          </div>
        </div>
        <footer className={jnn.Footer}>
          <div className={jnn._footer_cnt}>
            <div className={jnn._uxa}>
              <i className="fa-solid fa-fire"></i> Powered by{" "}
              <Link
                href={"https://shopercase.gitbook.io/shoperform-api/"}
                target="blank"
              >
                shoperform
              </Link>
            </div>
          </div>
        </footer>
        {isAlert ? <AlertNotify message={message} isErr={isErr} /> : null}
      </div>
    </>
  );
}
