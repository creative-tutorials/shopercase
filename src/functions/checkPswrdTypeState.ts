export function checkPswrdTypeState(Password: any, setisTypeText: any) {
  return async () => {
    const fieldofpswrdType = await Password.current;
    if (fieldofpswrdType.type === "password") {
      setisTypeText(true);
    } else {
      setisTypeText(false);
    }
  };
}
