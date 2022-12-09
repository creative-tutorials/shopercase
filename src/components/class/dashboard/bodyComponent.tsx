import { useState } from "react";
export function BodyComponent({ dshstyle, setSliderFormActive }: any) {
  const AddProduct = () => {
    setSliderFormActive(true);
  };
  return (
    <div id={dshstyle.dashboard_body}>
      <div id={dshstyle.dtp}>
        <h4>Products</h4>
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
        <div id={dshstyle.dh4_container}>
          <div id={dshstyle.dh4}>
            <span>01234</span>
            <span>Macbook Air</span>
            <span>$200</span>
            <span>
              <i className="fa-regular fa-trash"></i>
            </span>
          </div>
          <div id={dshstyle.dh4}>
            <span>01234</span>
            <span>Macbook Air</span>
            <span>$200</span>
            <span>
              <i className="fa-regular fa-trash"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
