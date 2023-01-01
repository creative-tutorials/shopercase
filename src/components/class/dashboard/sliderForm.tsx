import slidcss from "../../../styles/sliderform.module.css";
import { useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import { ResetFormStateToDefault } from "../../../functions/ResetFormState";
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_PROJECTURL,
  import.meta.env.VITE_SUPABASE_PROJECT_ANON_KEY
);
export function SliderForm({ SliderFormActive, setSliderFormActive }: any) {
  const {
    fileRef,
    imageDataRef,
    nameRef,
    priceRef,
  }: { fileRef: any; imageDataRef: any; nameRef: any; priceRef: any } =
    usedRefValue();
  const auth_session: any = localStorage.getItem("auth-session");
  const parsedData = JSON.parse(auth_session);
  const HandleImageUpload = async () => {
    const file = fileRef.current.files[0];
    const { data, error } = await supabase.storage
      .from("uploads")
      .upload(`public/${file.name}`, file, {
        cacheControl: "3600",
        upsert: false,
      });
    if (!error) {
      alert("Image Uploaded Successfully");
    }
    /* Waiting for 2 seconds before it gets the public url of the image uploaded. */
    setTimeout(() => {
      async function getPublicURL() {
        const { data } = supabase.storage
          .from("uploads")
          .getPublicUrl(`public/${file.name}`);
        imageDataRef.current = data;
      }
      getPublicURL();
    }, 2000);
  };
  const HandleAddProduct = async () => {
    if (imageDataRef.current === undefined)
      return alert("Please select a file");
    try {
      const response = await fetch("http://localhost:8080/products/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: import.meta.env.VITE_API_KEY,
        },
        body: JSON.stringify({
          session_key: parsedData.session_key,
          body: {
            product_name: nameRef.current.value,
            product_price: priceRef.current.value,
            product_image: imageDataRef.current.publicUrl,
          },
        }),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        /* A function that resets the form state to default. */
        ResetFormStateToDefault(
          setSliderFormActive,
          nameRef,
          priceRef,
          imageDataRef
        );
      } else {
        const result = await response.json();
        alert(result.message);
      }
    } catch (err) {
      console.error(err);
    }
  };
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
                type="file"
                name="upload-image"
                id="upload-image"
                accept=".jpg, .png"
                hidden
                ref={fileRef}
                onChange={HandleImageUpload}
              />
              <label htmlFor="upload-image" id={slidcss.upload_btn}>
                Upload Image
              </label>
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
              <span>Product ID's are generated automatically</span>
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
                ref={nameRef}
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
                ref={priceRef}
              />
            </div>
          </div>
        </div>
      </div>
      <div id={slidcss.form_body_bt}>
        <button onClick={() => setSliderFormActive(false)}>Cancel</button>
        <button onClick={HandleAddProduct}>Add Product</button>
      </div>
    </div>
  );
}
function usedRefValue() {
  const fileRef: any = useRef();
  const nameRef: any = useRef();
  const priceRef: any = useRef();
  const imageDataRef: any = useRef();
  return { fileRef, imageDataRef, nameRef, priceRef };
}
