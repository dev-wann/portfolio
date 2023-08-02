'use client';

import { useEffect } from 'react';
import styles from './scrollDown.module.css';

export default function ScrollDownComponent() {
  useEffect(() => {
    setTimeout(() => {
      const scrollDown = document.getElementById('scrollDown');
      if (!scrollDown) return;
      scrollDown.style.opacity = '1';
    }, 500);

    const footer = document.getElementById('footer');
    if (footer) observer.observe(footer);
  });

  const observer = new IntersectionObserver(
    (entries, _observer) => {
      let scrollDown = document.getElementById('scrollDown');
      let thankyou = document.getElementById('thankyou');
      if (!scrollDown || !thankyou) return;

      if (entries.at(0)?.isIntersecting) {
        scrollDown.style.opacity = '0';
        thankyou.style.opacity = '1';
      } else {
        scrollDown.style.opacity = '1';
        thankyou.style.opacity = '0';
      }
    },
    { threshold: 0.2 }
  );

  return (
    <>
      <div className={styles.scroll} id="scrollDown">
        <div></div>
        <div></div>
        <p>SCROLL DOWN</p>
      </div>
      <div className={styles.thankyou} id="thankyou">
        Thank you for watching!
      </div>
    </>
  );
}
