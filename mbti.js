const $mbtiSendBtn = document.querySelector("#mbtiSendBtn");
const $mbtiInput = document.querySelector("#mbtiInput");

function checkMBTIInput(inputData) {
  const mbtiRegEx = /([EI][NS][TF][PJ])/;
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

function cilckMBTISendBtn() {
  let inputData = $mbtiInput.value.toString().toUpperCase();
  if (checkMBTIInput(inputData)) {
    let sendData =
      "내 MBTI는 " + inputData + "야😊 나에게 어울리는 영화를 추천해 줘!";
    openChatModal("또 궁금한 점이 있으신가요?");
    addUserChat(sendData);
    addChatData("user", sendData);
    postData(chatData);
  }
}

$mbtiSendBtn.addEventListener("click", cilckMBTISendBtn);
$mbtiInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    cilckMBTISendBtn();
  }
});
