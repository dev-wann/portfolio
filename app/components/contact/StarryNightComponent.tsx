'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import styles from './starrynight.module.css';
import { initStarrySky } from '@/public/scripts/starryNight';

export default function StarryNightComponent() {
  useEffect(() => {
    initStarrySky();
  });
  return (
    <>
      <canvas className={styles.starryNight} id="starry_night"></canvas>
      <div className={`${styles.hill} hill`}>{images.hill1}</div>
      <div className={`${styles.hill} hill`}>{images.hill2}</div>
      <div className={`${styles.hill} hill`}>{images.hill3}</div>
      <div className={`${styles.hill} hill`}>{images.hill4}</div>
      <div className={styles.ground} id="ground"></div>
    </>
  );
}

const images = {
  hill1: (
    <Image
      src="/img/contact/hill-1.png"
      alt="hill"
      fill={true}
      style={{ objectFit: 'contain', filter: 'brightness(95%)' }}
    ></Image>
  ),
  hill2: (
    <Image
      src="/img/contact/hill-2.png"
      alt="hill"
      fill={true}
      style={{ objectFit: 'contain', filter: 'brightness(90%)' }}
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
  hill4: (
    <Image
      src="/img/contact/hill-4.png"
      alt="hill"
      fill={true}
      style={{ objectFit: 'contain', zIndex: 2 }}
    ></Image>
  ),
};
