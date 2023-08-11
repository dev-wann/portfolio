import localFont from 'next/font/local';
import styles from './navigation.module.css';
import Link from 'next/link';

const font = localFont({ src: '../../../public/fonts/retganon.ttf' });

export default function Navigation() {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.navigation}>
        <Link
          href="/"
          className={styles.item}
          style={{ ...font.style, fontSize: '2em' }}
        >
          Welcome
        </Link>
        <div className={styles.itemWrapper}>
          <Link href="#intro" className={styles.item}>
            Intro
          </Link>
          <Link href="#about" className={styles.item}>
            About
          </Link>
          <Link href="#projects" className={styles.item}>
            Projects
          </Link>
          <Link href="#contact" className={styles.item}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
