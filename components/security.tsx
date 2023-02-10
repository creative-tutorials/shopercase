import React from "react";
export function Security({ styles }: any) {
  return (
    <section id={styles.security}>
      <h1 id={styles.hd}>How we secure your data</h1>
      <p id={styles.brief}>
        Shopercase ensures data security through encryption and authentication.
      </p>
      <div id={styles.secure_cards}>
        <div id={styles.sCard}>
          <div id={styles.icon}>
            <i className="fa-duotone fa-lock"></i>
          </div>
          <h1>Protected by 2FA</h1>
          <p>
            Shopercase: Secure data w/2FA enabled on all accts. Authorized
            access only, secure accts, safe data.
          </p>
        </div>
        <div id={styles.sCard}>
          <i className="fa-solid fa-key"></i>
          <h1>Encrypted Password Key</h1>
          <p>
            Shopercase: Latest encryption for secure passwords. Encrypted key
            ensures only you have access. Extra security for acct data.
          </p>
        </div>
        <div id={styles.sCard}>
          <i className="fa-duotone fa-shield"></i>
          <h1>File based Encryption for all data</h1>
          <p>Shopercase: Secure file-based encryption for data protection.</p>
        </div>
      </div>
    </section>
  );
}
