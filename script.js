const track = document.querySelector('.carrusel-track');
const btnPrev = document.querySelector('.carrusel-btn.prev');
const btnNext = document.querySelector('.carrusel-btn.next');

let index = 0;

function getCardWidth() {
  const card = document.querySelector('.producto-card');
  if (!card) return 300;
  const style = getComputedStyle(card);
  return card.offsetWidth + (parseInt(style.marginRight) || 0);
}

function getMaxTranslate() {
  return Math.max(track.scrollWidth - document.querySelector('.carrusel').offsetWidth, 0);
}

function updateCarousel() {
  const translate = index * getCardWidth();
  track.style.transform = `translateX(-${Math.min(translate, getMaxTranslate())}px)`;
}

btnNext.addEventListener('click', () => {
  index++;
  if (index * getCardWidth() > getMaxTranslate() + getCardWidth()) index = 0;
  updateCarousel();
});

btnPrev.addEventListener('click', () => {
  index--;
  if (index < 0) index = track.children.length -1;
  updateCarousel();
});

window.addEventListener('resize', () => {
  if (index * getCardWidth() > getMaxTranslate()) {
    index = Math.floor(getMaxTranslate() / getCardWidth());
  }
  updateCarousel();
});
