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

function cilckRecommendSendBtn() {
  let inputData1 = $recommendQuestion1Input.value.toString();
  let inputData2 = $recommendQuestion2Input.value.toString();
  let inputData3 = $recommendQuestion3Input.value.toString();
  let inputData4 = $recommendQuestion4Input.value.toString();

  if (inputData4 === "") {
    setMessageBoxContents(messageList[0]);
    openMessageBox();
  } else {
    let sendData =
      "오늘 날씨는 " +
      inputData1 +
      ". 그리고 " +
      inputData2 +
      " 분위기야." +
      " 나는 " +
      inputData3 +
      "와(과) " +
      inputData4 +
      "명이서 영화를 볼 건데 지금 볼만한 영화 추천해 줘";
    openChatModal("또 궁금한 점이 있으신가요?");
    addUserChat(sendData);
    addChatData("user", sendData);
    postData(chatData);
  }
}

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
  if ($recommendQuestion1Input.value.toString() === "") {
    setMessageBoxContents(messageList[0]);
    openMessageBox();
  } else {
    changeQuestions(
      $recommendQuestion2,
      $recommendQuestion1,
      $recommendQuestion3,
      $recommendQuestion4
    );
  }
});

$recommendQuestion1Input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if ($recommendQuestion1Input.value.toString() === "") {
      setMessageBoxContents(messageList[0]);
      openMessageBox();
    } else {
      changeQuestions(
        $recommendQuestion2,
        $recommendQuestion1,
        $recommendQuestion3,
        $recommendQuestion4
      );
    }
  }
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
  if ($recommendQuestion2Input.value.toString() === "") {
    setMessageBoxContents(messageList[0]);
    openMessageBox();
  } else {
    changeQuestions(
      $recommendQuestion3,
      $recommendQuestion1,
      $recommendQuestion2,
      $recommendQuestion4
    );
  }
});

$recommendQuestion2Input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if ($recommendQuestion2Input.value.toString() === "") {
      setMessageBoxContents(messageList[0]);
      openMessageBox();
    } else {
      changeQuestions(
        $recommendQuestion3,
        $recommendQuestion1,
        $recommendQuestion2,
        $recommendQuestion4
      );
    }
  }
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
  if ($recommendQuestion3Input.value.toString() === "") {
    setMessageBoxContents(messageList[0]);
    openMessageBox();
  } else {
    changeQuestions(
      $recommendQuestion4,
      $recommendQuestion1,
      $recommendQuestion2,
      $recommendQuestion3
    );
  }
});

$recommendQuestion3Input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if ($recommendQuestion3Input.value.toString() === "") {
      setMessageBoxContents(messageList[0]);
      openMessageBox();
    } else {
      changeQuestions(
        $recommendQuestion4,
        $recommendQuestion1,
        $recommendQuestion2,
        $recommendQuestion3
      );
    }
  }
});

$recommendQuestion4BeforeBtn.addEventListener("click", function () {
  changeQuestions(
    $recommendQuestion3,
    $recommendQuestion1,
    $recommendQuestion2,
    $recommendQuestion4
  );
});

$recommendQuestion4SendBtn.addEventListener("click", cilckRecommendSendBtn);

$recommendQuestion4Input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    cilckRecommendSendBtn();
  }
});
