const $recommendQuestion1 = document.querySelector("#recommendQuestion1");
const $recommendQuestion2 = document.querySelector("#recommendQuestion2");
const $recommendQuestion3 = document.querySelector("#recommendQuestion3");
const $recommendQuestion4 = document.querySelector("#recommendQuestion4");

const $recommendQuestion1Input = document.querySelector(
  "#recommendQuestion1Input"
);
const $recommendQuestion2Input = document.querySelector(
  "#recommendQuestion2Input"
);
const $recommendQuestion3Input = document.querySelector(
  "#recommendQuestion3Input"
);
const $recommendQuestion4Input = document.querySelector(
  "#recommendQuestion4Input"
);

const $recommendQuestion1NextBtn = document.querySelector(
  "#recommendQuestion1NextBtn"
);

const $recommendQuestion2BeforeBtn = document.querySelector(
  "#recommendQuestion2BeforeBtn"
);

const $recommendQuestion2NextBtn = document.querySelector(
  "#recommendQuestion2NextBtn"
);

const $recommendQuestion3BeforeBtn = document.querySelector(
  "#recommendQuestion3BeforeBtn"
);

const $recommendQuestion3NextBtn = document.querySelector(
  "#recommendQuestion3NextBtn"
);

const $recommendQuestion4BeforeBtn = document.querySelector(
  "#recommendQuestion4BeforeBtn"
);

const $recommendQuestion4SendBtn = document.querySelector(
  "#recommendQuestion4SendBtn"
);

function changeQuestions(
  showQuestion,
  hideQuestion1,
  hideQuestion2,
  hideQuestion3
) {
  showQuestion.style.display = "block";
  hideQuestion1.style.display = "none";
  hideQuestion2.style.display = "none";
  hideQuestion3.style.display = "none";
}

changeQuestions(
  $recommendQuestion1,
  $recommendQuestion2,
  $recommendQuestion3,
  $recommendQuestion4
);

$recommendQuestion1NextBtn.addEventListener("click", function () {
  changeQuestions(
    $recommendQuestion2,
    $recommendQuestion1,
    $recommendQuestion3,
    $recommendQuestion4
  );
});

$recommendQuestion2BeforeBtn.addEventListener("click", function () {
  changeQuestions(
    $recommendQuestion1,
    $recommendQuestion2,
    $recommendQuestion3,
    $recommendQuestion4
  );
});

$recommendQuestion2NextBtn.addEventListener("click", function () {
  changeQuestions(
    $recommendQuestion3,
    $recommendQuestion1,
    $recommendQuestion2,
    $recommendQuestion4
  );
});

$recommendQuestion3BeforeBtn.addEventListener("click", function () {
  changeQuestions(
    $recommendQuestion2,
    $recommendQuestion1,
    $recommendQuestion3,
    $recommendQuestion4
  );
});

$recommendQuestion3NextBtn.addEventListener("click", function () {
  changeQuestions(
    $recommendQuestion4,
    $recommendQuestion1,
    $recommendQuestion2,
    $recommendQuestion3
  );
});

$recommendQuestion4BeforeBtn.addEventListener("click", function () {
  changeQuestions(
    $recommendQuestion3,
    $recommendQuestion1,
    $recommendQuestion2,
    $recommendQuestion4
  );
});
