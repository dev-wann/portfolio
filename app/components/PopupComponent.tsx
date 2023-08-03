import Image from 'next/image';
import styles from './popup.module.css';
import { closePopup } from '@/public/scripts/popupController';

export default function PopupComponent() {
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
            <div>
              <h2>Item</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, asperiores fuga facilis sint minus maiores alias,
                delectus iure cupiditate, autem suscipit amet beatae. Recusandae
                dolore vel consequatur nemo veniam voluptatibus.
              </p>
            </div>
            <div>
              <h2>Item</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, asperiores fuga facilis sint minus maiores alias,
                delectus iure cupiditate, autem suscipit amet beatae. Recusandae
                dolore vel consequatur nemo veniam voluptatibus.
              </p>
            </div>
            <div>
              <h2>Item</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, asperiores fuga facilis sint minus maiores alias,
                delectus iure cupiditate, autem suscipit amet beatae. Recusandae
                dolore vel consequatur nemo veniam voluptatibus.
              </p>
            </div>
            <div>
              <h2>Item</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, asperiores fuga facilis sint minus maiores alias,
                delectus iure cupiditate, autem suscipit amet beatae. Recusandae
                dolore vel consequatur nemo veniam voluptatibus.
              </p>
            </div>
          </div>
        </div>
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
  );
}
