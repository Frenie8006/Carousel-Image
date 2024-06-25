'use strict';

const carousel = document.querySelector('.carousel__container');
const imgs = document.querySelectorAll('.carousel__container__img');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let slideCount = 0;
const maxSlide = imgs.length;

const nextSlide = function () {
  slideCount++;

  if (slideCount === maxSlide) slideCount = 0;

  carousel.style.transform = `translateX(-${slideCount * 100}%)`;

  resetInterval();
};

const prevSlide = function () {
  if (slideCount === 0) slideCount = maxSlide - 1;
  else slideCount--;

  carousel.style.transform = `translateX(-${slideCount * 100}%)`;

  resetInterval();
};

// Buttons for previous and next event functions
rightBtn.addEventListener('click', nextSlide);
leftBtn.addEventListener('click', prevSlide);

// Keyword event to transition to next slide
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') nextSlide();
  e.key === 'ArrowLeft' && prevSlide();
});

// Automatically slide to next image in every 3s
let interval = setInterval(nextSlide, 3000);

const resetInterval = function () {
  clearInterval(interval);
  interval = setInterval(nextSlide, 3000);
};
