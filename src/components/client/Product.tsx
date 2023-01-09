export function Product({ result }: any) {
  
  const RouteToCheckOutPage = async () => {
    result.map(function (data: any, index: any) {
      localStorage.setItem("payment-cache", JSON.stringify(data));
      setTimeout(() => {
        window.location.pathname = "/checkout";
      }, 2000);
    });
  };
  return (
    <div id="product-flex">
      {result.map(function (item: any, index: any) {
        return (
          <div id="items" key={index} data-product-name={item.productName}>
            <div id="item-image">
              <div id="item-hover">
                <div id="buttons">
                  <button
                    id="add-to-cart"
                    onClick={() => {
                      console.log(item);
                    }}
                  >
                    <i className="fa-regular fa-cart-shopping"></i> Add to cart
                  </button>
                  <button id="purchase" onClick={RouteToCheckOutPage}>
                    Purchase
                  </button>
                </div>
              </div>
              <img src={item.productImage} alt="" loading="lazy" />
            </div>
            <div id="item-bottom">
              <div id="item-name">{item.productName}</div>
              <div id="item-price">{item.productPrice}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}


