'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './project.module.css';
import Portfolio from './Portfolio';
import SuperOffice from './SuperOffice';
import ToOffice from './ToOffice';
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
  const threshold = useRef(null);
  useEffect(() => {
    organizeFolder();
    setInterval(() => {
      induceFlip(page.current);
    }, 4000);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.at(0)?.isIntersecting) return;
        if (page.current > 0) {
          page.current = 0;
          initFlip();
          isAnimating.current = true;
        }
      },
      { threshold: 0.75 }
    );
    if (threshold.current) observer.observe(threshold.current);
  });

  const leftClick = (
    <div className={styles.instItem}>
      <div className={styles.instImg}>{images.leftClick}</div>
      <div className={styles.instText}>
        <p>Click left</p>
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
        <p>Click right</p>
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
        <div className={`${styles.contents} observeR2L`}>
          <div className={styles.instruction}>{leftClick}</div>
          <div className={styles.folderWrapper}>
            <div className={styles.folder} id="folder" ref={threshold}>
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
              <Portfolio page={1} />
              <SuperOffice page={2} />
              <ToOffice page={3} />
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
      alt="click left to turn the page"
      fill={true}
      style={{ objectFit: 'contain' }}
    ></Image>
  ),
  rightClick: (
    <Image
      src="/img/project/right_click.png"
      alt="click right to turn back the page"
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
