const $chatInput = document.querySelector("#chatInput");
const $chatSendBtn = document.querySelector("#chatSendBtn");
const $chatClearBtn = document.querySelector("#chatClearBtn");
const $chatList = document.querySelector("#chatList");

let chatData = [
  {
    role: "system",
    content:
      "assistant는 한국에서 영화를 추천해 주는 역할이고 친구에게 말하듯 친절하게 이야기해줘",
  },
];

function initChatData(chatData) {
  chatData = [
    {
      role: "system",
      content:
        "assistant는 한국에서 영화를 추천해 주는 역할이고 친구에게 말하듯 친절하게 이야기해줘",
    },
  ];

  return chatData;
}

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

function addAIChat(receviedMsg) {
  let AIChat = `
  <div class="flex justify-start mt-3 mx-4">
    <div class="w-8 h-8 rounded-full overflow-hidden shrink-0">
      <img
        src="img/chatIcon.png"
        alt="Movie AI"
      />
    </div>
    <p class="ml-2 p-2 bg-slate-200 rounded-lg dark:text-[#10111a] break-all">
    ${receviedMsg}
    </p>
  </div>`;
  $chatList.insertAdjacentHTML("beforeend", AIChat);
}

function createTempAIChat() {
  let AIChat = `
  <div class="flex justify-start mt-3 mx-4" id="tempAIChat">
    <div class="w-8 h-8 rounded-full overflow-hidden shrink-0">
      <img
        src="img/chatIcon.png"
        alt="Movie AI"
      />
    </div>
    <p class="animate-pulse ml-2 p-2 bg-slate-200 rounded-lg dark:text-[#10111a] break-all">
    답변을 생성 중입니다...🤖
    </p>
  </div>`;
  $chatList.insertAdjacentHTML("beforeend", AIChat);
}

function deleteTempAIChat() {
  document.querySelector("#tempAIChat").remove();
}

function addChatData(player, msg) {
  chatData.push({
    role: player,
    content: msg,
  });
}

function getValue() {
  let inputData = $chatInput.value.toString();
  if (inputData === "") {
    setMessageBoxContents(messageList[0]);
    openMessageBox();
  } else {
    addUserChat(inputData);
    $chatInput.value = "";
    addChatData("user", inputData);
    postData(chatData);
    inputData = "";
    document.querySelector("#chatInput").placeholder =
      "또 궁금한 점이 있으신가요?";
  }
}

$chatSendBtn.addEventListener("click", getValue);

$chatInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    getValue();
  }
});

$chatClearBtn.addEventListener("click", checkClearChat);

async function postData(chatData) {
  const url = "https://estsoft-openai-api.jejucodingcamp.workers.dev/";

  createTempAIChat();
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(chatData),
    redirect: "follow",
  })
    .then((res) => res.json())
    .then((res) => {
      try {
        let aiMsg = res.choices[0].message.content.toString();
        deleteTempAIChat();
        addAIChat(aiMsg);
        addChatData("assistant", aiMsg);
      } catch (e) {
        console.log(e);
        addAIChat("오류가 발생했어요... 페이지를 새로고침 해주세요 🤖");
      }
    });
}
