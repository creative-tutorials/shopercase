import React from "react";
import ReactDOM from "react-dom/client";
import { Product } from "../components/client/Product";
export async function FetchProductsFromAPI() {
  /* Retrieving the session from localStorage. */
  const session: any = localStorage.getItem("auth-session");
  /* Parsing the session from localStorage. */
  const parsedSession = JSON.parse(session);
  /* Retrieving the session key from the parsed session. */
  const sessionKey = parsedSession.session_key;
  try {
    const response = await fetch(`http://localhost:8080/user/${sessionKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: import.meta.env.VITE_API_KEY,
      },
      body: JSON.stringify({
        email: parsedSession.email,
        password: parsedSession.password
      })
    });

    if (response.ok) {
      const result = await response.json();
      ReactDOM.createRoot(
        document.getElementById("products") as HTMLElement
      ).render(
        <React.StrictMode>
          <Product result={result} />
        </React.StrictMode>
      );
    }
    if (!response.ok) {
      const result = await response.json();
      alert(result.message);
    }
  } catch (err) {
    console.error(err);
  }
}
