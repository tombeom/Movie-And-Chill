const $carousel = document.querySelector("#carousel");
const $leftButton = document.querySelector("#leftButton");
const $rightButton = document.querySelector("#rightButton");

let currentValue = 0;

function slideLeft() {
  if (mdScreen.matches) {
    currentValue += 275;
    if (currentValue >= 200) {
      currentValue = -1650;
    }
    $carousel.style.transform = `translateX(${currentValue}px)`;
  } else {
    currentValue += 284;
    if (currentValue >= 200) {
      currentValue = -2271;
    }
    $carousel.style.transform = `translateX(${currentValue}px)`;
  }
}

function slideRight() {
  if (mdScreen.matches) {
    currentValue -= 275;
    if (currentValue <= -1800) {
      currentValue = 0;
    }
    $carousel.style.transform = `translateX(${currentValue}px)`;
  } else {
    currentValue -= 284;
    if (currentValue <= -2300) {
      currentValue = 0;
    }
    $carousel.style.transform = `translateX(${currentValue}px)`;
  }
}

$leftButton.addEventListener("click", slideLeft);
$rightButton.addEventListener("click", slideRight);
