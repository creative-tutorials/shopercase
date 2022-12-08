import React from "react";
import ReactDOM from "react-dom/client";
import { Product } from "../components/client/Product";
export async function FetchProductsFromAPI() {
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
