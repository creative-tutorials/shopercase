export function Product({ result }: any) {
  return (
    <div id="product-flex">
      {result.map(function (item: any, index: any) {
        item.productID = "*****"
        return (
          <div id="items" key={index}>
            <div id="item-image">
              <img
                src="h1-product-3-550x550.jpg"
                alt=""
                loading="lazy"
                width={300}
                height={300}
              />
            </div>
            <div id="item-name">{item.productName}</div>
            <div id="item-price">{item.productPrice}</div>
            <div id="buttons">
              <button id="add-to-cart">
                <i className="fa-regular fa-cart-shopping"></i> Add to cart
              </button>
              <button id="purchase">Purchase</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
