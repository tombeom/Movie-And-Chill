const $chatInput = document.querySelector("#chatInput");
const $chatSendBtn = document.querySelector("#chatSendBtn");
const $chatClearBtn = document.querySelector("#chatClearBtn");
const $chatList = document.querySelector("#chatList");

function addUserChat(userMsg) {
  if (userMsg != "") {
    let userChat = `
      <div class="flex justify-end mt-3 mx-4">
        <p class="p-2 bg-slate-300 rounded-lg dark:text-[#10111a] break-all">
          ${userMsg}
        </p>
      </div>`;
    $chatList.insertAdjacentHTML("beforeend", userChat);
  }
}

function addAIChat(AIMsg) {
  let AIChat = `
  <div class="flex justify-start mt-3 mx-4">
    <div class="w-8 h-8 rounded-full overflow-hidden shrink-0">
      <img
        src="img/chatIcon.png"
        alt="Movie AI"
      />
    </div>
    <p class="ml-2 p-2 bg-slate-200 rounded-lg dark:text-[#10111a] break-all">
    ${AIMsg}
    </p>
  </div>`;
  $chatList.insertAdjacentHTML("beforeend", AIChat);
}

function getValue() {
  let inputData = $chatInput.value;
  addUserChat(inputData);
  $chatInput.value = "";
  inputData = "";
}

function clearChat() {
  $chatList.innerHTML = "";
}

function detectInputEnter(inputKey) {
  if (inputKey.key === "Enter") {
    getValue();
  }
}

$chatSendBtn.addEventListener("click", getValue);
$chatInput.addEventListener("keydown", (inputKey) =>
  detectInputEnter(inputKey)
);

$chatClearBtn.addEventListener("click", clearChat);

let data = [
  {
    role: "system",
    content: "너는 한국에서 서비스하는 넷플릭스 영화를 추천해줘",
  },
];

async function postData() {
  const url = "https://estsoft-openai-api.jejucodingcamp.workers.dev/";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    redirect: "follow",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      // 데이터 수신 이후 코드 삽입
    });
}

// 모달 작동부
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

// 모달 밖 클릭하면 숨김
window.onclick = function (event) {
  if (event.target == $chatModal) {
    closeChatModal();
  }
};
