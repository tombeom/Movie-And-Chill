const $carousel = document.querySelector("#carousel");
const $leftButton = document.querySelector("#leftButton");
const $rightButton = document.querySelector("#rightButton");
const moveValue = 372;
const mixPos = 0;
const maxPos = -2220;
let currentValue = 0;

function slideLeft() {
  currentValue += moveValue;
  if (currentValue >= 200) {
    currentValue = maxPos;
  }
  //$carousel.className = `translate-x-[${currentValue}px]`;
  $carousel.style.transform = `translateX(${currentValue}px)`;
}

function slideRight() {
  currentValue -= moveValue;
  if (currentValue <= -2400) {
    currentValue = mixPos;
  }
  //$carousel.className = `translate-x-[${currentValue}px]`;
  $carousel.style.transform = `translateX(${currentValue}px)`;
}

$leftButton.addEventListener("click", slideLeft);
$rightButton.addEventListener("click", slideRight);

$leftButton.addEventListener("click", slideLeft);
$rightButton.addEventListener("click", slideRight);
