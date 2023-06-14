// Message Box 요소 구성과 제어를 위한 javascript

// Message Box 요소와 제어를 위한 버튼의 QuerySelector
const $messageBoxIcon = document.querySelector("#messageBoxIcon");
const $messageBoxTitle = document.querySelector("#messageBoxTitle");
const $messageBoxText = document.querySelector("#messageBoxText");
const $messageBoxOkBtn = document.querySelector("#messageBoxOkBtn");
const $messageBoxYesNoBtn = document.querySelector("#messageBoxYesNoBtn");
const $messageBoxYesBtn = document.querySelector("#messageBoxYesBtn");
const $messageBoxNoBtn = document.querySelector("#messageBoxNoBtn");

// Message Box에 출력할 데이터
const messageList = [
  {
    id: "inputBlank",
    msgIcon: "❗",
    msgTitle: "입력창이 비어있습니다",
    msgText: "입력한 값을 다시 확인해주세요",
    btnType: "OK",
  },
  {
    id: "mbtiWrong",
    msgIcon: "❗",
    msgTitle: "올바른 MBTI 유형이 아닙니다",
    msgText: "입력한 값을 다시 확인해주세요",
    btnType: "OK",
  },
  {
    id: "clearChat",
    msgIcon: "❗",
    msgTitle: "대화 내용이 모두 삭제됩니다",
    msgText: "확인을 누르면 새로운 대화를 시작합니다.",
    btnType: "YesNo",
  },
];

/**
 * Message Box의 Ok 버튼을 활성화하는 함수 - messageBox.js
 */
function showOkBtn() {
  $messageBoxYesNoBtn.style.display = "none";
  $messageBoxOkBtn.style.display = "block";
}

/**
 * Message Box의 YesNo 버튼을 활성화하는 함수 - messageBox.js
 */
function showYesNoBtn() {
  $messageBoxOkBtn.style.display = "none";
  $messageBoxYesNoBtn.style.display = "block";
}

/**
 * Message Box 내 요소를 설정하는 함수 - messageBox.js
 * @param {Array} msgContents 출력할 messageList 데이터
 */
function setMessageBoxContents(msgContents) {
  // Message Box 아이콘 설정
  $messageBoxIcon.innerText = msgContents.msgIcon;

  // Message Box 제목 설정
  $messageBoxTitle.innerText = msgContents.msgTitle;

  // Message Box 내용 설정
  $messageBoxText.innerText = msgContents.msgText;

  // Message Box 버튼 타입에 따라 활성화 할 버튼 설정
  if (msgContents.btnType === "OK") {
    showOkBtn();
  } else if (msgContents.btnType === "YesNo") {
    showYesNoBtn();
  }
}

/**
 * Message Box를 활성화하는 함수 - messageBox.js
 */
function openMessageBox() {
  $messageBox.style.display = "block";
}

/**
 * Message Box를 비활성화하는 함수 - messageBox.js
 */
function closeMessageBox() {
  $messageBox.style.display = "none";
}

/**
 * clearChat() - (chatModal.js) 실행 전 실행 여부를 체크하는 함수 - messageBox.js
 */
function checkClearChat() {
  setMessageBoxContents(messageList[2]);
  openMessageBox();
}

// $messageBoxOkBtn 클릭 시 closeMessageBox() 실행
$messageBoxOkBtn.addEventListener("click", closeMessageBox);

// $messageBoxNoBtn 클릭 시 closeMessageBox() 실행
$messageBoxNoBtn.addEventListener("click", closeMessageBox);

// $messageBoxYesBtn 클릭 시 clearChat() - (chatModal.js) 실행
$messageBoxYesBtn.addEventListener("click", clearChat);
