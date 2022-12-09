import { Toast } from "../class/Toast";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { StoreSession } from "../../functions/StoreSession";
import lign from "../../styles/loginstyle.module.css";
function SignUpComponent() {
  const FullName_input_value: any = useRef(),
    Email_input_value: any = useRef(),
    Password_input_value: any = useRef(),
    DOB_input_value: any = useRef(),
    age_storage: any = useRef(null);
  const [errorMessage, seterrorMessage] = useState(null),
    [toastisActive, settoastisActive] = useState(false);
  function CheckForAge() {
    const Bdate = DOB_input_value.current.value;
    const Bday = +new Date(Bdate);
    const result = +~~((Date.now() - Bday) / 31557600000);
    console.log("result", result);
    age_storage.current = result;
  }
  const HandleAuthentication = async () => {
    const fullName = FullName_input_value.current.value;
    const Email = Email_input_value.current.value;
    const Password = Password_input_value.current.value;
    if (age_storage.current == null) {
      return null;
    } else {
      try {
        const response = await fetch("http://localhost:8080/signup", {
          method: "POST",
          headers: {
            apikey: import.meta.env.VITE_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname: fullName,
            email: Email,
            password: Password,
            age: age_storage.current,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          StoreSession(result);
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
    }
  };
  return (
    <div id={lign.login_container}>
      <div className={lign.viewbx_wrapper}>
        <div className={lign.viewbx_header}>
          <h2>Signup 👋</h2>
          <p>We're glad to have you join us.</p>
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
            ref={Email_input_value}
          />
          <i className="fa-regular fa-envelope" id={lign.left}></i>
        </div>
        <div id={lign.input_wrapper}>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="enter password"
            autoComplete="off"
            ref={Password_input_value}
          />
          <i className="fa-regular fa-lock" id={lign.left}></i>
          <i className="fa-solid fa-eye" id={lign.right}></i>
        </div>
        <div id={lign.input_wrapper}>
          <input
            type="date"
            name="email"
            id="email"
            autoComplete="off"
            ref={DOB_input_value}
            onChange={CheckForAge}
          />
          <i className="fa-regular fa-calendar-days" id={lign.left}></i>
        </div>
        <div id={lign.button_wrapper}>
          <button onClick={HandleAuthentication}>
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
            <i className="fa-regular fa-circle-info"></i> Please read our terms
            & conditions before moving forward
          </p>
        </div>
      </div>
      <Toast errorMessage={errorMessage} toastisActive={toastisActive} />
    </div>
  );
}
export default SignUpComponent;
