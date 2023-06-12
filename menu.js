const $homeBtn = document.querySelector("#homeBtn");
const $mbtiBtn = document.querySelector("#mbtiBtn");
const $similarBtn = document.querySelector("#similarBtn");
const $movieRecommend = document.querySelector("#movieRecommend");
const $mbtiRecommend = document.querySelector("#mbtiRecommend");
const $similarRecommend = document.querySelector("#similarRecommend");

function hideMenu(menu1, menu2) {
  menu1.style.display = "none";
  menu2.style.display = "none";
}

function showMenu(menu1) {
  menu1.style.display = "block";
}

function changeToMain() {
  hideMenu($mbtiRecommend, $similarRecommend);
  showMenu($movieRecommend);
}

function changeToMBTI() {
  hideMenu($movieRecommend, $similarRecommend);
  showMenu($mbtiRecommend);
}

function changeToSimilar() {
  hideMenu($movieRecommend, $mbtiRecommend);
  showMenu($similarRecommend);
}

$homeBtn.addEventListener("click", changeToMain);
$mbtiBtn.addEventListener("click", changeToMBTI);
$similarBtn.addEventListener("click", changeToSimilar);
