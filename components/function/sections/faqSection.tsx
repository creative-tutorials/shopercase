import styles from "../../../styles/Home.module.css"
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  SetStateAction,
} from "react";
function FAQ({ index, item }: any) {
  const className = `item-${index}`;
  return (
    <div className={styles._qs} id={className}>
      <div className={styles._q_fv}>
        <span>{item.question}</span>
        <i className="fa-sharp fa-solid fa-caret-up"></i>
      </div>
      <div className={styles.answer_box}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
}
export default function FAQSection({ jsonData, isActive }: any) {
  return (
    <section className={styles.faq} id={isActive ? styles.active : undefined}>
      <div className={styles.faqHeader}>
        <h3>Frequently Asked Questions</h3>
      </div>

      <div
        className={styles.q_wrapper}
        id={isActive ? styles.active : undefined}
      >
        {jsonData ? (
          <>
            {jsonData.map(
              (
                item: {
                  question:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | ReactFragment
                    | ReactPortal
                    | null
                    | undefined;
                  answer:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | ReactFragment
                    | ReactPortal
                    | null
                    | undefined;
                },
                index: Key | null | undefined
              ) => (
                <FAQ key={index} index={index} item={item} />
              )
            )}
          </>
        ) : null}
      </div>
    </section>
  );
}
