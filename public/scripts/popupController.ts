let slideshowID: number;
let closeTimeoutID: number;

export function showPopup(e: React.MouseEvent) {
  let popup = document.getElementById('popup');
  if (!popup) return;
  if (popup.style.opacity === '1') return; // already opened
  popup.style.cssText = 'opacity: 1; z-index : 99; transform: scale(1);';
  startSlideShow();

  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
}

export function closePopup() {
  let popup = document.getElementById('popup');
  if (!popup) return;
  popup.style.cssText = 'opacity: 0; z-index : -99; transform: scale(0.5)';
  stopSlideShow();
}

function startSlideShow() {
  clear();
  clearTimeout(closeTimeoutID);

  const gallery = document.getElementById('gallery');
  if (!gallery) return;

  //initial setting
  (gallery.children.item(0) as HTMLElement).style.zIndex = '1';
  (gallery.children.item(1) as HTMLElement).style.transform =
    'translateX(100%)';
  for (let i = 2; i < gallery.children.length; i += 1) {
    (gallery.children.item(i) as HTMLElement).style.zIndex = '-1';
  }

  // slide images
  const itemNum = gallery.children.length;
  let state = 0;
  let before, cur, next;
  const slide = () => {
    before = gallery.children.item(state) as HTMLElement;
    cur = gallery.children.item((state + 1) % itemNum) as HTMLElement;
    next = gallery.children.item((state + 2) % itemNum) as HTMLElement;
    if (!before || !cur || !next) return;

    before.style.transform = 'translateX(-100%)';
    before.style.zIndex = '0';
    cur.style.transform = 'translateX(0%)';
    cur.style.zIndex = '1';
    next.style.transform = 'translateX(100%)';
    next.style.zIndex = '-1';
    state = (state + 1) % itemNum;
  };
  slideshowID = window.setTimeout(() => {
    slide();
    slideshowID = window.setInterval(slide, 4000);
  }, 3000);
}

function stopSlideShow() {
  clearInterval(slideshowID);
  closeTimeoutID = window.setTimeout(clear, 300);
}

function clear() {
  const gallery = document.getElementById('gallery');
  if (!gallery) return;
  let item;
  for (let i = 0; i < gallery.children.length; i += 1) {
    item = gallery.children.item(i) as HTMLElement;
    item.style.transform = '';
    item.style.zIndex = '';
  }
}
