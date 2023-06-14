// 메뉴 간 이동을 위한 javascript

// 메뉴 이동 버튼 및 변경되는 Contents의 QuerySelector
const $homeBtn = document.querySelector("#homeBtn");
const $mbtiBtn = document.querySelector("#mbtiBtn");
const $similarGenreBtn = document.querySelector("#similarGenreBtn");
const $movieRecommend = document.querySelector("#movieRecommend");
const $mbtiRecommend = document.querySelector("#mbtiRecommend");
const $similarGenreRecommend = document.querySelector("#similarGenreRecommend");

/**
 * 메뉴 2개를 비활성화 하는 함수 - menu.js
 * @param {string} menu1 비활성화 할 메뉴 1
 * @param {string} menu2 비활성화 할 메뉴 2
 */
function hideMenu(menu1, menu2) {
  menu1.style.display = "none";
  menu2.style.display = "none";
}

/**
 * 비활성화 된 메뉴를 활성화 하는 함수 - menu.js
 * @param {string} menu1 활성화 할 메뉴 1
 */
function showMenu(menu1) {
  menu1.style.display = "block";
}

/**
 * Main 화면(Recommend)만 활성화하고 나머지 메뉴는 비활성화 하는 함수 - menu.js
 */
function changeToMain() {
  hideMenu($mbtiRecommend, $similarGenreRecommend);
  showMenu($movieRecommend);
}

/**
 * MBTI 화면만 활성화하고 나머지 메뉴는 비활성화 하는 함수 - menu.js
 */
function changeToMBTI() {
  hideMenu($movieRecommend, $similarGenreRecommend);
  showMenu($mbtiRecommend);
}

/**
 * Similar Genre 화면만 활성화하고 나머지 메뉴는 비활성화 하는 함수 - menu.js
 */
function changeToSimilarGenre() {
  hideMenu($movieRecommend, $mbtiRecommend);
  showMenu($similarGenreRecommend);
}

// $homeBtn 클릭 시 changeToMain() 실행
$homeBtn.addEventListener("click", changeToMain);

// $mbtiBtn 클릭 시 changeToMBTI() 실행
$mbtiBtn.addEventListener("click", changeToMBTI);

// $similarGenreBtn 클릭 시 changeToSimilarGenre() 실행
$similarGenreBtn.addEventListener("click", changeToSimilarGenre);
