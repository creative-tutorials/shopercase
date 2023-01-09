import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect, useRef } from "react";
import { FecthProductData } from "./fetchproducts";
export function BodyComponent({ dshstyle, setSliderFormActive }: any) {
  const [isrendered, setisrendered] = useState(false);
  const AddProduct = () => {
    setSliderFormActive(true);
  };
  const fetchproductsdata = async () => {
    /* Retrieving the session from localStorage. */
    const session: any = localStorage.getItem("auth-session");
    /* Parsing the session from localStorage. */
    const parsedSession = JSON.parse(session);
    /* Retrieving the session key from the parsed session. */
    const sessionKey = parsedSession.session_key;
    try {
      const response = await fetch(`http://localhost:8080/products/${sessionKey}/watch`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          apikey: import.meta.env.VITE_API_KEY,
        },
      });

      if (response.ok) {
        const result = await response.json();
        ReactDOM.createRoot(
          document.getElementById(dshstyle.dh4_container) as HTMLElement
        ).render(
          <React.StrictMode>
            <FecthProductData result={result} dshstyle={dshstyle} />
          </React.StrictMode>
        );
      }
    } catch (err) {
      console.error(err);
    }
  };
  let current = 0;
  useEffect(() => {
    current++;
    current > 1 ? fetchproductsdata() : null;
  }, []);
  return (
    <div id={dshstyle.dashboard_body}>
      <div id={dshstyle.dtp}>
        <h4>Admin Dashboard</h4>
        <div id={dshstyle.action_component}>
          <div id={dshstyle.input_}>
            <input
              type="text"
              name="search field"
              id="search field"
              placeholder="Search by product name"
            />
          </div>
          <div id={dshstyle.add_product}>
            <button data-action="Add Product" onClick={AddProduct}>
              <i className="fa-regular fa-plus"></i> Add Product
            </button>
          </div>
        </div>
      </div>
      <div id={dshstyle.dbt}>
        <div id={dshstyle.ch3}>
          <span>Product ID</span>
          <span>Product Name</span>
          <span>Price</span>
          <span>Actions</span>
        </div>
        <div id={dshstyle.dh4_container}></div>
      </div>
    </div>
  );
}
