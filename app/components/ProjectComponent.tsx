'use client';

import Image from 'next/image';
import styles from './project.module.css';
import { useEffect, useRef } from 'react';
import {
  flipBack,
  flipForward,
  initFlip,
  isLastPage,
  organizeFolder,
} from '@/public/scripts/projectController';

export default function ProjectComponent() {
  let page = useRef(0);
  let isAnimating = useRef(false);
  useEffect(() => {
    organizeFolder();
    const contactComponent = document.getElementById('conatactWrapper');
    if (contactComponent) observer.observe(contactComponent);
  });

  const observer = new IntersectionObserver(
    (entries, _observer) => {
      if (!entries.at(0)?.isIntersecting) return;
      if (page.current > 0) {
        page.current = 0;
        initFlip();
        isAnimating.current = true;
      }
    },
    { threshold: 0.2 }
  );

  const folderSpineFront = (
    <Image
      src="/img/project/blank-brown-paper.jpg"
      alt="spine of a folder"
      fill={true}
      style={{
        objectFit: 'cover',
        filter: 'grayscale(1) brightness(40%)',
        borderRadius: '0 0 5px 5px',
      }}
    ></Image>
  );
  const folderSpineSide = (
    <Image
      src="/img/project/blank-brown-paper.jpg"
      alt="spine of a folder"
      fill={true}
      style={{
        objectFit: 'cover',
        filter: 'grayscale(1) brightness(30%)',
      }}
    ></Image>
  );

  function handleMouseDown(e: React.MouseEvent) {
    e.preventDefault();
    if (isAnimating.current) return;
    if (e.button === 0) {
      if (flipBack(page.current)) {
        page.current++;
        isAnimating.current = true;
      }
    } else if (e.button === 2) {
      if (flipForward(page.current)) {
        page.current--;
        isAnimating.current = true;
      }
    }
  }

  function handleDoubleClick() {
    if (isAnimating.current) return;
    if (isLastPage(page.current)) {
      page.current = 0;
      initFlip();
      isAnimating.current = true;
    }
  }

  function handleAnimationEnd() {
    isAnimating.current = false;
  }

  return (
    <>
      <div className={styles.projectWrapper}>
        <div className={styles.stickyWrapper}>
          <div className={styles.title}>
            <h2>What I have done</h2>
          </div>
          <div
            className={styles.projects}
            onMouseDown={handleMouseDown}
            onDoubleClick={handleDoubleClick}
            onContextMenu={(e) => e.preventDefault()}
          >
            <div className={styles.folder} onTransitionEnd={handleAnimationEnd}>
              <div className={styles.pages} id="pages">
                <div className={styles.frontCover}>
                  <div>
                    <h1>PROJECTS</h1>
                    <h2>Seungwan Cho</h2>
                  </div>
                  <div></div>
                </div>
                <div className={styles.page}>
                  <div></div> {/* face */}
                  <div></div> {/* back */}
                  <div>
                    <div className={styles.index}></div>
                  </div>
                </div>
                <div className={styles.page}>
                  <div></div> {/* face */}
                  <div></div> {/* back */}
                  <div>
                    <div className={styles.index}></div>
                  </div>
                </div>
                <div className={styles.page}>
                  <div></div> {/* face */}
                  <div></div> {/* back */}
                  <div>
                    <div className={styles.index}></div>
                  </div>
                </div>
                <div className={styles.backCover}>
                  <div>
                    <p>Double click to close the folder</p>
                  </div>
                </div>
              </div>
              <div className={styles.spineFront}>{folderSpineFront}</div>
              <div className={styles.spineSide}>{folderSpineSide}</div>
              <div className={styles.spineTop}></div>
            </div>
          </div>
        </div>
        <div className={styles.bottomPlaceHolder}></div>
      </div>
      <div className={styles.bottomPlaceHolder}></div>
    </>
  );
}
