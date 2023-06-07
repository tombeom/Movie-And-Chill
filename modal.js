const $chatbModalOpen = document.querySelector("#openChatModal");
const $closeBtn = document.querySelector("#chatCloseBtn");

function openChatModal() {
  $chatModal.style.display = "block";
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
