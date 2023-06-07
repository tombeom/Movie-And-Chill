const $main = document.querySelector("#main");
const $chatModal = document.querySelector("#chatModal");

const carouselList = [
  {
    id: "1",
    src: "img/carousel/1.png",
  },
  {
    id: "2",
    src: "img/carousel/2.png",
  },
  {
    id: "3",
    src: "img/carousel/3.png",
  },
  {
    id: "4",
    src: "img/carousel/4.png",
  },
  {
    id: "5",
    src: "img/carousel/5.png",
  },
  {
    id: "6",
    src: "img/carousel/6.png",
  },
  {
    id: "7",
    src: "img/carousel/7.png",
  },
  {
    id: "8",
    src: "img/carousel/8.png",
  },
  {
    id: "9",
    src: "img/carousel/9.png",
  },
];

function initMain() {
  $main.innerText = "";
}

function drawChatModal() {
  $chatModal.insertAdjacentHTML("afterbegin", modalHTMLForm);
}

function drawCarousel() {
  carouselData = "";
  $main.insertAdjacentHTML("afterbegin", carouselHTMLForm);
  const $carouselContainer = document.querySelector("#carouselContainer");
  for (const i of carouselList) {
    console.log();
    if (i.id == carouselList[0].id) {
      carouselData += `
      <li class="inline-block">
        <img
          class="w-72 ml-8 mr-20 rounded-md drop-shadow-xl"
          src="${i.src}"
          alt=""
        />
      </li>
      `;
    } else if (i.id == carouselList[carouselList.length - 1].id) {
      carouselData += `
      <li class="inline-block">
        <img
          class="w-72 mr-8 rounded-md drop-shadow-xl"
          src="${i.src}"
          alt=""
        />
      </li>
      `;
    } else {
      carouselData += `
      <li class="inline-block">
        <img
          class="w-72 mr-20 rounded-md drop-shadow-xl"
          src="${i.src}"
          alt=""
        />
      </li>
      `;
    }
  }
  $carouselContainer.insertAdjacentHTML("afterbegin", carouselData);
}

function drawRecommend() {
  $main.insertAdjacentHTML("beforeend", recommendHTMLForm);
}

function drawMBTI() {
  $main.insertAdjacentHTML("beforeend", mbtiHTMLForm);
}

function drawGenre() {
  $main.insertAdjacentHTML("beforeend", genreHTMLForm);
}

function drawMain() {
  drawChatModal();
  initMain();
  drawCarousel();
  drawRecommend();
  drawMBTI();
  drawGenre();
}

drawMain();
