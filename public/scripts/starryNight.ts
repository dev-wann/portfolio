const STAR_NUM = 150;
const STAR_SPEED = 0.4;
const SHOOTING_STAR_SPEED = 8;
const TAIL_LENGTH = 150;
const pi = Math.PI;
const cos60 = Math.cos(pi / 3);
const sin60 = Math.sin(pi / 3);
const tan60 = Math.tan(pi / 3);
const blurRad = 3;
const blurInt = 0.5;

let canvas: HTMLCanvasElement;
let canvasWidth: number, canvasHeight: number;
let context: CanvasRenderingContext2D | null;
let intervalID: number;

const stars: Star[] = [];
let shootingStar: ShootingStar;
let shootingStarOffset: number;

class Star {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.size = 1;
    this.randomize();
  }

  x: number;
  y: number;
  size: number;

  randomize() {
    this.x = -canvasWidth * Math.random();
    this.y = canvasHeight * Math.pow(Math.random() * 0.7 + 0.25, 2);
    this.size = 2 * Math.pow(Math.random(), 2);
  }
}

class ShootingStar extends Star {
  randomize() {
    this.x =
      (canvasWidth - shootingStarOffset / 2) * Math.random() +
      1.5 * shootingStarOffset;
    this.y = -canvasHeight;
    this.size = 2;
  }
}

export function initStarrySky() {
  canvas = document.getElementById('starry_night') as HTMLCanvasElement;
  window.addEventListener('resize', () => resize(canvas));
  resize(canvas);

  let star;
  for (let i = 0; i < STAR_NUM; i += 1) {
    star = new Star();
    star.x = star.x * 2 + canvasWidth;
    stars.push(star);
  }
  shootingStar = new ShootingStar();
  shootingStar.x -= (canvasHeight * 0.5) / tan60;
  shootingStar.y += canvasHeight * 0.5;

  // initial draw
  draw();
  moveHills();

  const contactElement = document.getElementById('contact');
  const observer = new IntersectionObserver(
    (entries, _observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startDrawing();
          startParallex();
        } else {
          stopDrawing();
          stopParallex();
        }
      });
    },
    { threshold: 0.1 }
  );
  if (contactElement) observer.observe(contactElement);
}

function startDrawing() {
  intervalID = window.setInterval(draw, 1000 / 60);
}

function stopDrawing() {
  window.clearInterval(intervalID);
}

function draw() {
  if (!context) return;
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  context.fillStyle = '#ffffff';

  drawStar();
  drawShootingStar();
}

function drawStar() {
  if (!context) return;
  context.beginPath();
  let star;
  for (let i = 0; i < STAR_NUM; i += 1) {
    star = stars[i];
    star.x += STAR_SPEED;
    if (star.x > canvasWidth) star.randomize();
    if (star.x <= 0) continue;
    context.moveTo(star.x, star.y);
    context.arc(star.x, star.y, star.size, 0, 2 * pi);
    context.closePath();
  }
  context.fill();

  // blur effect
  for (let dr = 1; dr <= blurRad; dr += 1) {
    context.globalAlpha = (blurInt / blurRad) * (blurRad - dr);
    for (let i = 0; i < STAR_NUM; i += 1) {
      star = stars[i];
      if (star.x <= 0) continue;
      context.moveTo(star.x, star.y);
      context.arc(star.x, star.y, star.size + dr, 0, 2 * pi);
      context.closePath();
    }
    context.fill();
  }
  context.globalAlpha = 1;
}

function drawShootingStar() {
  if (!context) return;
  shootingStar.x -= SHOOTING_STAR_SPEED * cos60;
  shootingStar.y += SHOOTING_STAR_SPEED * sin60;
  if (shootingStar.y > canvasHeight + TAIL_LENGTH) shootingStar.randomize();
  if (shootingStar.y < 0) return;

  let x0 = shootingStar.x - shootingStar.size * sin60;
  let y0 = shootingStar.y - shootingStar.size * cos60;
  let x1 = shootingStar.x + TAIL_LENGTH * cos60;
  let y1 = shootingStar.y - TAIL_LENGTH * sin60;
  let x2 = shootingStar.x + shootingStar.size * sin60;
  let y2 = shootingStar.y + shootingStar.size * cos60;

  context.beginPath();
  context.moveTo(x0, y0);
  context.lineTo(x1, y1);
  context.lineTo(x2, y2);
  context.arc(
    shootingStar.x,
    shootingStar.y,
    shootingStar.size,
    -pi / 6,
    (5 / 6) * pi
  );
  context.closePath();
  context.fill();

  // blur effect
  let blurRad = 6;
  let size;
  for (let dr = 1; dr <= blurRad; dr += 1) {
    context.globalAlpha = (1 / (blurRad * blurRad)) * (blurRad - dr);
    size = shootingStar.size + dr;
    x0 = shootingStar.x - size * sin60;
    y0 = shootingStar.y - size * cos60;
    x1 = shootingStar.x + (TAIL_LENGTH + dr) * cos60;
    y1 = shootingStar.y - (TAIL_LENGTH + dr) * sin60;
    x2 = shootingStar.x + size * sin60;
    y2 = shootingStar.y + size * cos60;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.arc(shootingStar.x, shootingStar.y, size, -pi / 6, (5 / 6) * pi);
    context.closePath();
    context.fill();
  }

  context.globalAlpha = 1;
}

function resize(canvas: HTMLCanvasElement) {
  canvasWidth = canvas.width = window.innerWidth;
  canvasHeight = canvas.height = window.innerHeight;
  shootingStarOffset = canvasHeight / tan60;
  context = canvas.getContext('2d');
}

function startParallex() {
  window.addEventListener('scroll', moveHillsThrottled);
  window.addEventListener('scrollend', moveHills);
}

function stopParallex() {
  window.removeEventListener('scroll', moveHillsThrottled);
  window.removeEventListener('scrollend', moveHills);
}

let timerId: number | null;
function moveHillsThrottled() {
  if (timerId) return;
  timerId = window.setTimeout(() => {
    moveHills();
    timerId = null;
  }, 300);
}

function moveHills() {
  const hills = document.getElementsByClassName('hill');
  const ground = document.getElementById('ground');
  if (!hills || !ground) return;

  const hillNum = hills.length;
  if (hillNum === 0) return;

  let scrollRatio =
    (document.body.scrollHeight - window.scrollY) / window.innerHeight - 1;
  scrollRatio = Math.min(scrollRatio, 0.4);

  const scale = 1.5;
  const diff = 0.8;
  let hill: HTMLElement;
  let bottom;
  for (let i = 0; i < hillNum; i += 1) {
    hill = hills.item(hillNum - 1 - i) as HTMLElement;
    bottom =
      window.innerHeight * scale * scrollRatio * (1 - (i * diff) / hillNum);
    bottom = Math.max(bottom, 0);
    hill.style.bottom = `${bottom}px`;
  }
  bottom = Math.max(window.innerHeight * scale * scrollRatio, 0);
  ground.style.height = `${bottom}px`;
}
