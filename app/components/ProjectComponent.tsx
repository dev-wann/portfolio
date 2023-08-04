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
      <div className={styles.instImg}>
        <Image
          src="/img/project/left_click.png"
          alt="left click to turn the page"
          fill={true}
          style={{ objectFit: 'contain' }}
        ></Image>
      </div>
      <div className={styles.instText}>
        <p>Left click</p>
        <p>to turn</p>
        <p> the page</p>
        <p>Forward</p>
      </div>
    </div>
  );

  const rightClick = (
    <div className={styles.instItem}>
      <div className={styles.instImg}>
        <Image
          src="/img/project/right_click.png"
          alt="right click to turn back the page"
          fill={true}
          style={{ objectFit: 'contain' }}
        ></Image>
      </div>
      <div className={styles.instText}>
        <p>Right click</p>
        <p>to turn</p>
        <p>the page</p>
        <p>Backward</p>
      </div>
    </div>
  );

  const folderSpineFront = (
    <div className={styles.spineFront}>
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
    </div>
  );
  const folderSpineSide = (
    <div className={styles.spineSide}>
      <Image
        src="/img/project/blank-brown-paper.jpg"
        alt="spine of a folder"
        fill={true}
        style={{
          objectFit: 'cover',
          filter: 'grayscale(1) brightness(30%)',
        }}
      ></Image>
    </div>
  );

  const superoffice = (
    <div className={styles.item}>
      <h1>Project Name</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        totam ipsum asperiores minus rerum cumque fugiat animi tempora eveniet.
        Ullam eveniet eius dolorum obcaecati dolores velit consequuntur quisquam
        modi quam.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        totam ipsum asperiores minus rerum cumque fugiat animi tempora eveniet.
        Ullam eveniet eius dolorum obcaecati dolores velit consequuntur quisquam
        modi quam.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        totam ipsum asperiores minus rerum cumque fugiat animi tempora eveniet.
        Ullam eveniet eius dolorum obcaecati dolores velit consequuntur quisquam
        modi quam.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        totam ipsum asperiores minus rerum cumque fugiat animi tempora eveniet.
        Ullam eveniet eius dolorum obcaecati dolores velit consequuntur quisquam
        modi quam.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        totam ipsum asperiores minus rerum cumque fugiat animi tempora eveniet.
        Ullam eveniet eius dolorum obcaecati dolores velit consequuntur quisquam
        modi quam.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        totam ipsum asperiores minus rerum cumque fugiat animi tempora eveniet.
        Ullam eveniet eius dolorum obcaecati dolores velit consequuntur quisquam
        modi quam.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        totam ipsum asperiores minus rerum cumque fugiat animi tempora eveniet.
        Ullam eveniet eius dolorum obcaecati dolores velit consequuntur quisquam
        modi quam.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        totam ipsum asperiores minus rerum cumque fugiat animi tempora eveniet.
        Ullam eveniet eius dolorum obcaecati dolores velit consequuntur quisquam
        modi quam.
      </p>
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
    <>
      <div
        className={styles.projectWrapper}
        onMouseDown={handleMouseDown}
        onDoubleClick={handleDoubleClick}
        onContextMenu={(e) => e.preventDefault()}
        onTransitionEnd={handleAnimationEnd}
      >
        <div className={styles.stickyWrapper}>
          <div className={styles.title}>
            <h2>What I have done</h2>
          </div>
          <div className={styles.contents}>
            <div className={styles.instruction}>{leftClick}</div>
            <div className={styles.folderWrapper}>
              <div className={styles.folder} id="folder">
                <div className={styles.frontCover}>
                  <div>
                    <h1>PROJECTS</h1>
                    <h2>Seungwan Cho</h2>
                  </div>
                  <div></div>
                </div>
                <div className={styles.page}>
                  <div>
                    <div className={styles.index}>
                      <p>Project #1</p>
                    </div>
                    {superoffice}
                  </div>
                  <div>
                    <div className={styles.index}></div>
                  </div>
                </div>
                <div className={styles.page}>
                  <div>
                    <div className={styles.index}>
                      <p>Project #2</p>
                    </div>
                    {superoffice}
                  </div>
                  <div>
                    <div className={styles.index}></div>
                  </div>
                </div>
                <div className={styles.page}>
                  <div>
                    <div className={styles.index}>
                      <p>Project #3</p>
                    </div>
                    {superoffice}
                  </div>
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
              {folderSpineFront}
              {folderSpineSide}
              <div className={styles.spineTop}></div>
            </div>
            <div className={styles.instruction}>{rightClick}</div>
          </div>
        </div>
        <div className={styles.bottomPlaceHolder}></div>
      </div>
      <div className={styles.bottomPlaceHolder}></div>
    </>
  );
}
