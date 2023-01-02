export function Product({ result }: any) {
  const HandlePurchase = () => {
    result.map(function (item: any, index: any) {
      FirePurchaseAPI(item);
    });
    async function FirePurchaseAPI(item: any) {
      const session_token: any = localStorage.getItem("auth-session");
      const parsedData = JSON.parse(session_token);
      try {
        const response = await fetch(
          `http://localhost:8080/products/request/${item.productID}/${parsedData.session_key}`,
          {
            method: "POST",
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
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <div id="product-flex">
      {result.map(function (item: any, index: any) {
        return (
          <div id="items" key={index}>
            <div id="item-image">
              <div id="item-hover">
                <div id="item-name">{item.productName}</div>
                <div id="item-price">{item.productPrice}</div>
                <div id="buttons">
                  <button
                    id="add-to-cart"
                    onClick={() => {
                      console.log(item);
                    }}
                  >
                    <i className="fa-regular fa-cart-shopping"></i> Add to cart
                  </button>
                  <button id="purchase" onClick={HandlePurchase}>
                    Purchase
                  </button>
                </div>
              </div>
              <img src={item.productImage} alt="" loading="lazy" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
