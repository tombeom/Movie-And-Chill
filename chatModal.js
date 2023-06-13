const $chatOpenBtn = document.querySelector("#chatOpenBtn");
const $closeBtn = document.querySelector("#chatCloseBtn");

function openChatModal(placeholderMsg) {
  $chatModal.style.display = "block";
  document.querySelector("#chatInput").placeholder = placeholderMsg;
}

function closeChatModal() {
  $chatModal.style.display = "none";
}

function clearChat() {
  $chatList.innerHTML = "";
  chatData = [
    {
      role: "system",
      content:
        "assistant는 한국 넷플릭스에 상영 중인 영화를 추천해 주는 역할이고 친구와 대화하듯 이야기해줘",
    },
  ];
}

function clickChatOpenBtn() {
  openChatModal("자유롭게 대화해 보세요");
}

$chatOpenBtn.addEventListener("click", clickChatOpenBtn);
$closeBtn.addEventListener("click", closeChatModal);

window.addEventListener("onclick", closeChatModal);

window.onclick = function (event) {
  if (event.target == $chatModal) {
    closeChatModal();
  }
};
