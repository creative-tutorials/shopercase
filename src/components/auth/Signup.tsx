import { Link } from "react-router-dom";
import lign from "../../styles/loginstyle.module.css";
function SignUpComponent() {
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
          />
          <i className="fa-regular fa-calendar-days" id={lign.left}></i>
        </div>
        <div id={lign.button_wrapper}>
          <button>
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
    </div>
  );
}
export default SignUpComponent;
