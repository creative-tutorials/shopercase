import React from "react";
import { Link } from "react-router-dom";
import { DropDownInactive } from "../dropdown/DropDown-inactive";
import { DropDownActive } from "../dropdown/DropDown-active";
export function Header({
  isLoggedIn,
  ShowDropDwnMenu,
  dropdwnActive,
  HideDropDwnMenu,
  HandleLogout,
  setSidebarActive,
}: any) {
  return (
    <div className="col-header">
      <div id="col-header-flex">
        <div className="col-header-links">
          <div id="link-wrapper">
            <Link to="/">Home</Link>
          </div>
          <div id="link-wrapper">
            <Link to="/">Shop</Link>
          </div>
          <div id="link-wrapper">
            <Link to="/">About</Link>
          </div>
          <div id="link-wrapper">
            <Link to="/">Blog</Link>
          </div>
          <div id="link-wrapper">
            <Link to="/">Contact</Link>
          </div>
        </div>
        <div id="header-title">
          <h3>
            Shoper <span>case</span>
          </h3>
        </div>
        <div id="col-extra-header-links">
          <div id="extra-link">
            <i className="fa-regular fa-heart"></i>
            <span id="numb">(0)</span>
          </div>
          <div id="extra-link">
            <i className="fa-regular fa-cart-shopping"></i>
            <span id="numb">($0)</span>
          </div>
          {isLoggedIn ? (
            <div id="extra-link">
              <i className="fa-regular fa-user" onClick={ShowDropDwnMenu}></i>
              {dropdwnActive ? (
                <DropDownActive
                  HideDropDwnMenu={HideDropDwnMenu}
                  HandleLogout={HandleLogout}
                />
              ) : (
                <DropDownInactive
                  HideDropDwnMenu={HideDropDwnMenu}
                  HandleLogout={HandleLogout}
                />
              )}
            </div>
          ) : (
            <div id="extra-link">
              <i className="fa-regular fa-user"></i>
              <span
                id="login"
                style={{
                  cursor: "pointer",
                }}
              >
                Login
              </span>
            </div>
          )}
          <div id="extra-link">
            <i className="fa-solid fa-moon"></i>
          </div>
          <div id="extra-link" onClick={setSidebarActive}>
            <i className="fa-regular fa-bars"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
