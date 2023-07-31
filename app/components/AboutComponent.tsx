'use client';

import { useEffect, useState } from 'react';
import styles from './about.module.css';
import Image from 'next/image';
import { initAboutObserver } from '@/public/scripts/aboutController';

export default function AboutComponent() {
  let [imgType, setImgType] = useState('defaultImg');
  useEffect(initAboutObserver);

  const defaultImg = (
    <Image
      src="/img/about.jpg "
      alt="Picture of myself"
      fill={true}
      style={{ objectFit: 'cover' }}
      id="defaultImg"
    ></Image>
  );

  const careerImg = (
    <Image
      src="/img/career.jpg "
      alt="Picture of myself"
      fill={true}
      style={{ objectFit: 'cover' }}
      id="careerImg"
    ></Image>
  );

  const eduImg = (
    <Image
      src="/img/education.jpg "
      alt="Picture of myself"
      fill={true}
      style={{ objectFit: 'cover' }}
      id="eduImg"
    ></Image>
  );

  const typescript = (
    <div className={styles.logo}>
      <Image
        src="/img/typescript.png"
        alt="TypeScript logo"
        width={70}
        height={70}
      ></Image>
      <p>TypeScript</p>
    </div>
  );

  const react = (
    <div className={styles.logo}>
      <Image
        src="/img/react.svg"
        alt="React logo"
        width={70}
        height={70}
      ></Image>
      <p>React</p>
    </div>
  );

  const mobx = (
    <div className={styles.logo}>
      <Image src="/img/mobx.png" alt="MobX logo" width={70} height={70}></Image>
      <p>MobX</p>
    </div>
  );

  const html = (
    <div className={styles.logo}>
      <Image src="/img/html.svg" alt="HTML logo" width={70} height={70}></Image>
      <p>HTML</p>
    </div>
  );

  const css = (
    <div className={styles.logo}>
      <Image src="/img/css.svg" alt="CSS logo" width={70} height={70}></Image>
      <p>CSS</p>
    </div>
  );

  const javascript = (
    <div className={styles.logo}>
      <Image
        src="/img/javascript.png"
        alt="JavaScript logo"
        width={70}
        height={70}
      ></Image>
      <p>JavaScript</p>
    </div>
  );

  const electron = (
    <div className={styles.logo}>
      <Image
        src="/img/electron.svg"
        alt="Electron logo"
        width={70}
        height={70}
      ></Image>
      <p>Electron</p>
    </div>
  );

  const jest = (
    <div className={styles.logo}>
      <Image src="/img/jest.png" alt="Jest logo" width={70} height={70}></Image>
      <p>Jest</p>
    </div>
  );

  const gitlab = (
    <div className={styles.logo}>
      <Image
        src="/img/gitlab.svg"
        alt="GitLab logo"
        width={70}
        height={70}
      ></Image>
      <p>GitLab</p>
    </div>
  );

  const github = (
    <div className={styles.logo}>
      <Image
        src="/img/github.svg"
        alt="GitHub logo"
        width={70}
        height={70}
      ></Image>
      <p>GitHub</p>
    </div>
  );

  const cpp = (
    <div className={styles.logo}>
      <Image src="/img/cpp.svg" alt="C++ logo" width={70} height={70}></Image>
      <p>C++</p>
    </div>
  );

  function changeImg(type: string) {
    if (imgType === type) return;
    const currentImg = document.getElementById(imgType);
    const changeImg = document.getElementById(type);
    if (!currentImg || !changeImg) return;
    currentImg.style.transform = 'translate(100%, 0)';
    changeImg.style.transform = 'translate(0, 0)';
    setImgType(type);
  }

  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.stickyWrapper}>
        <div className={styles.header}>
          <div className={styles.headerContentWrapper}>
            <div className={styles.headerContent}>
              <h2>Who am I?</h2>
              <h2 style={{ marginBottom: 0 }}>새로움을 찾아 헤메는 개발자</h2>
              <h1 style={{ marginTop: 0 }}>조승완입니다</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                perferendis rerum sequi provident illum quibusdam blanditiis
              </p>
              <div></div>
              <button>TMI about me</button>
            </div>
          </div>
          <div className={styles.headerImg}>
            {defaultImg}
            {careerImg}
            {eduImg}
          </div>
        </div>
        <div className={styles.contents}>
          <div
            className={styles.career}
            onMouseEnter={() => {
              changeImg('careerImg');
            }}
            onMouseLeave={() => {
              changeImg('defaultImg');
            }}
          >
            <h1>Career</h1>
            <div className={styles.careerContent}>
              <h2 className={styles.company}>TmaxOffice</h2>
              <p className={styles.info}>
                연구원 / PK본부
                <br />
                2020.08 ~ 2023.05
              </p>
              <div className={styles.desc}>
                <h3>Description</h3>
                <ul>
                  <li>웹 오피스(SuperOffice) 제품군 개발</li>
                  <li>다중 사용자 동시 편집 기능 구현</li>
                  <li>Chromium engine layout algorithm 커스텀 튜닝</li>
                </ul>
              </div>
              <div className={styles.stack}>
                <h3>Tech Stack</h3>
                <ul>
                  <li>TypeScript, React, MobX, Jest, Electron, C++, GitLab</li>
                </ul>
              </div>
            </div>
            <div className={styles.careerContent} style={{ marginTop: '20px' }}>
              <h2 className={styles.company}>TmaxOS</h2>
              <p className={styles.info}>
                연구원 / PK본부
                <br />
                2019.08 ~ 2020.07
              </p>
              <div className={styles.desc}>
                <h3>Description</h3>
                <ul>
                  <li>데스크탑 오피스(ToOffice) 제품군 개발</li>
                  <li>Layout algorithm 개발 및 유지보수</li>
                </ul>
              </div>
              <div className={styles.stack}>
                <h3>Tech Stack</h3>
                <ul>
                  <li>C++, GitLab</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.skills}>
            <h1>Skills</h1>
            <div className={styles.skillsContent}>
              <h3>Web development</h3>
              <div className={styles.skillsLogo}>
                {typescript} {react} {mobx} {html} {css} {javascript} {electron}
                {jest}
              </div>
              <h3>Extra</h3>
              <div className={styles.skillsLogo}>
                {gitlab} {github} {cpp}
              </div>
            </div>
          </div>
          <div
            className={styles.edu}
            onMouseEnter={() => {
              changeImg('eduImg');
            }}
            onMouseLeave={() => {
              changeImg('defaultImg');
            }}
          >
            <h1>Education</h1>
            <p>연세대학교 전기전자공학부 석사 (2017.03 ~ 2019.08)</p>
            <p>연세대학교 전기전자공학부 학사 (2013.03 ~ 2017.02)</p>
          </div>
          {/* <div>
            <h2>What do you mean by &apos;searching new things&apos;</h2>
            <h3>(aka TMI about me)</h3>
            <p>학부</p>
            <p>대학원</p>
            <p>음악</p>
            <p>개발</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
