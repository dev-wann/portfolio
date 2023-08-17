import styles from './project.module.css';
import Image from 'next/image';

export default function ToOffice({ page }: { page: number }) {
  const content = (
    <div className={styles.item}>
      <h2>
        <span className={styles.highlight}>ToOffice</span>
        <span className={styles.affilation}>@TmaxOS</span>
      </h2>
      <div className={styles.itemCoverImg}>
        <div>{images.img1}</div>
        <div>{images.img2}</div>
      </div>
      <ul>
        <li>
          <span className={styles.highlight}>
            Desktop 문서 편집 프로그램 &apos;ToOffice&apos;
          </span>{' '}
          개발 (Windows / Linux / TmaxOS 운영체제)
          <br />
          (Word processor, presentation 프로그램 표 기능 및 spreadsheet 표 서식
          기능 담당)
        </li>
        <li>
          문서 <span className={styles.highlight}>layout algorithm</span> 및
          다양한 <span className={styles.highlight}>UI 기능</span> 설계, 개발
        </li>
        <li>
          Layout algorithm 로직 개선을 통한{' '}
          <span className={styles.highlight}>프로그램 성능 개선</span> 진행
        </li>
        <li>
          <span className={styles.highlight}>Legacy code refactoring</span> 작업
          진행
        </li>
        <li>
          특허청 사업 명세서 작성기 및 한국교육학술정보원(KERIS) 서식 작성기
          개발 프로젝트 참여
        </li>
        <li>
          <span className={styles.highlight}>C++</span>를 사용한 개발 및{' '}
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
      src="/img/project/tooffice.jpg"
      alt="ToOffice"
      fill={true}
      style={{ objectFit: 'cover', borderRadius: '5px' }}
    ></Image>
  ),
  img2: (
    <Image
      src="/img/project/toword.jpg"
      alt="ToOffice"
      fill={true}
      style={{
        objectFit: 'cover',
        borderRadius: '5px',
        objectPosition: 'center top',
      }}
    ></Image>
  ),
};
