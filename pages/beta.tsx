import bt from "../styles/beta.module.css";
import { useState } from "react";
export default function BetaForm() {
  const [option, setoption] = useState("Select an Option");
  const [isdropdwnActive, setdropdwnActive] = useState(false);
  const handleChange = (data: any) => {
    setoption(data);
    setdropdwnActive(false);
  };
  const toggleDrpDwnMenu = () => {
    setdropdwnActive(prevState => !prevState);
  };  
  return (
    <div id={bt.formPage}>
      <div id={bt.state_container}>
        <div id={bt.state1}>
          <div id={bt.state1_header}>
            <h1>Welcome</h1>
            <p>
              Thank you for your interest in our e-commerce SaaS platform. We
              aim to provide a comprehensive solution for businesses seeking to
              enhance their online sales. Currently, we are in beta testing
              phase, working towards delivering the best possible product. Our
              team is dedicated to delivering top-notch support and service.
              Thank you for your understanding and support.
            </p>
          </div>
          <div id={bt.state1_button}>
            <button>Get Started</button>
          </div>
        </div>
        <div id={bt.state2}>
          <div id={bt.state2_form}></div>
          <div id={bt.state2_formHeader}>
            <h2>Sign Up</h2>
          </div>
          <div id={bt.state2_formFields}>
            <input type="text" placeholder="E-mail" id=" " />
            <input type="text" placeholder="Username" id=" " />
            <input type="text" placeholder="Country" id=" " />
            <p id={bt.state2_selectText} onClick={toggleDrpDwnMenu}>
              {option}{" "}
              {isdropdwnActive ? (
                <i className="fa-solid fa-chevron-up"></i>
              ) : (
                <i className="fa-solid fa-chevron-down"></i>
              )}
            </p>
            {isdropdwnActive ? (
              <div id={bt.state2_dropdwn}>
                <li onClick={() => handleChange("Google Search")}>
                  Google Search
                </li>
                <li onClick={() => handleChange("A Friend")}>A Friend</li>
                <li onClick={() => handleChange("Social Media")}>
                  Social Media
                </li>
              </div>
            ) : null}
          </div>
        </div>
        <div id={bt.state3}>
          <div id={bt.state3_playbook}>
            <div id={bt.state3_sucess_plu}>
            <i className="fa-sharp fa-solid fa-badge-check"></i>
            </div>
            <p>
              Thank you for applying to join our beta program. Your interest in
              our platform is greatly appreciated. Our team will review your
              application and notify you when the beta launch is ready. We look
              forward to working with you and providing you with an exceptional
              experience. Thank you for your support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
