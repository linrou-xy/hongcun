const slides = [...document.querySelectorAll('.slide')];
const dots = [...document.querySelectorAll('[data-slide]')];
let current = 0;
let timer;

function showSlide(index) {
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('is-active', i === current));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
}

function restart() {
  clearInterval(timer);
  timer = setInterval(() => showSlide(current + 1), 5500);
}

document.querySelector('[data-prev]').addEventListener('click', () => { showSlide(current - 1); restart(); });
document.querySelector('[data-next]').addEventListener('click', () => { showSlide(current + 1); restart(); });
dots.forEach((dot) => dot.addEventListener('click', () => { showSlide(Number(dot.dataset.slide)); restart(); }));
if (!new URLSearchParams(location.search).has('capture')) restart();
