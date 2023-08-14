'use client';

import { useEffect } from 'react';

export default function GlobalIntersectionObserver() {
  useEffect(() => {
    const l2r = document.getElementsByClassName('observeL2R');
    for (let i = 0; i < l2r.length; i += 1) {
      observerL2R.observe(l2r.item(i) as HTMLElement);
    }

    const r2l = document.getElementsByClassName('observeR2L');
    for (let i = 0; i < r2l.length; i += 1) {
      observerR2L.observe(r2l.item(i) as HTMLElement);
    }
  });

  let style: CSSStyleDeclaration;
  const observerL2R = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        style = (entry.target as HTMLElement).style;
        if (entry.isIntersecting) {
          style.opacity = '1';
          style.transform = '';
        } else {
          style.opacity = '0';
          style.transform = 'translateX(-25%)';
        }
      });
    },
    { threshold: 0.3 }
  );
  const observerR2L = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        style = (entry.target as HTMLElement).style;
        if (entry.isIntersecting) {
          style.opacity = '1';
          style.transform = '';
        } else {
          style.opacity = '0';
          style.transform = 'translateX(25%)';
        }
      });
    },
    { threshold: 0.3 }
  );
  return <></>;
}
