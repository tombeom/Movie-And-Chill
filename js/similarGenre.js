// Similar Genre Menu 동작을 위한 javascript

// 값 입력 및 전송 관련 QuerySelector
const $similarGenreSendBtn = document.querySelector("#similarGenreSendBtn");
const $similarGenreInput = document.querySelector("#similarGenreInput");

/**
 * Similar Genre Send Button을 클릭했을 때 실행되는 함수 - similarGenre.js
 */
function cilckSimilarGenreSendBtn() {
  // User가 입력한 값을 가져온다
  let inputData = $similarGenreInput.value.toString();
  // 값이 공백이면 Message Box 활성화
  if (inputData === "") {
    setMessageBoxContents(messageList[0]);
    openMessageBox();
  } else {
    // User가 입력한 값을 바탕으로 Server에게 전송할 문자열 생성
    let sendData =
      "나는 " + inputData + "를(을) 재밌게 봤는데 비슷한 영화를 추천해 줘! 😆";
    // Chat Modal 활성화
    openChatModal("또 궁금한 점이 있으신가요?");
    // 전송할 문자열을 출력
    addUserChat(sendData);
    // 전송할 문자열을 Chat Data에 추가
    addChatData("user", sendData);
    // Server POST
    postData(chatData);
    // 입력 값 초기화
    $similarGenreInput.value = "";
  }
}

// $similarGenreSendBtn 클릭 시 cilckSimilarGenreSendBtn() 실행
$similarGenreSendBtn.addEventListener("click", cilckSimilarGenreSendBtn);

// $similarGenreInput 엔터 입력 시 cilckSimilarGenreSendBtn() 실행
$similarGenreInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    cilckSimilarGenreSendBtn();
  }
});
