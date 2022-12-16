import { DropDownInactive } from "../components/class/dropdown/DropDown-inactive";
import { DropDownActive } from "../components/class/dropdown/DropDown-active";
import { Sidebar } from "../components/class/Sidebar";
import { FetchProductsFromAPI } from "../functions/fetchproducts";
import { Link } from "react-router-dom";
import "../styles/home.css";
import { useState, useEffect, useRef } from "react";
function HomePage() {
  const [active, setactive] = useState(false);
  const [dropdwnActive, setdropdwnActive] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  let [limit, setlimit] = useState(0);
  const setSidebarActive = () => {
    setactive(true);
  };
  useEffect(() => {
    setlimit(limit++);
    limit > 1
      ? console.log("limit reached")
      : [FetchProductsFromAPI(), CheckIfUserIsLoggedIn()];
  }, []);

  const CheckIfUserIsLoggedIn = () => {
    const userAuthState = localStorage.getItem("auth-session");
    userAuthState ? setisLoggedIn(true) : setisLoggedIn(false);
  };
  const HandleLogout = () => {
    localStorage.removeItem("auth-session");
    setTimeout(() => {
      window.location.pathname = "/";
    }, 2000);
  };
  const ShowDropDwnMenu = () => {
      setdropdwnActive(true);
    },
    HideDropDwnMenu = () => {
      setdropdwnActive(false);
    };
  const HandleFilteringData = () => {
    try {
      alert("This feature is still under development");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className="HomePage">
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
              Shopper <span>case</span>
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
                <span id="login" style={{ cursor: "pointer" }}>
                  Login
                </span>
              </div>
            )}
            <div id="extra-link">
              <i className="fa-regular fa-magnifying-glass"></i>
            </div>
            <div id="extra-link" onClick={setSidebarActive}>
              <i className="fa-regular fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
      <div id="page-body" className={dropdwnActive ? 'pg-active' : 'pg-inactive'}>
        <div id="filter">
          <div id="filter_tabs">
            <span className="all-filter" data-filter="all">
              All
            </span>
            <span className="instruments" data-filter="instruments">
              instruments
            </span>
            <span className="music" data-filter="music">
              music
            </span>
            <span className="home-appliance" data-filter="home-appliance">
              Home Appliance
            </span>
          </div>
          <div id="filter-search">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Product name"
              onChange={HandleFilteringData}
            />
          </div>
        </div>
        <div id="products"></div>
      </div>
      <Sidebar active={active} setactive={setactive} />
    </div>
  );
}
export default HomePage;
