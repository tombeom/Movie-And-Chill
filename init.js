const $main = document.querySelector("#main");
const $chatModal = document.querySelector("#chatModal");
const $messageBox = document.querySelector("#messageBox");
const $footerMsg = document.querySelector("#footerMsg");
const mdScreen = window.matchMedia("screen and (min-width: 768px)");

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

function clearContents() {
  $main.innerText = "";
}

function refreshFooterMsg() {
  const year = new Date().getFullYear().toString();
  $footerMsg.innerText = "©" + year + " tombeom All rights reserved";
}

function drawChatModal() {
  $chatModal.insertAdjacentHTML("afterbegin", chatModalHTMLForm);
}

function drawMessageBox() {
  $messageBox.insertAdjacentHTML("afterbegin", messageBoxHTMLForm);
}

function drawCarousel() {
  carouselData = "";
  $main.insertAdjacentHTML("afterbegin", carouselHTMLForm);
  const $carouselContainer = document.querySelector("#carouselContainer");

  const smImgElementsCreate = "w-72 mr-14 rounded-md shadow-2xl";
  const mdImgElementsCreate = "w-52 mr-16 rounded-md shadow-2xl";

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
  $carouselContainer.insertAdjacentHTML("afterbegin", carouselData);
}

function drawContents() {
  $main.insertAdjacentHTML("beforeend", recommendHTMLForm);
  $main.insertAdjacentHTML("beforeend", mbtiHTMLForm);
  $main.insertAdjacentHTML("beforeend", similarGenreHTMLForm);
}

function initMain() {
  document.querySelector("#mbtiRecommend").style.display = "none";
  document.querySelector("#similarGenreRecommend").style.display = "none";
}

function drawMain() {
  clearContents();
  drawChatModal();
  drawMessageBox();
  refreshFooterMsg();
  drawCarousel();
  drawContents();
  initMain();
}

drawMain();
