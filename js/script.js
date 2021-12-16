const slides = document.querySelectorAll('.slide-item');
const prevButton = document.querySelector('.slide-btn-prev');
const nextButton = document.querySelector('.slide-btn-next');
let curSlide = 0;
let clickFlag = true;

const slideAnimation = (isRight = true) => {
  if (isRight) {
    slides[curSlide++].classList.remove('slide-show');
    if (curSlide === slides.length) curSlide = 0;
    slides[curSlide].classList.add('slide-show');
  } else {
    slides[curSlide--].classList.remove('slide-show');
    if (curSlide === -1) curSlide = slides.length - 1;
    slides[curSlide].classList.add('slide-show');
  }
};

let slideTimer = setInterval(slideAnimation, 5000);

let wait = time => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

prevButton.addEventListener('click', () => {
  if (!clickFlag) return;
  clearInterval(slideTimer);
  slideAnimation(false);
  clickFlag = false;
  wait(1000).then(() => {
    slideTimer = setInterval(slideAnimation, 5000);
    clickFlag = true;
  });
});

nextButton.addEventListener('click', () => {
  if (!clickFlag) return;
  clearInterval(slideTimer);
  slideAnimation();
  clickFlag = false;
  wait(1000).then(() => {
    slideTimer = setInterval(slideAnimation, 5000);
    clickFlag = true;
  });
});