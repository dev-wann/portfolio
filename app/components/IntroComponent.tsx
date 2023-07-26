import styles from './intro.module.css';
import Image from 'next/image';

export default function IntroComponent() {
  const img1 = (
    <Image
      src="/img/intro_1.jpg"
      alt="Milkyway"
      fill={true}
      objectFit="cover"
    />
  );
  const img2 = (
    <Image
      src="/img/intro_2.jpg"
      alt="Tail of comet"
      fill={true}
      objectFit="cover"
    />
  );
  const img3 = (
    <Image
      src="/img/intro_3.jpg"
      alt="A person pointing at comet"
      fill={true}
      objectFit="cover"
    />
  );
  const background = (
    <div className={styles.container}>
      <div className={styles.item}>{img2}</div>
      <div className={styles.item}>{img1}</div>
      <div className={styles.item}>{img3}</div>
    </div>
  );

  const content = (
    <div className={styles.container}>
      <h1 className={styles.title}>혜성</h1>
      <div className={styles.item}>
        <h2 className={styles.title}>아름다운 흔적</h2>
        <p>혜성이 지나간 자리에 남는 아름다운 꼬리</p>
        <p>유기물의 집합체로 새로운 생명의 씨앗</p>
      </div>
      <div className={styles.item}>
        <div>
          <h2 className={styles.title}>Deep dive into the unknown</h2>
          <p>누구도 가보지 못한 우주를 끝없이, 또 두려움없이 탐험하는 존재</p>
        </div>
      </div>
      <div className={styles.item}>
        <h2 className={styles.title}>혜성과도 같은</h2>
        <p>
          어떤 분야에서 갑자기 뛰어나게 드러나는 존재를 비유적으로 이르는 말
        </p>
      </div>
    </div>
  );

  return (
    <>
      <div className="wrapper">
        <div className={styles.content}>{content}</div>
        <div className={styles.background}>{background}</div>
      </div>
      <div className={styles.scrollThr} id="scrollThr0"></div>
      <div className={styles.scrollThr} id="scrollThr1"></div>
      <div className={styles.scrollThr} id="scrollThr2"></div>
      <div className={styles.scrollThr} id="scrollThr3"></div>
      <div className={styles.scrollThr} id="scrollThr4"></div>
    </>
  );
}
