// Carousel 제어를 위한 javascript

// Carousel, Carousel 좌우 버튼의 QuerySelector
const $carousel = document.querySelector("#carousel");
const $leftButton = document.querySelector("#leftButton");
const $rightButton = document.querySelector("#rightButton");

// 현재 Carousel의 위치 값
let currentValue = 0;

/**
 * Carousel을 왼쪽으로 이동시키는 함수 - carousel.js
 */
function slideLeft() {
  if (mdScreen.matches) {
    // 중형 디바이스 이상
    currentValue += 275;
    if (currentValue >= 200) {
      // 조건 발동 시 Carousel 끝으로 이동
      currentValue = -1650;
    }
    $carousel.style.transform = `translateX(${currentValue}px)`;
  } else {
    // 소형 디바이스
    currentValue += 284;
    if (currentValue >= 200) {
      // 조건 발동 시 Carousel 끝으로 이동
      currentValue = -2271;
    }
    $carousel.style.transform = `translateX(${currentValue}px)`;
  }
}

/**
 * Carousel을 오른쪽으로 이동시키는 함수 - carousel.js
 */
function slideRight() {
  if (mdScreen.matches) {
    // 중형 디바이스 이상
    currentValue -= 275;
    if (currentValue <= -1800) {
      // 조건 발동 시 Carousel 끝으로 이동
      currentValue = 0;
    }
    $carousel.style.transform = `translateX(${currentValue}px)`;
  } else {
    // 소형 디바이스
    currentValue -= 284;
    if (currentValue <= -2300) {
      // 조건 발동 시 Carousel 끝으로 이동
      currentValue = 0;
    }
    $carousel.style.transform = `translateX(${currentValue}px)`;
  }
}

// $leftButton 클릭 시 slideLeft() 실행
$leftButton.addEventListener("click", slideLeft);

// $rightButton 클릭 시 slideRight() 실행
$rightButton.addEventListener("click", slideRight);
