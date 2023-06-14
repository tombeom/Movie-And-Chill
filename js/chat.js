// AI Chat을 위한 javascript

// Chat에 필요한 값과 버튼의 QuertSelector
const $chatInput = document.querySelector("#chatInput");
const $chatSendBtn = document.querySelector("#chatSendBtn");
const $chatClearBtn = document.querySelector("#chatClearBtn");
const $chatList = document.querySelector("#chatList");

// Server에 POST 할 AI & User Chat 데이터
let chatData = [
  {
    role: "system",
    content:
      "assistant는 한국에서 영화를 추천해 주는 역할이고 친구에게 말하듯 친절하게 이야기해줘",
  },
];

/**
 * ChatData를 초기화하는 함수 - chat.js
 * @param {Array} chatData 초기화 할 ChatData
 */
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

/**
 * Chat List에 User가 입력한 값을 출력 시켜주는 함수 - chat.js
 * @param {String} userMsg User가 입력한 메시지
 */
function addUserChat(userMsg) {
  // User Input이 공백이 아닐 때 입력 값을 Chat List에 출력
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

/**
 * Chat List에 Server에서 리턴한 값을 출력 시켜주는 함수 - chat.js
 * @param {String} receviedMsg Server에서 리턴받은 값
 */
function addAIChat(receviedMsg) {
  // Server와 통신 후 받은 값을 Chat List에 출력
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

/**
 * Server POST 후 대기 시간 동안 유저에게 표시할 임시 AI Chat을 생성하는 함수 - chat.js
 */
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

/**
 * Server POST 완료 후, 생성된 AI Chat을 삭제하는 함수 - chat.js
 */
function deleteTempAIChat() {
  document.querySelector("#tempAIChat").remove();
}

/**
 * 유저 Chat 입력 값 혹은 Server로 부터 받은 값을 ChatData에 추가해주는 함수 - chat.js
 * @param {string} player "user" or "assistant"
 * @param {string} msg 저장할 메시지 값
 */
function addChatData(player, msg) {
  chatData.push({
    role: player,
    content: msg,
  });
}

/**
 * Server와 POST 통신을 하고 값을 출력하는 비동기 함수 - chat.js
 * @param {Array} chatData AI & User의 채팅 데이터
 */
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
        // Server에서 받은 값 중 Message만 가져온다
        let aiMsg = res.choices[0].message.content.toString();
        // 기존에 생성되었던 임시 AI Chat 삭제
        deleteTempAIChat();
        // Server에서 받은 Message를 Chat Data에 추가하고 출력
        addAIChat(aiMsg);
        addChatData("assistant", aiMsg);
      } catch (e) {
        // 오류 발생 시 예외 처리
        addAIChat("오류가 발생했어요... 페이지를 새로고침 해주세요 🤖");
      }
    });
}

/**
 * Chat Send Button을 클릭했을 때 실행되는 함수 - chat.js
 */
function clickChatSendBtn() {
  // User가 입력한 값을 가져온다
  let inputData = $chatInput.value.toString();
  // 값이 공백이면 Message Box 활성화
  if (inputData === "") {
    setMessageBoxContents(messageList[0]);
    openMessageBox();
  } else {
    // User가 입력한 값을 출력
    addUserChat(inputData);
    // User의 Message Input 창을 초기화
    $chatInput.value = "";
    // User가 입력한 값을 Chat Data에 추가
    addChatData("user", inputData);
    // Server POST
    postData(chatData);
    // User 입력 값 변수를 초기화
    inputData = "";
    // Chat Input의 placeholder 재설정
    document.querySelector("#chatInput").placeholder =
      "또 궁금한 점이 있으신가요?";
  }
}

// $chatSendBtn 클릭 시 clickChatSendBtn() 실행
$chatSendBtn.addEventListener("click", clickChatSendBtn);

// $chatInput 엔터 입력 시 clickChatSendBtn() 실행
$chatInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    clickChatSendBtn();
  }
});

// $chatClearBtn 클릭 시 Message Box를 활성화하는 checkClearChat() 실행
$chatClearBtn.addEventListener("click", checkClearChat);
