import { Toast } from "../../components/class/Toast";
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreSession } from "../../functions/StoreSession";
import lign from "../../styles/loginstyle.module.css";
import { checkPswrdTypeState } from "../../functions/checkPswrdTypeState";
import { CheckIfDeviceIsSupported } from "../../functions/CheckDeviceSupport";
function SignUpComponent() {
  let [limit, setlimit] = useState(0);
  const [stage, setstage] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    setlimit(limit++);
    limit > 1 ? null : CheckIfDeviceIsSupported();
  }, []);
  const FullName_input_value: any = useRef(),
    Email: any = useRef(),
    Password: any = useRef();

  const pin1: any = useRef(),
    pin2: any = useRef(),
    pin3: any = useRef(),
    pin4: any = useRef(),
    pin5: any = useRef(),
    pin6: any = useRef();

  const [errorMessage, seterrorMessage]: any = useState(null),
    [toastisActive, settoastisActive] = useState(false);

  const [isTypeText, setisTypeText] = useState(false);
  const CheckPswrdTypeState = checkPswrdTypeState(Password, setisTypeText);
  const signInWithMagicLink = async () => {
    navigate("/magic-login");
  };
  const HanldeSignupFormRequest = async () => {
    const usernameValue = FullName_input_value.current.value;
    const EmailValue = Email.current.value;
    const PasswordValue = Password.current.value;
    try {
      const response = await fetch("http://localhost:8080/create-account", {
        method: "POST",
        headers: {
          apikey: import.meta.env.VITE_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameValue,
          email: EmailValue,
          password: PasswordValue,
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
      } else {
        const result = await response.json();
        settoastisActive(true);
        setTimeout(() => {
          settoastisActive(false);
        }, 4500);
        seterrorMessage(result.message);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const HandleVerificationRequest = async () => {
    const joinedString = pin1.current.value.concat(
      pin2.current.value,
      pin3.current.value,
      pin4.current.value,
      pin5.current.value,
      pin6.current.value
    );
    try {
      const response = await fetch(
        "http://localhost:8080/create-account/validate",
        {
          method: "POST",
          headers: {
            apikey: import.meta.env.VITE_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            reqOTP: joinedString,
          }),
        }
      );
      if (response.ok) {
        const result = await response.json();
        StoreSession(result);

        settoastisActive(true);
        setTimeout(() => {
          settoastisActive(false);
          setstage(1);
        }, 4500);
        seterrorMessage("Account created Successfully");
      }
      if (!response.ok) {
        const result = await response.json();
        settoastisActive(true);
        setTimeout(() => {
          settoastisActive(false);
        }, 4500);
        seterrorMessage(result.message);
      }
    } catch (err) {}
  };
  return (
    <div id={lign.login_container}>
      {stage === 1 ? (
        <div className={lign.viewbx_wrapper}>
          <div className={lign.viewbx_header}>
            <h2>Signup 👋</h2>
            <p>We're glad to have you join us.</p>
          </div>
          <div id={lign.magicLink_wrapper}>
            <button
              id={lign.magicLink_OAuthButton}
              onClick={signInWithMagicLink}
            >
              <i className="fa-duotone fa-wand-magic-sparkles"></i>
              <span id={lign.mgtxt}>Continue with Magic Login</span>
            </button>
          </div>
          <div id={lign.input_wrapper}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="enter your full name"
              autoComplete="off"
              ref={FullName_input_value}
            />
            <i className="fa-regular fa-user" id={lign.left}></i>
          </div>
          <div id={lign.input_wrapper}>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="enter your email address"
              autoComplete="off"
              ref={Email}
            />
            <i className="fa-regular fa-envelope" id={lign.left}></i>
          </div>
          <div id={lign.input_wrapper}>
            <input
              type={isTypeText ? "text" : "password"}
              name="password"
              id="password"
              placeholder="enter password"
              autoComplete="off"
              ref={Password}
            />
            <i className="fa-regular fa-lock" id={lign.left}></i>
            <i
              className={
                isTypeText ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"
              }
              onClick={CheckPswrdTypeState}
              id={lign.right}
            ></i>
            <Toast errorMessage={errorMessage} toastisActive={toastisActive} />
          </div>
          <div id={lign.button_wrapper}>
            <button onClick={HanldeSignupFormRequest}>
              Signup <i className="fa-regular fa-arrow-right"></i>
            </button>
          </div>
          <div id={lign.pager}>
            <p>
              Do you already have an account?{" "}
              <Link to={"/login"}>continue using it</Link>
            </p>
          </div>
          <div id={lign.ifo}>
            <p>
              <i className="fa-regular fa-circle-info"></i> Please read our
              terms & conditions before proceeding forward
            </p>
          </div>
        </div>
      ) : null}
      {stage === 2 ? (
        <div id={lign.pin_box_container}>
          <h2>Let's Complete What you've Started 😸</h2>
          <div id={lign.pinBxInput}>
            <input
              type="text"
              name="pin1"
              id="pin1"
              maxLength={1}
              ref={pin1}
              autoFocus
            />
            <input type="text" name="pin2" id="pin2" maxLength={1} ref={pin2} />
            <input type="text" name="pin3" id="pin3" maxLength={1} ref={pin3} />
            <input type="text" name="pin4" id="pin4" maxLength={1} ref={pin4} />
            <input type="text" name="pin5" id="pin5" maxLength={1} ref={pin5} />
            <input type="text" name="pin6" id="pin6" maxLength={1} ref={pin6} />
          </div>
          <div id={lign.pinBxButton}>
            <button onClick={HandleVerificationRequest}>Submit</button>
          </div>
          <Toast errorMessage={errorMessage} toastisActive={toastisActive} />
        </div>
      ) : null}
    </div>
  );
}
export default SignUpComponent;
