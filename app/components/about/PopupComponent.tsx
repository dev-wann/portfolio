import Image from 'next/image';
import styles from './popup.module.css';
import { closePopup } from '@/public/scripts/popupController';

export default function PopupComponent() {
  if (typeof window !== 'undefined')
    document.addEventListener('click', closePopup);

  const closeButton = (
    <Image src="/img/popup/close.svg" alt="close" fill={true}></Image>
  );

  const img1 = (
    <Image
      src="/img/popup/tmi_1.jpg"
      alt="picture of myself"
      fill={true}
      style={{ objectFit: 'cover' }}
    ></Image>
  );

  const img2 = (
    <Image
      src="/img/popup/tmi_2.jpg"
      alt="picture of myself"
      fill={true}
      style={{ objectFit: 'cover' }}
    ></Image>
  );

  const img3 = (
    <Image
      src="/img/popup/tmi_3.jpg"
      alt="picture of myself"
      fill={true}
      style={{ objectFit: 'cover' }}
    ></Image>
  );

  const img4 = (
    <Image
      src="/img/popup/tmi_4.jpg"
      alt="picture of myself"
      fill={true}
      style={{ objectFit: 'cover' }}
    ></Image>
  );

  return (
    <div
      className={styles.popup}
      id="popup"
      style={{ right: '0px' }}
      onClick={(e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
      }}
    >
      <div className={styles.header}>
        <span>TMI about me</span>
        <div className={styles.close} onClick={closePopup}>
          {closeButton}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.gallery} id="gallery">
          {img1}
          {img2}
          {img3}
          {img4}
        </div>
        <div className={styles.desc}>
          <div>
            <h2>개발자로서의 여정</h2>
            <p>
              2019년 하반기 첫 회사 생활과 함께 개발자로서의 여정을
              시작했습니다. 2023년 기준으로, 어느새 일을 시작한 지도 4년 정도
              되었고 회사에서도 좋은 평가를 받으며 지내왔습니다만, 새로움에 대한
              갈망이 저를 압도하여 도전의 길에 들어서게 되었습니다.
            </p>
            <p>
              직관적으로 이해하기 쉽고 효율적이며 자연스레 사용자의 행동을
              유도하는 UI 개발에 관심이 많습니다. 따라서 앞으로 프론트엔드
              개발자로서 역량을 더욱 키워나가고자 합니다.
            </p>
          </div>
          <div>
            <h2>새로움</h2>
            <p>
              인간은 누구나 자기모순 속에서 살아가는 존재라고 합니다. 평화를
              바라면서 끊임없이 갈등을 일으키고, 환경보호를 말하면서도 일신의
              편리함만을 추구합니다.
            </p>
            <p>
              이런 거창한 것은 아니지만 제 안에도 항상 대립하는 두 욕구가
              있습니다. 바로 새로움에 대한 갈망과 현재에 대한 집착입니다. 두
              마음은 엎치락뒤치락하며 시기에 따라 서로 다른 결정을 내리며 제
              삶을 이끌어갑니다. 대부분의 경우 어떤 새로운 일에 질릴 때까지
              빠져있다가 어느새 훌쩍 떠나 다른 새로운 일을 시작하는 형태로
              발현이 되더군요. 덕분에 광전자공학이나 quantum optics 같은 주제로
              연구도 해보고, 밴드를 만들어 앨범도 내보고, 회사 들어가 개발도
              하면서 제 나름대로 버라이어티하게 살아왔습니다.
            </p>
            <p>
              다행히도 이러한 제 특성은 개발자란 업에 잘 어울린다고 생각합니다.
              하나의 서비스에 매달려 질릴 때까지 일할 수 있으면서도 옆을
              돌아보면 언제든지 뛰어들 새로운 기술이 마구 생겨나고 있기
              때문입니다.
              <br />
              <span
                style={{
                  display: 'inline-block',
                  margin: '0.8em 0 0 0',
                  fontWeight: 'bold',
                }}
              >
                앞으로 저를 질리도록 빠져들게 할 새로운 도전들이 가득하기를
                기대하고 있습니다.
              </span>
            </p>
          </div>
          <p style={{ textIndent: '0', marginBottom: '0' }}>2023.08.15</p>
        </div>
      </div>
    </div>
  );
}
