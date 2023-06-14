// Chat Modal 제어를 위한 javascript

// Chat 열기 버튼과 닫기 버튼 QuerySelector
const $chatOpenBtn = document.querySelector("#chatOpenBtn");
const $closeBtn = document.querySelector("#chatCloseBtn");

/**
 * Chat Modal을 활성화하고 Chat Input의 placeholder 값을 설정하는 함수- chatModal.js
 * @param {string} placeholderMsg 표시 할 placeholder
 */
function openChatModal(placeholderMsg) {
  $chatModal.style.display = "block";
  document.querySelector("#chatInput").placeholder = placeholderMsg;
}

/**
 * Chat Modal을 비활성화하는 함수 - chatModal.js
 */
function closeChatModal() {
  $chatModal.style.display = "none";
}

/**
 * Chat List의 내 요소를 모두 삭제하고 Chat Data 초기화 - chatModal.js
 */
function clearChat() {
  $chatList.innerHTML = "";
  chatData = [
    {
      role: "system",
      content:
        "assistant는 한국 넷플릭스에 상영 중인 영화를 추천해 주는 역할이고 친구와 대화하듯 이야기해줘",
    },
  ];
  closeMessageBox();
}

/**
 * Chat Open 버튼을 눌렀을 때 Chat Modal 활성화 및 Chat Input의 placeholder 설정하는 함수 - chatModal.js
 */
function clickChatOpenBtn() {
  openChatModal("자유롭게 대화해 보세요");
}

// $chatOpenBtn 클릭 시 clickChatOpenBtn() 실행
$chatOpenBtn.addEventListener("click", clickChatOpenBtn);

// $closeBtn 클릭 시 closeChatModal() 실행
$closeBtn.addEventListener("click", closeChatModal);

// Chat Modal 외부 클릭 시 Chat Modal 비활성화
window.onclick = function (event) {
  if (event.target == $chatModal) {
    closeChatModal();
  }
};
