export const CheckIfDeviceIsSupported = () => {
  const deviceRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  if (deviceRegex) {
    window.location.pathname = "/unsupported";
  }
};
