import { Link } from "react-router-dom";
import { Toast } from "../class/Toast";
import { useState, useRef } from "react";
import lign from "../../styles/loginstyle.module.css";
import { checkPswrdTypeState } from "../../functions/checkPswrdTypeState";
function LoginComponent() {
  const [errorMessage, seterrorMessage] = useState(null),
    [toastisActive, settoastisActive] = useState(false);
  const [isTypeText, setisTypeText] = useState(false);

  const Email: any = useRef(),
    Password: any = useRef();
  const CheckPswrdTypeState = checkPswrdTypeState(Password, setisTypeText);
  const HandleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          apikey: import.meta.env.VITE_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: Email.current.value,
          password: Password.current.value,
        }),
      });

      if (response.ok) {
        const result = await response.json();
      } else {
        const result = await response.json();
        settoastisActive(true);
        seterrorMessage(result.message);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div id={lign.login_container}>
      <div className={lign.viewbx_wrapper}>
        <div className={lign.viewbx_header}>
          <h2>Login 👋</h2>
          <p>Welcome back, please login to continue</p>
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
            className={isTypeText ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'}
            onClick={CheckPswrdTypeState}
            id={lign.right}
          ></i>
        </div>
        <div id={lign.button_wrapper}>
          <button onClick={HandleLogin}>
            Login <i className="fa-regular fa-arrow-right"></i>
          </button>
        </div>
        <div id={lign.pager}>
          <p>
            Don't have an account yet? <Link to={"/register"}>create one</Link>
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
export default LoginComponent;


