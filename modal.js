const $chatbModalOpen = document.querySelector("#openChatModal");
const $closeBtn = document.querySelector("#chatCloseBtn");

function openChatModal() {
  $chatModal.style.display = "block";
  document.querySelector("#chatInput").placeholder = "궁금한 것이 있으신가요?";
}

function closeChatModal() {
  $chatModal.style.display = "none";
}

$chatbModalOpen.addEventListener("click", openChatModal);
$closeBtn.addEventListener("click", closeChatModal);

window.addEventListener("onclick", closeChatModal);

window.onclick = function (event) {
  if (event.target == $chatModal) {
    closeChatModal();
  }
};
