const STAR_NUM = 500;
const STAR_SPEED = 0.4;
const SHOOTING_STAR_SPEED = 8;
const TAIL_LENGTH = 150;
const pi = Math.PI;
const cos60 = Math.cos(pi / 3);
const sin60 = Math.sin(pi / 3);
const tan60 = Math.tan(pi / 3);
const blurRad = 2;
const blurInt = 0.2;

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

  const contactElement = document.getElementById('contact');
  const observer = new IntersectionObserver(
    (entries, _observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) startDrawing();
        else stopDrawing();
      });
    },
    { threshold: 0.1 }
  );
  if (contactElement) observer.observe(contactElement);
}

export function startDrawing() {
  intervalID = window.setInterval(loop, 1000 / 60);
}

export function stopDrawing() {
  window.clearInterval(intervalID);
}

function loop() {
  if (!context) return;
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  context.fillStyle = '#ffffff';
  context.shadowColor = '#ffffff';
  context.shadowBlur = 8;

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
  context.globalAlpha = blurInt / blurRad;
  for (let i = 0; i < STAR_NUM; i += 1) {
    star = stars[i];
    if (star.x <= 0) continue;
    for (let dr = blurRad; dr > 0; dr -= 1) {
      context.moveTo(star.x, star.y);
      context.arc(star.x, star.y, star.size + dr, 0, 2 * pi);
      context.closePath();
    }
  }
  context.fill();
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
}

function resize(canvas: HTMLCanvasElement) {
  canvasWidth = canvas.width = window.innerWidth;
  canvasHeight = canvas.height = window.innerHeight;
  shootingStarOffset = canvasHeight / tan60;
  context = canvas.getContext('2d');
}
