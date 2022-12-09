import { Link } from "react-router-dom";
import lign from "../../styles/loginstyle.module.css";
function LoginComponent() {
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
        <div id={lign.button_wrapper}>
          <button>
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
    </div>
  );
}
export default LoginComponent;
