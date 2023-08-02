export function organizeFolder() {
  const pages = document.getElementById('pages');
  if (!pages) return;
  const pageNum = pages.children.length;

  for (let i = 0; i < pageNum; i += 1) {
    let page = pages.children.item(i) as HTMLElement;
    page.style.zIndex = `${pageNum - i}`;
    page.style.left = `${(i * 20) / (pageNum - 1)}px`;
    page.style.bottom = `${(i * 20) / (pageNum - 1) + 40}px`;
    if (i !== 0 && i !== pageNum - 1) {
      // index 생성
      let index = page.children.item(2)?.children.item(0) as HTMLElement;
      if (index) {
        index.style.left = `calc(15px + (100% - 30px - 20vw) * ${
          (i - 1) / (pageNum - 3)
        })`;
      }
    }
  }
  adjustBrightness(0);
}

export function flipBack(page: number) {
  const pages = document.getElementById('pages');
  if (!pages) return false;
  if (page >= pages.children.length - 1) return false;

  let curPage = pages.children.item(page) as HTMLElement;
  if (!curPage) return false;

  for (let i = 0; i < curPage.children.length; i += 1) {
    let child = curPage.children.item(i) as HTMLElement;
    child.style.transform = 'rotateX(-100deg)';
  }
  curPage.style.zIndex = `${page + pages.children.length}`;

  // flipForward 시 backface 순서 역전되는 현상 방지
  window.setTimeout(() => {
    curPage.style.zIndex = `${page + 1}`;
  }, 500);

  adjustBrightness(page + 1);

  return true;
}

export function flipForward(page: number) {
  if (page <= 0) return false;
  const pages = document.getElementById('pages');
  if (!pages) return false;

  let curPage = pages.children.item(page - 1) as HTMLElement;
  if (!curPage) return;

  for (let i = 0; i < curPage.children.length; i += 1) {
    let child = curPage.children.item(i) as HTMLElement;
    child.style.transform = 'rotateX(0)';
  }
  curPage.style.zIndex = `${pages.children.length - page + 1}`;

  adjustBrightness(page - 1);

  return true;
}

export function initFlip() {
  const pages = document.getElementById('pages');
  if (!pages) return false;

  let time = 0;
  for (let i = pages.children.length - 1; i >= 0; i -= 1) {
    setTimeout(() => {
      flipForward(i);
    }, time);
    time += 100;
  }
  adjustBrightness(0);
}

function adjustBrightness(start: number) {
  const pages = document.getElementById('pages');
  if (!pages) return;
  const pageNum = pages.children.length;

  function changeBrightness(element: Element | null, i: number) {
    if (!element) return;
    (element as HTMLElement).style.filter = `brightness(${
      100 - (40 / (pageNum - 1)) * (i - start)
    }%)`;
  }

  for (let i = start; i < pageNum; i += 1) {
    let page = pages.children.item(i) as HTMLElement;
    changeBrightness(page.children.item(0), i);
    changeBrightness(page.children.item(2), i);
  }
}

export function isLastPage(page: number) {
  const pages = document.getElementById('pages');
  return pages?.children.length === page + 1;
}
