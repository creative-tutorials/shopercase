/**
 * Reset the form state to default after 5 seconds
 * @param {any} setSliderFormActive - any,
 * @param {any} nameRef - value of the productName,
 * @param {any} priceRef - value of the productPrice;
 * @param {any} imageDataRef - the image data to be displayed - URL generated from a storage bucket
 */
export function ResetFormStateToDefault(
  setSliderFormActive: any,
  nameRef: any,
  priceRef: any,
  imageDataRef: any
) {
  setTimeout(() => {
    setSliderFormActive(false);
    nameRef.current.value = "";
    priceRef.current.value = "";
    imageDataRef.current.publicUrl = "";
  }, 5000);
}
