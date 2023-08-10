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
    });
    typeTitle.current.start();
    typeTitleSub.current = new Typing(titleSubRef.current, {
      str: '을 닮고픈 개발자',
      showCursor: false,
    });
    initIntroObserver(typeTitle.current, typeTitleSub.current);
  });

  return (
    <>
      <div className={styles.introWrapper} id="intro">
        <div className={styles.topPlaceHolder}></div>
        <h1 className={styles.title} id="introTitle">
          <span ref={titleRef} className="colorful-text"></span>
          <span ref={titleSubRef} style={{ fontSize: '0.8em' }}></span>
        </h1>
        <div className={styles.stickyWrapper}>
          <div className={styles.item} id={styles.item1}>
            <div className={styles.background}>{images.img1}</div>
            <div className={styles.content}>
              <div className={styles.subTitle}>
                <h2>Deep dive into the unknown</h2>
              </div>
              <div className={styles.description}>
                <p id="introText1_before">
                  누구도 가보지 못한 우주를 두려움없이,
                  <br />또 끊임없이 탐험하는 존재
                </p>
                <p id="introText1_after">
                  새로운 것을 끊임없이
                  <br />
                  탐구하는 개발자
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
                  혜성이 지나간 자리에 남는 아름다운 꼬리
                  <br />
                  유기물의 집합체로 새로운 생명의 씨앗
                </p>
                <p id="introText2_after">
                  내가 속한 조직에 긍정적인 영향을
                  <br />
                  가져다 줄 수 있는 개발자
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
                  어떤 분야에서 갑자기 뛰어나게 <br />
                  드러나는 존재를 비유적으로 이르는 말
                </p>
                <p id="introText3_after">
                  내가 다루는 기술에 대해
                  <br />
                  부족함이 없는 개발자
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
