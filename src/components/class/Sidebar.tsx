import React from "react";
import "../../styles/sidebar_style.css"
export function Sidebar({ active, setactive }: any) {
  return (
    <div id="sidebar" className={active ? "active" : "inactive"}>
      <div
        id="close"
        onClick={() => {
          setactive(false);
        }}
      >
        <i className="fa-regular fa-xmark"></i>
      </div>
      <div id="tex">
        <h5>Welcome to ShoperCase Web Application</h5>
        <h3>Upload, Purchase and Sell</h3>
      </div>
      <div id="btm">
        <h6>Are you following us on social media?</h6>
        <div className="cta">
          <div className="twitter">
            <a href="https://twitter.com">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
          <div className="facebook">
            <a href="https://www.facebook.com">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <div className="instagram">
            <a href="https://instagram.com">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <p>Copyright &copy; 2022 Shopercase</p>
      </div>
    </div>
  );
}
