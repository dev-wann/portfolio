import styles from './project.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio({ page }: { page: number }) {
  const content = (
    <div className={styles.item}>
      <h2>
        <span className={styles.highlight}>Portfolio page</span>
        <Link
          href="https://github.com/dev-wann/portfolio"
          target="_blank"
          onMouseDown={(e) => e.stopPropagation()}
          className={styles.linkIcon}
        >
          {images.github}
        </Link>
        <span className={styles.affilation}>개인 프로젝트</span>
      </h2>
      <div className={styles.itemCoverImg}>
        <div>{images.img1}</div>
        <div>{images.img2}</div>
      </div>
      <ul>
        <li>
          지금 보고 계신{' '}
          <span className={styles.highlight}>바로 이 페이지</span>
          입니다.
        </li>
        <li>
          <span className={styles.highlight}>Next.js, TypeScript, CSS</span>를
          이용하여 개발되었습니다.
        </li>
        <li>
          두 가지의 목적을 가지고 제작되었습니다.
          <ul>
            <li style={{ margin: '4px 0' }}>
              <span className={styles.highlight}>Next.js 경험</span>을 겸한
              사이드 프로젝트
            </li>
            <li style={{ margin: '4px 0' }}>
              <span className={styles.highlight}>
                마우스를 통한 다양한 사용자 인터랙션
              </span>
              구현
            </li>
          </ul>
        </li>
        <li>
          개인 블로그에 간단한 작업기를 남겨두었습니다.{' '}
          <Link
            href="https://dev-wann.tistory.com/category/Projects/Portfolio"
            target="_blank"
            onMouseDown={(e) => e.stopPropagation()}
            className={styles.highlight}
            style={{ color: 'navy', textDecoration: 'none' }}
          >
            (Link)
          </Link>
        </li>
        <li>
          p.s.{' '}
          <span className={styles.highlight}>
            &lt;canvas&gt;를 활용한 그래픽 작업
          </span>
          은 우연히 시작했으나 이 프로젝트에서 가장 재미있었습니다.
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
      src="/img/project/portfolio_about.jpg"
      alt="Portfolio"
      fill={true}
      style={{ objectFit: 'cover', borderRadius: '5px' }}
    ></Image>
  ),
  img2: (
    <Image
      src="/img/project/portfolio_welcome.jpg"
      alt="Portfolio"
      fill={true}
      style={{
        objectFit: 'cover',
        borderRadius: '5px',
        objectPosition: 'center top',
      }}
    ></Image>
  ),
  github: (
    <Image
      src="/img/github.svg"
      alt="GitHub logo"
      fill={true}
      style={{ objectFit: 'contain', filter: 'invert(100%)' }}
    ></Image>
  ),
};
