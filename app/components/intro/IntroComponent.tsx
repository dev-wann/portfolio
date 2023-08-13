'use client';

import { useEffect, useRef } from 'react';
import styles from './intro.module.css';
import Image from 'next/image';
import { initIntroObserver } from '@/public/scripts/introController';
import Typing from '@/public/scripts/typing';

export default function IntroComponent() {
  const titleRef = useRef<HTMLSpanElement>(null);
  const titleSubRef = useRef<HTMLSpanElement>(null);
  const typeTitle = useRef<Typing>();
  const typeTitleSub = useRef<Typing>();
  useEffect(() => {
    typeTitle.current = new Typing(titleRef.current, {
      str: '혜성',
      speed: 8,
      showCursor: false,
      preDelay: 100,
    });
    typeTitle.current.start();
    typeTitleSub.current = new Typing(titleSubRef.current, {
      str: '을 닮고픈 개발자',
      showCursor: false,
    });
    initIntroObserver(typeTitleSub.current);
  });

  return (
    <>
      <div className={styles.introWrapper} id="intro">
        <div className={styles.topPlaceHolder}></div>
        <h1 className={styles.title} id="introTitle">
          <span ref={titleRef} className="colorful-text"></span>
          <span ref={titleSubRef} style={{ fontSize: '0.75em' }}></span>
        </h1>
        <div className={styles.stickyWrapper}>
          <div className={styles.item} id={styles.item1}>
            <div className={styles.background}>{images.img1}</div>
            <div className={styles.content}>
              <div className={styles.subTitle}>
                <h2>
                  Deep dive into
                  <br />
                  the unknown
                </h2>
              </div>
              <div className={styles.description}>
                <p id="introText1_before">
                  누구도 가보지 못한 미지의 우주를
                  <br />
                  두려움없이, 또 끊임없이 탐험하는 존재
                </p>
                <p id="introText1_after">
                  새로운 것을 끊임없이
                  <br />
                  탐구하고자 합니다
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.stickyWrapper}>
          <div className={styles.item} id={styles.item2}>
            <div className={styles.background}>{images.img2}</div>
            <div className={styles.content}>
              <div className={styles.subTitle}>
                <h2>아름다운 흔적</h2>
              </div>
              <div className={styles.description}>
                <p id="introText2_before">
                  지나간 자리에 남는 아름다운 꼬리
                  <br />
                  새로운 생명의 씨앗을 퍼뜨리는 존재
                </p>
                <p id="introText2_after">
                  조직에 긍정적인 영향을
                  <br />
                  가져다 주고자 노력합니다
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.stickyWrapper}>
          <div className={styles.item} id={styles.item3}>
            <div className={styles.background}>{images.img3}</div>
            <div className={styles.content}>
              <div className={styles.subTitle}>
                <h2>혜성과도 같은</h2>
              </div>
              <div className={styles.description}>
                <p id="introText3_before">
                  어떤 분야에서
                  <br />
                  뛰어나게 드러나는 존재
                </p>
                <p id="introText3_after">
                  높은 성취를 지향하며
                  <br />
                  꾸준히 노력합니다
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomPlaceHolder}></div>
        <div className={styles.bottomPlaceHolder} id="scrollThrs"></div>
      </div>
      <div className={styles.bottomPlaceHolder}></div>
    </>
  );
}

const images = {
  img1: (
    <Image
      src="/img/intro/intro_1.jpg"
      alt="Picture representing 'dive into unknown'"
      fill={true}
      style={{ objectFit: 'cover' }}
    />
  ),
  img2: (
    <Image
      src="/img/intro/intro_2.jpg"
      alt="Picture of comet's tail"
      fill={true}
      style={{ objectFit: 'cover' }}
    />
  ),
  img3: (
    <Image
      src="/img/intro/intro_3.jpg"
      alt="Picture of a person pointing at comet"
      fill={true}
      style={{ objectFit: 'cover' }}
    />
  ),
};
