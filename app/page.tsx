'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import {
  drawWelcomeCanvas,
  stopWelcomeCanvas,
} from '@/public/scripts/canvas_welcome';

export default function Welcome() {
  const router = useRouter();
  let timeoutID: number;

  useEffect(() => {
    document.body.classList.add('disableXScroll');
    document.body.classList.add('disableYScroll');
    drawWelcomeCanvas();
    return () => {
      document.body.classList.remove('disableYScroll');
      stopWelcomeCanvas();
    };
  });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // treat only left button
    timeoutID = window.setTimeout(() => {
      router.push('/home');
    }, 3500);
    e.preventDefault();
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // treat only left button
    window.clearTimeout(timeoutID);
    e.preventDefault();
  };

  return (
    <div
      className="wrapper prevent-select"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div className="welcome">
        <h1>Welcome</h1>
        <h3>Please Move your mouse freely.</h3>
        <h3>
          To Dive in,<br></br>
          Hold down your left mouse button for 4 seconds.
        </h3>
      </div>
      <canvas id="canvas_welcome"></canvas>
      <Script src="/scripts/canvas_welcome.js" type="module"></Script>
    </div>
  );
}
