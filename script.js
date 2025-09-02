const track = document.querySelector('.carrusel-track');
const btnPrev = document.querySelector('.carrusel-btn.prev');
const btnNext = document.querySelector('.carrusel-btn.next');
const cards = document.querySelectorAll('.producto-card');

let index = 0;
const cardWidth = 400;

function updateCarousel() {
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

btnNext.addEventListener('click', () => {
  index++;
  if (index >= cards.length) index = 0;
  updateCarousel();
});

btnPrev.addEventListener('click', () => {
  index--;
  if (index < 0) index = cards.length - 1;
  updateCarousel();
});
