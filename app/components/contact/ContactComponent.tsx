import Image from 'next/image';
import styles from './contact.module.css';
import Link from 'next/link';
import StarryNight from './StarryNight';
export default function ContactComponent() {
  return (
    <>
      <div className={styles.contactWrapper} id="contact">
        <p className={styles.title}>Contact</p>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.icon}>{images.email}</div>
            <span className={styles.desc}>E-MAIL</span>
            <span className={styles.desc}>swcho8220@gmail.com</span>
            <Link href="mailto:swcho8220@gmail.com"></Link>
          </div>
          <div className={styles.content}>
            <div className={styles.icon}>{images.github}</div>
            <span className={styles.desc}>GitHub</span>
            <span className={styles.desc}>https://github.com/dev-wann</span>
            <Link href="https://github.com/dev-wann"></Link>
          </div>
          <div className={styles.content}>
            <div className={styles.icon}>{images.blog}</div>
            <span className={styles.desc}>Blog</span>
            <span className={styles.desc}>https://dev-wann.tistory.com</span>
            <Link href="https://dev-wann.tistory.com"></Link>
          </div>
        </div>
        <div className={styles.background}>
          <StarryNight />
          {images.hill1}
          {images.hill2}
          {images.hill3}
        </div>
        <div className={styles.footer} id="footer"></div>
      </div>
    </>
  );
}

const images = {
  email: (
    <Image
      src="/img/contact/mail.svg"
      alt="Email icon"
      fill={true}
      style={{ objectFit: 'contain', filter: 'invert(100%)' }}
    ></Image>
  ),
  github: (
    <Image
      src="/img/github.svg"
      alt="GitHub icon"
      fill={true}
      style={{ objectFit: 'contain' }}
    ></Image>
  ),
  blog: (
    <Image
      src="/img/contact/article.svg"
      alt="Blog icon"
      fill={true}
      style={{ objectFit: 'contain', filter: 'invert(100%)' }}
    ></Image>
  ),
  hill1: (
    <Image
      src="/img/contact/hill-1.png"
      alt="hill"
      fill={true}
      style={{ objectFit: 'contain' }}
    ></Image>
  ),
  hill2: (
    <Image
      src="/img/contact/hill-2.png"
      alt="hill"
      fill={true}
      style={{ objectFit: 'contain' }}
    ></Image>
  ),
  hill3: (
    <Image
      src="/img/contact/hill-3.png"
      alt="hill"
      fill={true}
      style={{ objectFit: 'contain' }}
    ></Image>
  ),
};
