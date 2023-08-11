'use client';

import { useEffect } from 'react';
import styles from './starrynight.module.css';
import { initStarrySky, startDrawing } from '@/public/scripts/starryNight';

export default function StarryNight() {
  useEffect(() => {
    initStarrySky();
  });
  return <canvas className={styles.starryNight} id="starry_night"></canvas>;
}
