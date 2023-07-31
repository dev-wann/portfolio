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
  });

  return (
    <div className={styles.scroll} id="scrollDown">
      <div></div>
      <div></div>
      <p>SCROLL DOWN</p>
    </div>
  );
}
