import Image from "next/image";
export function Header({ styles, setIsOpen, Link }:any) {
  return (
    <div className={styles.header}>
      <div className={styles.hCol}>
        <div className={styles.hleft}>
          <div className={styles.Logo}>
            <Image
              src="/icons/ShoperFrame.png"
              width={35}
              height={35}
              alt="Shopercase Logo"
            />
          </div>
          <div className={styles.m_Links}>
            <Link href="/docs">Docs</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
          </div>
        </div>
        <div className={styles.hright}>
          <div className={styles.str}>
            <Link href="https://github.com/creative-tutorials/shopercase">
              <i className="fa-solid fa-star fa-2xs"></i> Star us on GitHub
            </Link>
          </div>
          <div className={styles.menu}>
            <i className="fa-solid fa-bars" onClick={() => setIsOpen(true)}></i>
          </div>
        </div>
      </div>
    </div>
  );
}