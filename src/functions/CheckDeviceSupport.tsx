export const CheckIfDeviceIsSupported = () => {
  if (navigator.userAgent.match(/Android/i)) {
    window.location.pathname = "/unsupported";
  } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    window.location.pathname = "/unsupported";
  }
};