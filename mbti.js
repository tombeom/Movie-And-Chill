const $mbtiSendBtn = document.querySelector("#mbtiSendBtn");
const $mbtiInput = document.querySelector("#mbtiInput");

function checkMBTIInput(inputData) {
  const mbtiRegEx = /([EI][NS][TF][PJ])/;
  if (mbtiRegEx.test(inputData)) {
    return true;
  } else if (inputData === "") {
    alert("mbti를 입력해주세요!");
    return false;
  } else {
    alert("올바른 mbti가 아닙니다.");
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
