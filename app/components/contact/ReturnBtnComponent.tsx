'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './returnBtn.module.css';

export default function ReturnBtnComponent() {
  const btnRef = useRef(null);
  const progRef = useRef(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (progress === 3) {
      setTimeout(() => scrollTo(0, 0), 300);
      setTimeout(() => setProgress(0), 400);
    }
    (progRef.current as unknown as HTMLElement).style.width = `${Math.floor(
      (progress * 100) / 3
    )}%`;
  });
  const handleMouseDown = () => {
    if (!progRef.current) scrollTo(0, 0);
    let btn = btnRef.current as unknown as HTMLElement;
    if (btn) {
      btn.classList.add(styles.animate);
      setTimeout(() => btn.classList.remove(styles.animate), 300);
    }
    setProgress(progress + 1);
  };

  return (
    <button
      className={styles.returnBtn}
      ref={btnRef}
      onMouseDown={handleMouseDown}
    >
      <span>Return to Top</span>
      <div className={styles.progress} ref={progRef}></div>
    </button>
  );
}
