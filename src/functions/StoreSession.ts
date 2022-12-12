export function StoreSession(result: any) {
  localStorage.setItem("auth-session", JSON.stringify(result));
}