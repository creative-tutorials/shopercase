import React from "react";
import ReactDOM from "react-dom/client";
import { Sidebar } from "../components/class/Sidebar";
import { Product } from "../components/client/Product";
import { Link } from "react-router-dom";
import "../styles/home.css";
import { useState, useEffect, useRef } from "react";
function HomePage() {
  const [active, setactive] = useState(false);
  const data: any = useRef(null);
  let [limit, setlimit] = useState(0);
  const setSidebarActive = () => {
    setactive(true);
  };
  useEffect(() => {
    limit++;
    limit > 1 ? console.log("limit reached") : FetchProductsFromAPI();
    async function FetchProductsFromAPI() {
      try {
        const response = await fetch("http://localhost:8080/admin/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_API_KEY,
          },
        });

        if (response.ok) {
          const result = await response.json();
          console.log(result);
          //   setdata(result);
          data.current = result;
          result.map((item: any, index: any) => {
            console.log(item, index);
            ReactDOM.createRoot(
              document.getElementById("products") as HTMLElement
            ).render(
              <React.StrictMode>
                <Product result={result} />
              </React.StrictMode>
            );
          });
        }
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

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
            <div id="extra-link">
              <i className="fa-regular fa-user"></i>
              <span id="login">Login</span>
            </div>
            <div id="extra-link">
              <i className="fa-regular fa-magnifying-glass"></i>
            </div>
            <div id="extra-link" onClick={setSidebarActive}>
              <i className="fa-regular fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
      <div id="page-body">
        <div id="products">
          {/* <div id="items">
            <div id="item-image">
              <img
                src="h1-product-3-550x550.jpg"
                alt=""
                loading="lazy"
                width={300}
                height={300}
              />
            </div>
            <div id="item-name">Lamp</div>
            <div id="item-price">$200</div>
            <div id="buttons">
              <button id="add-to-cart">
                <i className="fa-regular fa-cart-shopping"></i> Add to cart
              </button>
              <button id="purchase">Purchase</button>
            </div>
          </div> */}
        </div>
      </div>
      <Sidebar active={active} setactive={setactive} />
    </div>
  );
}
export default HomePage;
