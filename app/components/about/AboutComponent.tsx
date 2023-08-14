'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './about.module.css';
import PopupComponent from './PopupComponent';
import { showPopup } from '@/public/scripts/popupController';

export default function AboutComponent() {
  const imgType = useRef('defaultImg');
  const router = useRouter();

  function changeImg(type: string) {
    if (imgType.current === type) return;
    const currentImg = document.getElementById(imgType.current);
    const changeImg = document.getElementById(type);
    if (!currentImg || !changeImg) return;
    currentImg.style.transform = 'translate(100%, 0)';
    changeImg.style.transform = 'translate(0, 0)';
    imgType.current = type;
  }

  function highlight(id: string, on: boolean) {
    const target = document.getElementById(id);
    if (!target) return;
    target.style.webkitTextFillColor = on ? '' : 'white';
  }

  function toResume() {
    router.push('/resume');
  }

  const header = (
    <div className={`${styles.header} observeR2L`}>
      <div className={styles.headerContentWrapper}>
        <div className={styles.headerContent}>
          <h2 style={{ marginBottom: '1vh' }}>Who am I?</h2>
          <div className={styles.headerTitle}>
            <span className="colorful-text" style={{ fontSize: '1.7em' }}>
              새로움
            </span>
            을 찾아 헤메는 개발자
            <br />
            <span style={{ fontSize: '1.7em' }}>조승완</span>
            입니다.
          </div>
          <p className={styles.headerDesc}>
            <span>새롭고 도전적인</span> 서비스와 더 나은 <span>UX 개발</span>에
            목마른 <span>Frontend</span> 개발자입니다.
          </p>
          <button onClick={toResume}>Resume</button>
          <button onClick={showPopup}>TMI about me</button>
        </div>
      </div>
      <div className={styles.headerImg}>
        {images.default}
        {images.career}
        {images.edu}
      </div>
    </div>
  );

  const career = (
    <div
      className={`${styles.career} observeL2R`}
      onMouseEnter={() => {
        changeImg('careerImg');
        highlight('careerText', true);
      }}
      onMouseLeave={() => {
        changeImg('defaultImg');
        highlight('careerText', false);
      }}
    >
      <h1>
        <span
          className="colorful-text"
          style={{ WebkitTextFillColor: 'white' }}
          id="careerText"
        >
          Career
        </span>
      </h1>
      <div className={styles.careerContent}>
        <h2 className={styles.company}>TmaxOffice</h2>
        <p className={styles.info}>
          연구원 / PK본부
          <br />
          2020.08 ~ 2023.05
        </p>
        <div className={styles.desc}>
          <ul>
            <li>Web & Electron 기반 오피스 제품군(SuperOffice) 개발</li>
            <li>다중 사용자 동시 편집 기능 및 다양한 UI 기능 구현</li>
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
          <ul>
            <li>데스크탑 오피스 제품군(ToOffice) 개발</li>
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
  );

  const skills = (
    <div
      className={`${styles.skills} observeR2L`}
      onMouseEnter={() => {
        highlight('skillsText', true);
      }}
      onMouseLeave={() => {
        highlight('skillsText', false);
      }}
    >
      <h1>
        <span
          className="colorful-text"
          style={{ WebkitTextFillColor: 'white' }}
          id="skillsText"
        >
          Skills
        </span>
      </h1>
      <div className={styles.skillsContent}>
        <h3>Web development</h3>
        <div className={styles.skillsLogo}>
          {images.typescript} {images.react} {images.mobx} {images.html}
          {images.css} {images.javascript} {images.jest}
        </div>
        <h3>Extra</h3>
        <div className={styles.skillsLogo}>
          {images.gitlab} {images.github} {images.electron} {images.cpp}
        </div>
      </div>
    </div>
  );

  const edu = (
    <div
      className={`${styles.edu} observeR2L`}
      onMouseEnter={() => {
        changeImg('eduImg');
        highlight('eduText', true);
      }}
      onMouseLeave={() => {
        changeImg('defaultImg');
        highlight('eduText', false);
      }}
    >
      <h1>
        <span
          className="colorful-text"
          style={{ WebkitTextFillColor: 'white' }}
          id="eduText"
        >
          Education
        </span>
      </h1>
      <p>연세대학교 전기전자공학부 석사 (2017.03 ~ 2019.08)</p>
      <p>연세대학교 전기전자공학부 학사 (2013.03 ~ 2017.02)</p>
    </div>
  );

  return (
    <div className={styles.aboutWrapper} id="about">
      <div className={styles.stickyWrapper}>
        {header}
        <div className={styles.contents}>
          {career}
          {skills}
          {edu}
        </div>
        <PopupComponent />
      </div>
      <div className={styles.bottomPlaceHolder}></div>
    </div>
  );
}

