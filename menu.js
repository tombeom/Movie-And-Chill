const $homeBtn = document.querySelector("#homeBtn");
const $mbtiBtn = document.querySelector("#mbtiBtn");
const $similarGenreBtn = document.querySelector("#similarGenreBtn");
const $movieRecommend = document.querySelector("#movieRecommend");
const $mbtiRecommend = document.querySelector("#mbtiRecommend");
const $similarGenreRecommend = document.querySelector("#similarGenreRecommend");

function hideMenu(menu1, menu2) {
  menu1.style.display = "none";
  menu2.style.display = "none";
}

function showMenu(menu1) {
  menu1.style.display = "block";
}

function changeToMain() {
  hideMenu($mbtiRecommend, $similarGenreRecommend);
  showMenu($movieRecommend);
}

function changeToMBTI() {
  hideMenu($movieRecommend, $similarGenreRecommend);
  showMenu($mbtiRecommend);
}

function changeToSimilarGenre() {
  hideMenu($movieRecommend, $mbtiRecommend);
  showMenu($similarGenreRecommend);
}

$homeBtn.addEventListener("click", changeToMain);
$mbtiBtn.addEventListener("click", changeToMBTI);
$similarGenreBtn.addEventListener("click", changeToSimilarGenre);
