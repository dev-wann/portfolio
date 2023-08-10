export default class Typing {
  constructor(
    element: HTMLElement | null,
    options: {
      str: string;
      speed?: number;
      backSpeed?: number;
      preDelay?: number;
      postDelay?: number;
      // cursorType?: string; // 'text' or 'dot'
      showCursor?: boolean;
      removeCursorAtFinish?: boolean;
    }
  ) {
    this.element = element;
    this.str = options.str || '';
    this.speed = options.speed || 20;
    this.backSpeed = options.backSpeed || 20;
    this.preDelay = options.preDelay || 0;
    this.postDelay = options.postDelay || 0;
    this.cursorType = 'typing-cursor-text';
    this.showCursor =
      options.showCursor === undefined ? true : options.showCursor;
    this.removeCursorAtFinish = options.removeCursorAtFinish || false;
    this.curIdx = 0;
  }

  element: HTMLSpanElement | null;
  str: string;
  speed: number; // char per second
  backSpeed: number; // char per second
  preDelay: number; // ms
  postDelay: number; // ms
  cursorType: string; // 'typing-cursor-text' or 'typing-cursor-dot'
  showCursor: boolean;
  removeCursorAtFinish: boolean;
  curIdx: number;
  timeoutID?: number;

  async start() {
    await this.wait(this.preDelay);
    if (this.showCursor) this.addCursor();
    while (this.curIdx < this.str.length) {
      await this.write();
    }
    await this.wait(this.postDelay);
    if (this.showCursor && this.removeCursorAtFinish) {
      this.removeCursor();
    }
    return new Promise((res) => res(''));
  }

  async clear() {
    clearTimeout(this.timeoutID);
    while (this.curIdx > 0) {
      await this.backspace();
    }
  }

  async restart() {
    clearTimeout(this.timeoutID);
    if (this.showCursor) this.addCursor();
    while (this.curIdx < this.str.length) {
      await this.write();
    }
    await this.wait(this.postDelay);
    if (this.showCursor && this.removeCursorAtFinish) {
      this.removeCursor();
    }
  }

  async write() {
    if (!this.element) return false;
    this.curIdx += 1;
    this.element.innerText = this.str.slice(0, this.curIdx);
    await this.wait(1000 / this.speed);
  }

  async backspace() {
    if (!this.element) return false;
    this.curIdx -= 1;
    this.element.innerText = this.str.slice(0, this.curIdx);
    await this.wait(1000 / this.backSpeed);
  }

  wait(ms: number) {
    return new Promise((res) => {
      this.timeoutID = window.setTimeout(res, ms);
    });
  }

  addCursor() {
    this.element?.classList.add(this.cursorType);
  }

  removeCursor() {
    this.element?.classList.remove(this.cursorType);
  }
}
