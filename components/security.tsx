import React from "react";
export function Security({ styles }: any) {
  return (
    <section id={styles.security}>
      <h1 id={styles.hd}>How we secure your data</h1>
      <p id={styles.brief}>
        At Shopercase, we take your data security seriously. We use the latest
        encryption technology and sophisticated authentication protocols to
        ensure that your data is safe and secure. Our team of security experts
        monitor our systems 24/7 to detect any potential threats and take
        immediate action to protect your data. We are committed to providing you
        with the highest level of security and peace of mind.
      </p>
      <div id={styles.secure_cards}>
        <div id={styles.sCard}>
          <div id={styles.icon}>
            <i className="fa-duotone fa-lock"></i>
          </div>
          <h1>Protected by 2FA(enabled by default)</h1>
          <p>
            At Shopercase, we understand the importance of protecting your data.
            That’s why we have enabled two-factor authentication (2FA) by
            default on all of our accounts. 2FA provides an additional layer of
            security and ensures that only authorized users can access your
            account. With 2FA, you can rest assured that your account is secure
            and your data is safe.
          </p>
        </div>
        <div id={styles.sCard}>
          <i className="fa-solid fa-key"></i>
          <h1>Encrypted Password Key</h1>
          <p>
            At Shopercase, we use the latest encryption technology to keep your
            passwords secure. All passwords are stored using an encrypted
            password key, ensuring that only you have access to them. This
            encryption technology helps to protect your data from unauthorized
            access and provides an additional layer of security for your
            account.
          </p>
        </div>
        <div id={styles.sCard}>
          <i className="fa-duotone fa-shield"></i>
          <h1>File based Encryption for all data</h1>
          <p>
            At Shopercase, we use file-based encryption to keep your data
            secure. This encryption technology helps to protect all of your data
            from unauthorized access. Every file is individually encrypted and
            stored on our secure servers, ensuring that only you have access to
            the information you need. With our file-based encryption, you can
            rest assured that your data is safe and secure.
          </p>
        </div>
      </div>
    </section>
  );
}
