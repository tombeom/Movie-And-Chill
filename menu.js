const $homeBtn = document.querySelector("#homeBtn");
const $mbtiBtn = document.querySelector("#mbtiBtn");
const $genreBtn = document.querySelector("#genreBtn");
const $movieRecommend = document.querySelector("#movieRecommend");
const $mbtiRecommend = document.querySelector("#mbtiRecommend");
const $genreRecommend = document.querySelector("#genreRecommend");

function hideMenu(menu1, menu2) {
  menu1.style.display = "none";
  menu2.style.display = "none";
}

function showMenu(menu1) {
  menu1.style.display = "block";
}

function changeToMain() {
  hideMenu($mbtiRecommend, $genreRecommend);
  showMenu($movieRecommend);
}

function changeToMBTI() {
  hideMenu($movieRecommend, $genreRecommend);
  showMenu($mbtiRecommend);
}

function changeToGenre() {
  hideMenu($movieRecommend, $mbtiRecommend);
  showMenu($genreRecommend);
}

$homeBtn.addEventListener("click", changeToMain);
$mbtiBtn.addEventListener("click", changeToMBTI);
$genreBtn.addEventListener("click", changeToGenre);