const images = {
  default: (
    <Image
      src="/img/about/default.jpg "
      alt="Picture of myself"
      fill={true}
      style={{ objectFit: 'cover' }}
      id="defaultImg"
    ></Image>
  ),
  career: (
    <Image
      src="/img/about/career.jpg "
      alt="Picture of myself"
      fill={true}
      style={{ objectFit: 'cover' }}
      id="careerImg"
    ></Image>
  ),
  edu: (
    <Image
      src="/img/about/education.jpg "
      alt="Picture of myself"
      fill={true}
      style={{ objectFit: 'cover' }}
      id="eduImg"
    ></Image>
  ),
  typescript: (
    <div className={styles.logo}>
      <Image
        src="/img/about/typescript.png"
        alt="TypeScript logo"
        width={50}
        height={50}
        style={{ objectFit: 'scale-down' }}
      ></Image>
      <p>TypeScript</p>
    </div>
  ),
  react: (
    <div className={styles.logo}>
      <Image
        src="/img/about/react.svg"
        alt="React logo"
        width={50}
        height={50}
      ></Image>
      <p>React</p>
    </div>
  ),
  mobx: (
    <div className={styles.logo}>
      <Image
        src="/img/about/mobx.png"
        alt="MobX logo"
        width={50}
        height={50}
      ></Image>
      <p>MobX</p>
    </div>
  ),
  html: (
    <div className={styles.logo}>
      <Image
        src="/img/about/html.svg"
        alt="HTML logo"
        width={50}
        height={50}
      ></Image>
      <p>HTML</p>
    </div>
  ),
  css: (
    <div className={styles.logo}>
      <Image
        src="/img/about/css.svg"
        alt="CSS logo"
        width={50}
        height={50}
      ></Image>
      <p>CSS</p>
    </div>
  ),
  javascript: (
    <div className={styles.logo}>
      <Image
        src="/img/about/javascript.png"
        alt="JavaScript logo"
        width={50}
        height={50}
      ></Image>
      <p>JavaScript</p>
    </div>
  ),
  electron: (
    <div className={styles.logo}>
      <Image
        src="/img/about/electron.svg"
        alt="Electron logo"
        width={50}
        height={50}
      ></Image>
      <p>Electron</p>
    </div>
  ),
  jest: (
    <div className={styles.logo}>
      <Image
        src="/img/about/jest.png"
        alt="Jest logo"
        width={50}
        height={50}
      ></Image>
      <p>Jest</p>
    </div>
  ),
  gitlab: (
    <div className={styles.logo}>
      <Image
        src="/img/about/gitlab.svg"
        alt="GitLab logo"
        width={50}
        height={50}
      ></Image>
      <p>GitLab</p>
    </div>
  ),
  github: (
    <div className={styles.logo}>
      <Image
        src="/img/github.svg"
        alt="GitHub logo"
        width={50}
        height={50}
      ></Image>
      <p>GitHub</p>
    </div>
  ),
  cpp: (
    <div className={styles.logo}>
      <Image
        src="/img/about/cpp.svg"
        alt="C++ logo"
        width={50}
        height={50}
      ></Image>
      <p>C++</p>
    </div>
  ),
};
