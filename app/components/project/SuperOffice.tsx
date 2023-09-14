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
          (Word processor, presentation 앱 표 공통 기능 담당)
        </li>
        <li>
          Client에서의{' '}
          <span className={styles.highlight}>문서 정보 관리 모델</span> 및 20개
          이상의 <span className={styles.highlight}>문서 편집 UI 기능</span>{' '}
          설계, 개발
        </li>
        <li>
          <span className={styles.highlight}>실시간 다중 사용자 편집 기능</span>{' '}
          개발
        </li>
        <li>
          JS 로직 및 MobX 최적화를 통한{' '}
          <span className={styles.highlight}>~70%의 성능 개선</span>
        </li>
        <li>
          문서 pagination을 위한{' '}
          <span className={styles.highlight}>
            Blink custom layout algorithm
          </span>{' '}
          개발
        </li>
        <li>
          <span className={styles.highlight}>React, TypeScript, MobX</span>를
          이용한 Front-end 개발, <span className={styles.highlight}>Jest</span>
          를 이용한 테스트 작성 및{' '}
          <span className={styles.highlight}>GitLab</span>을 통한 협업 경험
        </li>
        <li>
          서울시교육청 및 대한민국 육군본부 &apos;클라우드 기반 문서 관리 협업
          플랫폼 구축&apos; 프로젝트 참여
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
