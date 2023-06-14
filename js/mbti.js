// MBTI Menu 동작을 위한 javascript

// 값 입력 및 전송 관련 QuerySelector
const $mbtiSendBtn = document.querySelector("#mbtiSendBtn");
const $mbtiInput = document.querySelector("#mbtiInput");

/**
 * User가 입력한 MBTI 값이 올바른 값인지 체크하는 함수 - mbti.js
 * @param {string} inputData User의 입력 값 (.toString().toUpperCase())
 */
function checkMBTIInput(inputData) {
  // 유저가 입력한 값을 정규표현식으로 체크
  const mbtiRegEx = /([EI][NS][TF][PJ])/;
  // 정규표현식 조건에 맞을 경우 true 반환, 맞지 않을 경우는 Message Box 활성화
  if (mbtiRegEx.test(inputData)) {
    return true;
  } else if (inputData === "") {
    setMessageBoxContents(messageList[0]);
    openMessageBox();
    return false;
  } else {
    setMessageBoxContents(messageList[1]);
    openMessageBox();
    return false;
  }
}

/**
 * MBTI Send Button을 클릭했을 때 실행되는 함수 - mbti.js
 */
function cilckMBTISendBtn() {
  // User가 입력한 값을 대문자로 변경 후 변수 저장
  let inputData = $mbtiInput.value.toString().toUpperCase();
  // User 입력 값을 확인, true일 때만 Server POST
  if (checkMBTIInput(inputData)) {
    // User가 입력한 값을 바탕으로 Server에게 전송할 문자열 생성
    let sendData =
      "내 MBTI는 " + inputData + "야😊 나에게 어울리는 영화를 추천해 줘!";
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

// $mbtiSendBtn 클릭 시 cilckMBTISendBtn() 실행
$mbtiSendBtn.addEventListener("click", cilckMBTISendBtn);

// $mbtiInput 엔터 입력 시 cilckMBTISendBtn() 실행
$mbtiInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    cilckMBTISendBtn();
  }
});
