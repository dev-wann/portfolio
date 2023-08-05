import Image from 'next/image';
import styles from './contact.module.css';
import Link from 'next/link';
export default function ContactComponent() {
  const email = (
    <div className={styles.icon}>
      <Image
        src="/img/contact/mail.svg"
        alt="Email icon"
        fill={true}
        style={{ objectFit: 'contain', filter: 'invert(100%)' }}
      ></Image>
    </div>
  );

  const github = (
    <div className={styles.icon}>
      <Image
        src="/img/github.svg"
        alt="GitHub icon"
        fill={true}
        style={{ objectFit: 'contain' }}
      ></Image>
    </div>
  );

  const blog = (
    <div className={styles.icon}>
      <Image
        src="/img/contact/article.svg"
        alt="Blog icon"
        fill={true}
        style={{ objectFit: 'contain', filter: 'invert(100%)' }}
      ></Image>
    </div>
  );

  const footer = (
    <div style={{ width: '100%', height: '10px' }} id="footer"></div>
  );

  return (
    <>
      <div className="wrapper" id="contact">
        <div className={styles.contactWrapper} id="conatactWrapper">
          <p className={styles.title}>Contact</p>
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              {email}
              <span className={styles.desc}>E-MAIL</span>
              <span className={styles.desc}>swcho8220@gmail.com</span>
              <Link href="mailto:swcho8220@gmail.com"></Link>
            </div>
            <div className={styles.content}>
              {github}
              <span className={styles.desc}>GitHub</span>
              <span className={styles.desc}>https://github.com/dev-wann</span>
              <Link href="https://github.com/dev-wann"></Link>
            </div>
            <div className={styles.content}>
              {blog}
              <span className={styles.desc}>Blog</span>
              <span className={styles.desc}>https://dev-wann.tistory.com</span>
              <Link href="https://dev-wann.tistory.com"></Link>
            </div>
          </div>
        </div>
        {footer}
      </div>
    </>
  );
}
