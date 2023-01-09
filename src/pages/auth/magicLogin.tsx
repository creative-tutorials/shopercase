import "../../styles/magic.css";
import { Toast } from "../../components/class/Toast";
import { useState, useRef } from "react";
import { StoreSession } from "../../functions/StoreSession";
import { Stage1 } from "../../components/magicAuthComponent/stage1";
import { Stage2 } from "../../components/magicAuthComponent/stage2";
function MagicPinComponent() {
  const [stage, setstage] = useState(1);
  const email: any = useRef();
  const pin1: any = useRef(),
    pin2: any = useRef(),
    pin3: any = useRef(),
    pin4: any = useRef(),
    pin5: any = useRef(),
    pin6: any = useRef();
  const [errorMessage, seterrorMessage] = useState(null);
  const [toastisActive, settoastisActive] = useState(false);
  const ValidateMail = async () => {
    const emailvalue = email.current.value;
    try {
      const response = await fetch("http://localhost:8080/magic_link", {
        method: "POST",
        headers: {
          apikey: import.meta.env.VITE_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailvalue,
        }),
      });
      if (response.ok) {
        const result = await response.json();
        setstage(2);
        settoastisActive(true);
        setTimeout(() => {
          settoastisActive(false);
        }, 4500);
        seterrorMessage(result.message);
      }
      if (!response.ok) {
        const result = await response.json();
        settoastisActive(true);
        setTimeout(() => {
          settoastisActive(false);
        }, 4500);
        seterrorMessage(result.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const HandleSubmitingDetails = async () => {
    const pin1Value = pin1.current.value;
    const pin2Value = pin2.current.value;
    const pin3Value = pin3.current.value;
    const pin4Value = pin4.current.value;
    const pin5Value = pin5.current.value;
    const pin6Value = pin6.current.value;
    const joinedString = pin1Value.concat(
      pin2Value,
      pin3Value,
      pin4Value,
      pin5Value,
      pin6Value
    );
    try {
      const response = await fetch(
        "http://localhost:8080/magic_link/validate",
        {
          method: "POST",
          headers: {
            apikey: import.meta.env.VITE_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pin: joinedString,
          }),
        }
      );
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        StoreSession(result.auth);
        settoastisActive(true);
        setTimeout(() => {
          settoastisActive(false);
          setstage(1);
        }, 4500);
        seterrorMessage(result.message);
      }
      if (!response.ok) {
        const result = await response.json();
        settoastisActive(true);
        setTimeout(() => {
          settoastisActive(false);
        }, 4500);
        seterrorMessage(result.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div id="magic-container">
      <div id="magic-wrapper">
        {stage === 1 ? (
          <Stage1 email={email} ValidateMail={ValidateMail} />
        ) : null}
        {stage === 2 ? (
          <Stage2
            pin1={pin1}
            pin2={pin2}
            pin3={pin3}
            pin4={pin4}
            pin5={pin5}
            pin6={pin6}
            HandleSubmitingDetails={HandleSubmitingDetails}
          />
        ) : null}
        <Toast errorMessage={errorMessage} toastisActive={toastisActive} />
      </div>
    </div>
  );
}
export default MagicPinComponent;
