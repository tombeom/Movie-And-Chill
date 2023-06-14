// Recommend Menu 동작을 위한 javascript

// Recommend 내 질문 변경을 위한 QuerySelector
const $recommendQuestion1 = document.querySelector("#recommendQuestion1");
const $recommendQuestion2 = document.querySelector("#recommendQuestion2");
const $recommendQuestion3 = document.querySelector("#recommendQuestion3");
const $recommendQuestion4 = document.querySelector("#recommendQuestion4");

// Recommend의 입력 값을 받기 위한 QuerySelector
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

// Recommend 내 질문 변경을 위한 버튼의 QuerySelector
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

/**
 * Recommend Send Button을 클릭했을 때 실행되는 함수 - recommend.js
 */
function cilckRecommendSendBtn() {
  // 각 질문의 User 입력 값을 모두 가져온다
  let inputData1 = $recommendQuestion1Input.value.toString();
  let inputData2 = $recommendQuestion2Input.value.toString();
  let inputData3 = $recommendQuestion3Input.value.toString();
  let inputData4 = $recommendQuestion4Input.value.toString();

  // 4번째 질문의 답변이 공백이면 Message Box를 활성화하고, 공백이 아닐 경우에만 Server POST
  // 1, 2, 3 질문은 질문 변경 시 공백 여부 체크
  if (inputData4 === "") {
    setMessageBoxContents(messageList[0]);
    openMessageBox();
  } else {
    // User가 입력한 값을 바탕으로 Server에게 전송할 문자열 생성
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
    // Chat Modal 활성화
    openChatModal("또 궁금한 점이 있으신가요?");
    // 전송할 문자열을 출력
    addUserChat(sendData);
    // 전송할 문자열을 Chat Data에 추가
    addChatData("user", sendData);
    // Server POST
    postData(chatData);
  }
}

/**
 * 질문을 활성화 및 비활성화 하는 함수 - recommend.js
 * @param {querySelector} showQuestion 활성화 할 메뉴
 * @param {querySelector} hideQuestion1 비활성화 할 메뉴 1
 * @param {querySelector} hideQuestion2 비활성화 할 메뉴 2
 * @param {querySelector} hideQuestion3 비활성화 할 메뉴 3
 */
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

// index.html 로드 시 실행 (질문 화면 초기화)
changeQuestions(
  $recommendQuestion1,
  $recommendQuestion2,
  $recommendQuestion3,
  $recommendQuestion4
);

// $recommendQuestion1NextBtn 클릭 시 입력 값 공백 여부 체크하고 changeQuestions() 실행
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

// $recommendQuestion1Input 엔터 입력 시 입력 값 공백 여부 체크하고 changeQuestions() 실행
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

// $recommendQuestion2BeforeBtn 클릭 시 changeQuestions() 실행
$recommendQuestion2BeforeBtn.addEventListener("click", function () {
  changeQuestions(
    $recommendQuestion1,
    $recommendQuestion2,
    $recommendQuestion3,
    $recommendQuestion4
  );
});

// $recommendQuestion2NextBtn 클릭 시 입력 값 공백 여부 체크하고 changeQuestions() 실행
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

// $recommendQuestion2Input 엔터 입력 시 입력 값 공백 여부 체크하고 changeQuestions() 실행
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

// $recommendQuestion3BeforeBtn 클릭 시 changeQuestions() 실행
$recommendQuestion3BeforeBtn.addEventListener("click", function () {
  changeQuestions(
    $recommendQuestion2,
    $recommendQuestion1,
    $recommendQuestion3,
    $recommendQuestion4
  );
});

// $recommendQuestion3NextBtn 클릭 시 입력 값 공백 여부 체크하고 changeQuestions() 실행
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

// $recommendQuestion3Input 엔터 입력 시 입력 값 공백 여부 체크하고 changeQuestions() 실행
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

// $recommendQuestion4BeforeBtn 클릭 시 changeQuestions() 실행
$recommendQuestion4BeforeBtn.addEventListener("click", function () {
  changeQuestions(
    $recommendQuestion3,
    $recommendQuestion1,
    $recommendQuestion2,
    $recommendQuestion4
  );
});

// $recommendQuestion4SendBtn 클릭 시 cilckRecommendSendBtn() 실행
$recommendQuestion4SendBtn.addEventListener("click", cilckRecommendSendBtn);

// $recommendQuestion4Input 엔터 입력 시 cilckRecommendSendBtn() 실행
$recommendQuestion4Input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    cilckRecommendSendBtn();
  }
});
