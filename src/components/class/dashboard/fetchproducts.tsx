import { useState } from "react";
export function FecthProductData({ result, dshstyle }: any) {
  return (
    <>
      {result.map(function (item: any, index: any) {
        return (
          <div id={dshstyle.dh4} key={index}>
            <span>{item.productID}</span>
            <span>{item.productName}</span>
            <span>{item.productPrice}</span>
            <span id="action-btn">
              <i className="fa-regular fa-trash-can"></i>
            </span>
          </div>
        );
      })}
    </>
  );
}
