import React from "react";
import { useRef } from "react";
export function Filter() {
  const FilterInput: any = useRef();
  const HandleInputValueChange = () => {
    const inputValue = FilterInput.current.value.toLocaleLowerCase();
    SendInputValueDataToAPI(inputValue);
  };

  async function SendInputValueDataToAPI(inputValue: String) {
    /* Retrieving the session from localStorage. */
    const session: any = localStorage.getItem("auth-session");
    /* Parsing the session from localStorage. */
    const parsedSession = JSON.parse(session);
    /* Retrieving the session key from the parsed session. */
    const sessionKey = parsedSession.session_key;
    const filterProducts = document.querySelectorAll("#items");
    filterProducts.forEach((card:any) => {
      let filtername: any = card.getAttribute("data-product-name").toLocaleLowerCase();
      // const
      if (filtername.includes(inputValue)) {
        card.style.display = "flex"
      } else {
        card.style.display = "none"
      }
    });
    try {
      const response = await fetch(
        `http://localhost:8080/products/${sessionKey}/filter/${inputValue}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_API_KEY,
          },
        }
      );
      if (response.ok) {
        const result = await response.json();
        console.log(result);
      }
      if (!response.ok) {
        const result = await response.json();
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
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
          ref={FilterInput}
          placeholder="Enter Product name"
          onChange={HandleInputValueChange}
        />
      </div>
    </div>
  );
}
