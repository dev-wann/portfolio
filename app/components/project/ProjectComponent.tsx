'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './project.module.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import {
  flipBack,
  flipForward,
  induceFlip,
  initFlip,
  isLastPage,
  organizeFolder,
} from '@/public/scripts/projectController';

export default function ProjectComponent() {
  const page = useRef(0);
  const isAnimating = useRef(false);
  useEffect(() => {
    organizeFolder();
    setInterval(() => {
      induceFlip(page.current);
    }, 4000);
    const contactComponent = document.getElementById('conatactWrapper');
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
    if (contactComponent) observer.observe(contactComponent);
  });

  const leftClick = (
    <div className={styles.instItem}>
      <div className={styles.instImg}>{images.leftClick}</div>
      <div className={styles.instText}>
        <p>Left click</p>
        <p>to turn</p>
        <p>the page</p>
        <p>Forward</p>
      </div>
    </div>
  );

  const rightClick = (
    <div className={styles.instItem}>
      <div className={styles.instImg}>{images.rightClick}</div>
      <div className={styles.instText}>
        <p>Right click</p>
        <p>to turn</p>
        <p>the page</p>
        <p>Backward</p>
      </div>
    </div>
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
    <div
      className={styles.projectWrapper}
      onMouseDown={handleMouseDown}
      onDoubleClick={handleDoubleClick}
      onContextMenu={(e) => e.preventDefault()}
      onTransitionEnd={handleAnimationEnd}
      id="projects"
    >
      <div className={styles.stickyWrapper}>
        <div className={styles.title}>
          <h2>What I have done</h2>
        </div>
        <div className={styles.contents}>
          <div className={styles.instruction}>{leftClick}</div>
          <div className={styles.folderWrapper}>
            <div className={styles.folder} id="folder">
              <div
                className={`${styles.frontCover} ${[
                  page.current === 0 ? styles.induceFlip : '',
                ]}`}
              >
                <div>
                  <h1>PROJECTS</h1>
                  <h2>Seungwan Cho</h2>
                </div>
                <div />
              </div>
              <Page1 />
              <Page2 />
              <Page3 />
              <div className={styles.backCover}>
                <div>
                  <p>Double click to close the folder</p>
                </div>
              </div>
            </div>
            <div className={styles.spineFront}>{images.spine}</div>
            <div className={styles.spineSide}>{images.spine}</div>
            <div className={styles.spineTop}></div>
          </div>
          <div className={styles.instruction}>{rightClick}</div>
        </div>
      </div>
      <div className={styles.bottomPlaceHolder}></div>
    </div>
  );
}

const images = {
  leftClick: (
    <Image
      src="/img/project/left_click.png"
      alt="left click to turn the page"
      fill={true}
      style={{ objectFit: 'contain' }}
    ></Image>
  ),
  rightClick: (
    <Image
      src="/img/project/right_click.png"
      alt="right click to turn back the page"
      fill={true}
      style={{ objectFit: 'contain' }}
    ></Image>
  ),
  spine: (
    <Image
      src="/img/project/blank-brown-paper.jpg"
      alt="spine of a folder"
      fill={true}
      style={{
        objectFit: 'cover',
        filter: 'grayscale(1) brightness(40%)',
      }}
    ></Image>
  ),
};
