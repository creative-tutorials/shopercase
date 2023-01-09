import checkCSS from "../../styles/checkout.module.css";
import { Toast } from "../../components/class/Toast";
import { useState, useRef } from "react";
function CheckOutPage() {
  const paymentStorage = localStorage.getItem("payment-cache");
  const [errorMessage, seterrorMessage] = useState(null);
  const [toastisActive, settoastisActive] = useState(false);

  const emailAddressField: any = useRef();
  const fullNameField: any = useRef();
  const phoneNumberField: any = useRef();

  const HandlePaymentRequest = async () => {
    const session: any = localStorage.getItem("auth-session");
    const parsedSession = JSON.parse(session);

    const PaymentCacheStorage: any = localStorage.getItem("payment-cache");
    const parsedData = JSON.parse(PaymentCacheStorage);

    const emailValue = emailAddressField.current.value;
    const fullNameValue = fullNameField.current.value;
    const phoneNumberValue = phoneNumberField.current.value;
    try {
      const response = await fetch(
        `http://localhost:8080/products/request/${parsedData.productID}/${parsedSession.session_key}`,
        {
          method: "POST",
          headers: {
            apikey: import.meta.env.VITE_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailValue,
            full_name: fullNameValue,
            phone_number: phoneNumberValue,
          }),
        }
      );
      if (response.ok) {
        const result = await response.json();
        settoastisActive(true);
        setTimeout(() => {
          settoastisActive(false);
        }, 4500);
        seterrorMessage(result.message);
      }
      if (!response.ok) {
        const result = await response.json();
        console.log(result);
        settoastisActive(true);
        setTimeout(() => {
          settoastisActive(false);
        }, 4500);
        seterrorMessage(result.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div id={checkCSS.checkout_container}>
      <div id={checkCSS.checkout_wrapper}>
        <div id={checkCSS.wrap_header}>
          <h4>Payment details</h4>
        </div>
        <div id={checkCSS.fields_box}>
          <div id={checkCSS.input_field}>
            <label htmlFor="email address">Email address</label>
            <input
              type="text"
              name="email address"
              id="email address"
              placeholder="johndoe@mockmail.us"
              ref={emailAddressField}
            />
          </div>
          <div id={checkCSS.input_field}>
            <label htmlFor="full name">Full Name</label>
            <input
              type="text"
              name="full name"
              id="full name"
              placeholder="John Doe"
              ref={fullNameField}
            />
          </div>
          <div id={checkCSS.input_field}>
            <label htmlFor="phone number">Phone number</label>
            <input
              type="text"
              name="phone number"
              id="phone number"
              placeholder="+86 (825) 629-1358"
              ref={phoneNumberField}
            />
            <span id={checkCSS.phone_info}>
              <i className="fa-solid fa-circle-info"></i> WhatsApp number only
            </span>
            <Toast errorMessage={errorMessage} toastisActive={toastisActive} />
          </div>
        </div>
        <div id={checkCSS.cost_wrapper}>
          <div id={checkCSS.cw_left}>
            <p>Cash</p>
          </div>
          <div id={checkCSS.cw_right}>
            <h4></h4>
          </div>
        </div>
        <div id={checkCSS.button_wrapper}>
          <button id={checkCSS.payment_button} onClick={HandlePaymentRequest}>
            <i className="fa-duotone fa-credit-card"></i> Make Payment
          </button>
        </div>
      </div>
    </div>
  );
}
export default CheckOutPage;
