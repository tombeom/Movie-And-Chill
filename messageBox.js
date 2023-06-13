const $messageBoxIcon = document.querySelector("#messageBoxIcon");
const $messageBoxTitle = document.querySelector("#messageBoxTitle");
const $messageBoxText = document.querySelector("#messageBoxText");
const $messageBoxOkBtn = document.querySelector("#messageBoxOkBtn");
const $messageBoxYesNoBtn = document.querySelector("#messageBoxYesNoBtn");
const $messageBoxYesBtn = document.querySelector("#messageBoxYesBtn");
const $messageBoxNoBtn = document.querySelector("#messageBoxNoBtn");

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

function setMessageBoxContents(msgContents) {
  $messageBoxIcon.innerText = msgContents.msgIcon;
  $messageBoxTitle.innerText = msgContents.msgTitle;
  $messageBoxText.innerText = msgContents.msgText;

  if (msgContents.btnType === "OK") {
    showOkBtn();
  } else if (msgContents.btnType === "YesNo") {
    showYesNoBtn();
  }
}

function showOkBtn() {
  $messageBoxYesNoBtn.style.display = "none";
  $messageBoxOkBtn.style.display = "block";
}

function showYesNoBtn() {
  $messageBoxOkBtn.style.display = "none";
  $messageBoxYesNoBtn.style.display = "block";
}

function openMessageBox() {
  $messageBox.style.display = "block";
}

function closeMessageBox() {
  $messageBox.style.display = "none";
}

function checkClearChat() {
  setMessageBoxContents(messageList[2]);
  openMessageBox();
}

$messageBoxOkBtn.addEventListener("click", closeMessageBox);

$messageBoxNoBtn.addEventListener("click", closeMessageBox);

$messageBoxYesBtn.addEventListener("click", clearChat);
