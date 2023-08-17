enum Status {
  NORMAL,
  START,
  CLEAR,
}

export default class Typing {
  constructor(
    element: HTMLElement | null,
    options: {
      str: string;
      speed?: number;
      backSpeed?: number;
      preDelay?: number;
      postDelay?: number;
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
    this.showCursor =
      options.showCursor === undefined ? true : options.showCursor;
    this.removeCursorAtFinish = options.removeCursorAtFinish || false;
    this.curIdx = 0;
    this.status = Status.NORMAL;
  }

  element: HTMLSpanElement | null;
  str: string;
  speed: number; // char per second
  backSpeed: number; // char per second
  preDelay: number; // ms
  postDelay: number; // ms
  showCursor: boolean;
  removeCursorAtFinish: boolean;
  curIdx: number;
  timeoutID?: number;
  status: number;

  async start() {
    this.status = Status.START;
    // preDelay
    await this.wait(this.preDelay);
    // write
    if (this.showCursor) this.addCursor('typing-cursor');
    while (this.curIdx < this.str.length) {
      if (this.status === Status.CLEAR) break;
      await this.write();
    }
    if (this.showCursor) {
      this.removeCursor();
      this.addCursor('waiting-cursor');
    }
    // postDelay
    await this.wait(this.postDelay);
    if (this.removeCursorAtFinish) this.removeCursor();

    this.status = Status.NORMAL;
    return new Promise((res) => res(''));
  }

  async clear() {
    this.status = Status.CLEAR;
    clearTimeout(this.timeoutID);
    if (this.showCursor) this.addCursor('typing-cursor');
    while (this.curIdx > 0) {
      if (this.status === Status.START) break;
      await this.backspace();
    }
    if (this.showCursor) {
      this.removeCursor();
      this.addCursor('waiting-cursor');
    }
    if (this.removeCursorAtFinish) this.removeCursor();
    this.status = Status.NORMAL;
  }

  async restart() {
    clearTimeout(this.timeoutID);
    if (this.showCursor) this.addCursor('typing-cursor');
    while (this.curIdx < this.str.length) {
      await this.write();
    }
    if (this.showCursor) {
      this.removeCursor();
      this.addCursor('waiting-cursor');
    }
    await this.wait(this.postDelay);
    if (this.removeCursorAtFinish) this.removeCursor();
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

  addCursor(cursor: string) {
    this.element?.classList.add(cursor);
  }

  removeCursor() {
    this.element?.classList.remove('typing-cursor');
    this.element?.classList.remove('waiting-cursor');
  }
}
