import styles from './project.module.css';
import Image from 'next/image';

export default function SuperOffice({ page }: { page: number }) {
  const content = (
    <div className={styles.item}>
      <h2>
        <span className={styles.highlight}>SuperOffice</span>
        <span className={styles.affilation}>@TmaxOffice</span>
      </h2>
      <div className={styles.itemCoverImg}>
        <div>{images.img1}</div>
        <div>{images.img2}</div>
      </div>
      <ul>
        <li>
          <span className={styles.highlight}>
            Web / Electron 문서 편집 프로그램 &apos;SuperOffice&apos;
          </span>{' '}
          개발
          <br />
          (Word processor, presentation 프로그램 표 공통 기능 담당)
        </li>
        <li>
          Client에서의{' '}
          <span className={styles.highlight}>문서 정보 관리 모델</span> 및
          다양한 <span className={styles.highlight}>UI 기능</span> 설계, 개발
        </li>
        <li>
          <span className={styles.highlight}>
            실시간 다중 사용자 동시 편집 기능
          </span>{' '}
          구현
        </li>
        <li>
          Chromium rendering engine(Blink)에 문서 pagination을 위한{' '}
          <span className={styles.highlight}>custom layout algorithm</span> 개발
        </li>
        <li>
          서울시 교육청 및 육군 본부 클라우드 기반 문서 관리 협업 플랫폼 구축
          프로젝트에 참여
        </li>
        <li>
          <span className={styles.highlight}>
            React, MobX, TypeScript, CSS in JS
          </span>
          를 사용한 Front-end 개발,{' '}
          <span className={styles.highlight}>Jest</span>를 이용한 테스트 작성 및{' '}
          <span className={styles.highlight}>GitLab</span>을 통한 협업 경험
        </li>
      </ul>
    </div>
  );

  return (
    <div className={styles.page}>
      <div>
        <div className={styles.index}>
          <p>&nbsp;Project #{page}</p>
        </div>
        {content}
      </div>
      <div>
        <div className={styles.index}></div>
      </div>
    </div>
  );
}

const images = {
  img1: (
    <Image
      src="/img/project/superoffice.png"
      alt="SuperOffice"
      fill={true}
      style={{ objectFit: 'contain', borderRadius: '5px' }}
    ></Image>
  ),
  img2: (
    <Image
      src="/img/project/superword.jpg"
      alt="SuperOffice"
      fill={true}
      style={{
        objectFit: 'cover',
        borderRadius: '5px',
        objectPosition: 'center top',
      }}
    ></Image>
  ),
};
