import { HideProductID } from "../../functions/HideProductID";
export function Product({ result }: any) {
  return (
    <div id="product-flex">
      {result.map(function (item: any, index: any) {
        HideProductID(item);
        return (
          <div id="items" key={index}>
            <div id="item-image">
              <img
                src={item.productImage}
                alt=""
                loading="lazy"
                style={{ objectFit: "cover" }}
                width={320}
                height={400}
              />
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
                  <button id="purchase">Purchase</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
