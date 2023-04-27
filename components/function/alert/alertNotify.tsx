import ctt from "../../../styles/contact.module.css";
export default function AlertNotify({ message, isErr }: any) {
  return (
    <div className={ctt.alertNotify} id={isErr ? ctt.alrtErr : undefined}>
      {message}
    </div>
  );
}
