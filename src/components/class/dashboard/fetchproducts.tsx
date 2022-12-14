export function FecthProductData({ result, dshstyle }: any) {
  return (
    <>
      {result.map(function (item: any, index: any) {
        return (
          <div id={dshstyle.dh4} key={index}>
            <span>{item.productID}</span>
            <span>{item.productName}</span>
            <span>{item.productPrice}</span>
            <span>
              <i className="fa-regular fa-trash"></i>
            </span>
          </div>
        );
      })}
    </>
  );
}
