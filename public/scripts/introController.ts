import Typing from './typing';
import styles from '/app/components/intro/intro.module.css';

export function initIntroObserver(typeTitleSub: Typing) {
  observeTitle();
  observeBackground();
  observeDescriptionText(typeTitleSub);
}

function observeTitle() {
  const introTitle = document.getElementById('introTitle');
  const firstBackground = document
    .getElementsByClassName(styles.background)
    .item(0);

  // undefined check
  if (!introTitle || !firstBackground) return;

  // callback for observer
  const changeTitleSize = (
    entries: IntersectionObserverEntry[],
    _observer: IntersectionObserver
  ) => {
    entries.forEach((entry) => {
      if (entry.target !== firstBackground) return;
      if (entry.isIntersecting) {
        introTitle.style.fontSize = '3em';
      } else {
        introTitle.style.fontSize = '6em';
      }
    });
  };

  const observer = new IntersectionObserver(changeTitleSize, {
    threshold: 0.3,
  });
  observer.observe(firstBackground);
}

function observeBackground() {
  // callback for observer
  const showBackground = (
    entries: IntersectionObserverEntry[],
    _observer: IntersectionObserver
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).style.opacity = '1';
      } else {
        (entry.target as HTMLElement).style.opacity = '0';
      }
    });
  };

  const observer = new IntersectionObserver(showBackground, {
    threshold: 0.5,
  });

  const backgrounds = document.getElementsByClassName(styles.background);
  for (let i = 0; i < backgrounds.length; i += 1) {
    observer.observe(backgrounds.item(i) as Element);
  }
}

function observeDescriptionText(typeTitleSub: Typing) {
  const introText1_before = document.getElementById('introText1_before');
  const introText1_after = document.getElementById('introText1_after');
  const introText2_before = document.getElementById('introText2_before');
  const introText2_after = document.getElementById('introText2_after');
  const introText3_before = document.getElementById('introText3_before');
  const introText3_after = document.getElementById('introText3_after');
  const scrollThrs = document.getElementById('scrollThrs');

  // undefined check
  if (
    !scrollThrs ||
    !introText1_before ||
    !introText1_after ||
    !introText2_before ||
    !introText2_after ||
    !introText3_before ||
    !introText3_after
  ) {
    return;
  }

  // callback for observer
  const changeText = (
    entries: IntersectionObserverEntry[],
    _observer: IntersectionObserver
  ) => {
    entries.forEach((entry) => {
      if (entry.target !== scrollThrs) return;
      if (entry.isIntersecting) {
        introText1_before.style.opacity = '0.6';
        introText2_before.style.opacity = '0.6';
        introText3_before.style.opacity = '0.6';
        introText1_before.style.transform = 'translate(0, 150%)';
        introText2_before.style.transform = 'translate(0, 150%)';
        introText3_before.style.transform = 'translate(0, 150%)';
        introText1_after.style.opacity = '1';
        introText2_after.style.opacity = '1';
        introText3_after.style.opacity = '1';
        typeTitleSub.start();
      } else if (entry.boundingClientRect.top > 0) {
        introText1_before.style.opacity = '1';
        introText2_before.style.opacity = '1';
        introText3_before.style.opacity = '1';
        introText1_before.style.transform = 'translate(0, 0)';
        introText2_before.style.transform = 'translate(0, 0)';
        introText3_before.style.transform = 'translate(0, 0)';
        introText1_after.style.opacity = '0';
        introText2_after.style.opacity = '0';
        introText3_after.style.opacity = '0';
        typeTitleSub.clear();
      }
    });
  };

  const observer = new IntersectionObserver(changeText, {
    threshold: 0.5,
  });
  observer.observe(scrollThrs);
}
