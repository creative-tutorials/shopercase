export function StoreSession(result: any) {
  localStorage.setItem("auth-session", result.key);
}