'use client'

import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import Script from "next/script";
import { drawWelcomeCanvas } from "@/public/scripts/canvas_welcome";

export default function Welcome() {
  const router = useRouter();
  let timeoutID: number;

  useEffect(() => {
    drawWelcomeCanvas();
  })

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    timeoutID = window.setTimeout(()=> {
      router.push('/home');
    }, 4500);
  }

  const handleMouseUp = (e:React.MouseEvent) => {
    e.preventDefault();
    window.clearTimeout(timeoutID);
  }

  return (
    <div className="prevent-select" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      <div className="welcome">
        <h1>Welcome</h1>
        <h3>
          Please Move your mouse freely.
        </h3>
        <h3>
          To Dive in,<br></br>
          Hold down your left mouse button for 5 seconds.
        </h3>
      </div>
      <canvas id='canvas_welcome'></canvas>
      <Script src="/scripts/canvas_welcome.js" type="module"></Script>
    </div>
  )
}
