'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './returnBtn.module.css';

export default function ReturnBtnComponent() {
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
  const handleClick = () => {
    if (!progRef.current) scrollTo(0, 0);
    setProgress(progress + 1);
  };

  return (
    <button className={styles.returnBtn} onClick={handleClick}>
      <span>Return to Top</span>
      <div className={styles.progress} ref={progRef}></div>
    </button>
  );
}
