import "../../styles/toast.css";
export function Toast({ errorMessage, toastisActive }: any) {
  return toastisActive ? (
    <div className="toast active">
      {errorMessage}
    </div>
  ) : (
    <div id="toast"></div>
  );
}
