// index.html 로드 시 HTML 요소를 추가해주는 javascript

// 요소 추가 시 위치를 지정하기 위한 QuerySelector
const $main = document.querySelector("#main");
const $chatModal = document.querySelector("#chatModal");
const $messageBox = document.querySelector("#messageBox");
const $footerMsg = document.querySelector("#footerMsg");

// index.html 로드 시 유저 화면 크기를 감지해서 Carousel 데이터를 구분하기 위한 값
const mdScreen = window.matchMedia("screen and (min-width: 768px)");

// Carousel Array 데이터
// Server 운용 시, Server에서 Carousel 데이터를 받아오도록 업데이트
const carouselList = [
  {
    id: "1",
    src: "img/carousel/1.png",
    alt: "Moveie [La La Land] thumbnail Image",
    href: "https://www.netflix.com/kr/title/80095365",
  },
  {
    id: "2",
    src: "img/carousel/2.png",
    alt: "Moveie [Django Unchained] thumbnail Image",
    href: "https://www.netflix.com/kr/title/70230640",
  },
  {
    id: "3",
    src: "img/carousel/3.png",
    alt: "Moveie [Eternal Sunshine of the Spotless Mind] thumbnail Image",
    href: "https://www.netflix.com/kr/title/60034545",
  },
  {
    id: "4",
    src: "img/carousel/4.png",
    alt: "Moveie [Kiki's Delivery Service] thumbnail Image",
    href: "https://www.netflix.com/kr/title/60027106",
  },
  {
    id: "5",
    src: "img/carousel/5.png",
    alt: "Moveie [The Bourne Identity] thumbnail Image",
    href: "https://www.netflix.com/kr/title/60022985",
  },
  {
    id: "6",
    src: "img/carousel/6.png",
    alt: "Moveie [My Tomorrow, Your Yesterday] thumbnail Image",
    href: "https://www.netflix.com/kr/title/80201634",
  },
  {
    id: "7",
    src: "img/carousel/7.png",
    alt: "Moveie [Sully] thumbnail Image",
    href: "https://www.netflix.com/kr/title/80103102",
  },
  {
    id: "8",
    src: "img/carousel/8.png",
    alt: "Moveie [Taken] thumbnail Image",
    href: "https://www.netflix.com/kr/title/70101374",
  },
  {
    id: "9",
    src: "img/carousel/9.png",
    alt: "Moveie [Narco-Saints] thumbnail Image",
    href: "https://www.netflix.com/kr/title/81343748",
  },
];

/**
 * Contents 내 요소를 모두 삭제하는 함수 - init.js
 */
function clearContents() {
  $main.innerText = "";
}

/**
 * Chat Modal HTML을 추가하는 함수 - init.js
 */
function drawChatModal() {
  $chatModal.insertAdjacentHTML("afterbegin", chatModalHTMLForm);
}

/**
 * Message Box HTML을 추가하는 함수 - init.js
 */
function drawMessageBox() {
  $messageBox.insertAdjacentHTML("afterbegin", messageBoxHTMLForm);
}

/**
 * 현재 년도에 맞춰 Footer의 Message를 입력하는 함수 - init.js
 */
function refreshFooterMsg() {
  const year = new Date().getFullYear().toString();
  $footerMsg.innerText = "©" + year + " tombeom All rights reserved";
}

/**
 * Carousel 데이터를 불러와 Carousel 요소를 추가하는 함수 - init.js
 */
function drawCarousel() {
  carouselData = "";
  $main.insertAdjacentHTML("afterbegin", carouselHTMLForm);
  const $carouselContainer = document.querySelector("#carouselContainer");

  // 소형 디바이스 이미지 값
  const smImgElementsCreate = "w-72 mr-14 rounded-md shadow-2xl";

  // 중형 이상 디바이스 이미지 값
  const mdImgElementsCreate = "w-52 mr-16 rounded-md shadow-2xl";

  // Carousel 데이터를 반복문으로 불러와 순차적으로 href, image, src, alt 값 추가
  if (mdScreen.matches) {
    for (const i of carouselList) {
      carouselData += `
        <li class="inline-block">
          <a href="${i.href}">
            <img
              class="${mdImgElementsCreate}"
              src="${i.src}"
              alt="${i.alt}"
            />
          </a>
        </li>
        `;
    }
  } else {
    for (const i of carouselList) {
      carouselData += `
        <li class="inline-block">
          <a href="${i.href}">
            <img
              class="${smImgElementsCreate}"
              src="${i.src}"
              alt="${i.alt}"
            />
          </a>
        </li>
        `;
    }
  }

  // 추가된 데이터를 HTML으로 추가
  $carouselContainer.insertAdjacentHTML("afterbegin", carouselData);
}

/**
 * Contents 내 Main Contents를 추가하는 함수 - init.js
 */
function drawContents() {
  $main.insertAdjacentHTML("beforeend", recommendHTMLForm);
  $main.insertAdjacentHTML("beforeend", mbtiHTMLForm);
  $main.insertAdjacentHTML("beforeend", similarGenreHTMLForm);
}

/**
 * 초기 화면을 보여주기 위한 함수 (Recommend를 제외한 Contents 숨김 처리)  - init.js
 */
function initMain() {
  document.querySelector("#mbtiRecommend").style.display = "none";
  document.querySelector("#similarGenreRecommend").style.display = "none";
}

/**
 * index.html 로드 시 초기 실행에 필요한 함수들 실행하는 함수 - init.js
 */
function drawMain() {
  clearContents();
  drawChatModal();
  drawMessageBox();
  refreshFooterMsg();
  drawCarousel();
  drawContents();
  initMain();
}

// index.html 로드 시 실행
drawMain();
