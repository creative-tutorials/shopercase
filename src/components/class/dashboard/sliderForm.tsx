import slidcss from "../../../styles/sliderform.module.css";
export function SliderForm({ SliderFormActive, setSliderFormActive }: any) {
  return (
    <div id={SliderFormActive ? slidcss.sliderForm : slidcss.hidden}>
      <div id={slidcss.form_header}>
        <span>Add Product</span>
        <p>Please input correctly the neccessary information</p>
      </div>
      <div id={slidcss.form_body}>
        <div id={slidcss.form_body_tp}>
          <div id={slidcss.tp_box}>
            <div id={slidcss.tp_bx_lf}>
              <span>Product Image</span>
            </div>
            <div id={slidcss.tp_bx_rt}>
              <input
                type="text"
                name="image_address"
                id="image_address"
                placeholder="Image Address"
                autoComplete="off"
              />
            </div>
          </div>
          <div id={slidcss.tp_box}>
            <div id={slidcss.tp_bx_lf}>
              <span>Product ID</span>
            </div>
            <div id={slidcss.tp_bx_rt}>
              <input
                type="text"
                name="product-id"
                id="product-id"
                placeholder="Product ID"
                autoComplete="off"
                readOnly
              />
            </div>
          </div>
          <div id={slidcss.tp_box}>
            <div id={slidcss.tp_bx_lf}>
              <span>Product Name</span>
            </div>
            <div id={slidcss.tp_bx_rt}>
              <input
                type="text"
                name="product-name"
                id="product-name"
                placeholder="Product Name"
                autoComplete="off"
              />
            </div>
          </div>
          <div id={slidcss.tp_box}>
            <div id={slidcss.tp_bx_lf}>
              <span>Product Name</span>
            </div>
            <div id={slidcss.tp_bx_rt}>
              <input
                type="text"
                name="product-price"
                id="product-price"
                placeholder="Product Price"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
      </div>
      <div id={slidcss.form_body_bt}>
        <button onClick={() => setSliderFormActive(false)}>Cancel</button>
        <button>Add Product</button>
      </div>
    </div>
  );
}
