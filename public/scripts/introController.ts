// intersection observer for scrollThrs;
export function initIntroObserver() {
  const introTitle = document.getElementById('introTitle');
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

  let changeText = (
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
      }
    });
  };
  let observer = new IntersectionObserver(changeText, { threshold: [0.5, 1] });
  observer.observe(scrollThrs);
}
