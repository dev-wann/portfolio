'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
  initWelcomeCanvas,
  startWelcomeCanvas,
  stopWelcomeCanvas,
} from '@/public/scripts/welcomeController';
import Typing from '@/public/scripts/typing';
import localFont from 'next/font/local';

const font = localFont({ src: '../public/fonts/retganon.ttf' });

export default function Welcome() {
  const router = useRouter();
  const welcomeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef(null);
  const desc1Ref = useRef(null);
  const desc2Ref = useRef(null);
  const typeTitle = useRef<Typing>();
  const typeDesc1 = useRef<Typing>();
  const typeDesc2 = useRef<Typing>();
  const isRouting = useRef(false);
  const isCleared = useRef(false);

  useEffect(() => {
    // draw backgroudn canvas
    initWelcomeCanvas();
    startWelcomeCanvas();

    // setting for typing effect
    (welcomeRef.current as HTMLElement).style.transform =
      'translateX(-50%) scale(1)';
    typeTitle.current = new Typing(titleRef.current, {
      str: 'Welcome.',
      backSpeed: 16,
      preDelay: 250,
      postDelay: 1400,
      removeCursorAtFinish: true,
    });
    typeDesc1.current = new Typing(desc1Ref.current, {
      str: 'Please move your mouse freely.',
      backSpeed: 60,
      preDelay: 100,
      postDelay: 1000,
      removeCursorAtFinish: true,
    });
    typeDesc2.current = new Typing(desc2Ref.current, {
      str: 'To Dive in,\nClick and hold your left mouse button for 4 seconds.',
      backSpeed: 128,
      preDelay: 100,
    });
    typeTitle.current
      .start()
      .then(() => typeDesc1.current?.start())
      .then(() => typeDesc2.current?.start());

    // block scroll
    document.body.classList.add('disable-y-scroll');
    return () => {
      document.body.classList.remove('disable-y-scroll');
      stopWelcomeCanvas();
    };
  });

  let timeoutIDs: number[] = [];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // treat only left button

    timeoutIDs.push(
      window.setTimeout(() => {
        typeTitle.current?.clear();
        typeDesc1.current?.clear();
        typeDesc2.current?.clear();
        isCleared.current = true;
      }, 2500),
      window.setTimeout(() => {
        (welcomeRef.current as HTMLElement).style.transform = '';
      }, 3000),
      window.setTimeout(() => {
        router.push('/home');
        isRouting.current = true;
      }, 3500)
    );

    e.preventDefault();
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (isRouting.current) {
      stopWelcomeCanvas();
      return;
    }
    if (e.button !== 0) return; // treat only left button

    while (timeoutIDs.length) {
      window.clearTimeout(timeoutIDs.pop());
    }
    (welcomeRef.current as HTMLElement).style.transform =
      'translateX(-50%) scale(1)';

    if (isCleared.current) {
      typeTitle.current?.restart();
      typeDesc1.current?.restart();
      typeDesc2.current?.restart();
      isCleared.current = false;
    }

    e.preventDefault();
  };

  return (
    <div
      className="wrapper prevent-select"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div className="welcome" ref={welcomeRef} style={font.style}>
        <p ref={titleRef} style={{ fontSize: '3em', fontWeight: 'bold' }}></p>
        <p ref={desc1Ref} style={{ fontSize: '1.8em' }}></p>
        <p ref={desc2Ref} style={{ fontSize: '1.8em' }}></p>
      </div>
      <canvas id="canvas_welcome"></canvas>
    </div>
  );
}
