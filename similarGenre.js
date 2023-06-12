const $similarGenreSendBtn = document.querySelector("#similarGenreSendBtn");
const $similarGenreInput = document.querySelector("#similarGenreInput");

function cilckSimilarGenreSendBtn() {
  let inputData = $similarGenreInput.value.toString();
  if (inputData === "") {
    alert();
  } else {
    let sendData =
      "나는 " + inputData + "를(을) 재밌게 봤는데 비슷한 영화를 추천해 줘!";
    openChatModal("또 궁금한 점이 있으신가요?");
    addUserChat(sendData);
    addChatData("user", sendData);
    postData(chatData);
  }
}

$similarGenreSendBtn.addEventListener("click", cilckSimilarGenreSendBtn);
