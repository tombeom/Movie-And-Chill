const modalHTMLForm = `
<div
  class="bg-slate-100 border-2 rounded-lg drop-shadow-lg mt-10 mb-16 mx-6 min-w-[290px]"
  id="chatForm"
>
  <div class="m-4 flex flex-row-reverse">
    <button
      class="w-8 h-8 text-zinc-50 text-xl bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] rounded-full active:from-[#FFE236] active:to-[#FFA369]"
      id="chatCloseBtn"
    >
      <i class="fa-solid fa-xmark"></i>
    </button>
  </div>
  <div class="overflow-y-auto" id="chatList">
  </div>
  <div class="flex mt-6 md:px-6 md:pb-4">
    <button
      class="bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] text-zinc-50 font-bold px-2 mr-1 rounded-lg active:from-[#FFE236] active:to-[#FFA369] md:mx-2"
      id="chatClearBtn"
    >
      <i class="fa-regular fa-trash-can"></i>
    </button>
    <input
      type="text"
      class="flex-1 rounded-l-lg p-2 dark:text-[#212631] md:placeholder:pl-2"
      id="chatInput"
    />
    <button
      class="bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] text-zinc-50 px-2 rounded-r-lg active:from-[#FFE236] active:to-[#FFA369] md:px-4"
      id="chatSendBtn"
    >
      <i class="fa-solid fa-comment"></i>
    </button>
  </div>
</div>
`;

const carouselHTMLForm = `
<div>
  <div><p class="text-xl my-8 md:text-3xl">Netflix 추천 영화</p></div>
  <div class="overflow-hidden">
    <div class="transition" id="carousel">
      <ul class="whitespace-nowrap" id="carouselContainer">
      </ul>
    </div>
    <button
      class="w-8 h-8 mx-6 mt-4 mb-8 border-2 rounded-full hover:border-[#4e9aff] hover:text-[#4e9aff] active:border-0 md:w-10 md:h-10"
      id="leftButton"
    >
    <i class="fa-solid fa-arrow-left"></i>
    </button>
    <button
      class="w-8 h-8 mx-6 mt-4 mb-8 border-2 rounded-full hover:border-[#4e9aff] hover:text-[#4e9aff] active:border-0 md:w-10 md:h-10"
      id="rightButton">
      <i class="fa-solid fa-arrow-right"></i>
    </button>
  </div>
</div>`;

const recommendHTMLForm = `
<div id="movieRecommend">
  <div class="my-8">
    <p class="text-lg md:text-3xl">ChatGPT에게 영화 추천 받기</p>
  </div>
  <!-- Question 1 -->
  <div id="recommendQuestion1">
    <div class="m-auto rounded-md border-2 bg-slate-100 grid grid-cols-4 place-items-center md:w-7/12">
      <div class="my-4 col-span-3 dark:text-[#10111a] md:text-lg">
        <p class="text-sm font-bold">
        1/4
        </p>
        <p>
        오늘 날씨는 어때요?
        </p>
        <input
          class="w-36 my-3 rounded-md border-2 text-center md:w-auto"
          type="text"
          placeholder="맑음"
          id="recommendQuestion1Input"
        />
      </div>
      <button
      class="w-12 h-12 rounded-full row-span-2 bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] text-2xl text-zinc-50 active:from-[#FFE236] active:to-[#FFA369] md:w-24 md:h-24 md:mr-10"
      id="recommendQuestion1NextBtn"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </div>
  <!-- Question 2 -->
  <div id="recommendQuestion2">
    <div class="m-auto rounded-md border-2 bg-slate-100 grid grid-cols-4 place-items-center dark:text-[#10111a] md:text-lg md:w-7/12">
      <button
      class="w-8 h-8 rounded-full row-span-2 bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] text-2xl text-zinc-50 active:from-[#FFE236] active:to-[#FFA369] md:w-14 md:h-14"
      id="recommendQuestion2BeforeBtn"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <div class="my-4 col-span-2">
        <p class="text-sm font-bold">
        2/4
        </p>
        <p>
        지금 분위기는 어때요?
        </p>
        <input
          class="w-36 my-2 rounded-md border-2 text-center md:w-auto"
          type="text"
          placeholder="달콤한"
          id="recommendQuestion2Input"
        />
      </div>
      <button
      class="w-8 h-8 rounded-full row-span-2 bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] text-2xl text-zinc-50 active:from-[#FFE236] active:to-[#FFA369] md:w-14 md:h-14"
      id="recommendQuestion2NextBtn"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </div>
  <!-- Question 3 -->
  <div id="recommendQuestion3">
    <div class="m-auto rounded-md border-2 bg-slate-100 grid grid-cols-4 place-items-center dark:text-[#10111a] md:text-lg md:w-7/12">
      <button
      class="w-8 h-8 mr-2 rounded-full row-span-2 bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] text-2xl text-zinc-50 active:from-[#FFE236] active:to-[#FFA369] md:w-14 md:h-14"
      id="recommendQuestion3BeforeBtn"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <div class="my-4 col-span-2">
        <p class="text-sm font-bold">
        3/4
        </p>
        <p>
        누구와 영화를 보세요?
        </p>
        <input
          class="w-36 my-2 rounded-md border-2 text-center md:w-auto"
          type="text"
          placeholder="남자친구"
          id="recommendQuestion3Input"
        />
      </div>
      <button
      class="w-8 h-8 ml-2 rounded-full row-span-2 bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] text-2xl text-zinc-50 active:from-[#FFE236] active:to-[#FFA369] md:w-14 md:h-14"
      id="recommendQuestion3NextBtn"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </div>
  <!-- Question 4 -->
  <div id="recommendQuestion4">
    <div class="m-auto rounded-md border-2 bg-slate-100 grid grid-cols-4 place-items-center dark:text-[#10111a] md:text-lg md:w-7/12">
      <button
        class="w-8 h-8 mr-2 rounded-full row-span-2 bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] text-2xl text-zinc-50 active:from-[#FFE236] active:to-[#FFA369] md:w-14 md:h-14"
        id="recommendQuestion4BeforeBtn"
      >
      <i class="fa-solid fa-chevron-left"></i>
      </button>
      <div class="my-4 col-span-2">
        <p class="text-sm font-bold">
        4/4
        </p>
        <p>
        몇 명이서 보나요?
        </p>
        <input
          class="w-36 my-2 rounded-md border-2 text-center md:w-auto"
          type="number"
          placeholder="2"
          id="recommendQuestion4Input"
        />
      </div>
      <button
      class="w-8 h-8 ml-2 rounded-full row-span-2 bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] text-2xl text-zinc-50 active:from-[#FFE236] active:to-[#FFA369] md:w-14 md:h-14"
      id="recommendQuestion4SendBtn"
      >
        <i class="fa-regular fa-paper-plane"></i>
      </button>
    </div>
  </div>
<div>`;

const mbtiHTMLForm = `
<div id="mbtiRecommend">
  <div class="my-8">
    <p class="text-lg md:text-3xl">MBTI 별 영화 추천</p>
  </div>
  <div>
    <div class="m-auto rounded-md border-2 bg-slate-100 grid grid-cols-4 place-items-center md:w-7/12">
      <div class="my-4 col-span-3 dark:text-[#10111a] md:text-lg">
        <p>
          당신의 MBTI는 무엇인가요?
        </p>
        <input
          class="w-36 my-3 rounded-md border-2 text-center md:w-auto"
          type="text"
          placeholder="ENFP"
          name="mbti"
        />
      </div>
      <button
      class="w-12 h-12 rounded-full row-span-2 bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] text-2xl text-zinc-50 active:from-[#FFE236] active:to-[#FFA369] md:w-24 md:h-24 md:mr-10"
      >
        <i class="fa-regular fa-paper-plane"></i>
      </button>
    </div>
  </div>
<div>`;

const similarHTMLForm = `
<div id="similarRecommend">
  <div class="my-8">
    <p class="text-lg md:text-3xl">유사한 영화 추천</p>
  </div>
  <div>
    <div class="m-auto rounded-md border-2 bg-slate-100 grid grid-cols-4 place-items-center md:w-7/12">
      <div class="my-4 col-span-3 dark:text-[#10111a] md:text-lg">
        <p>
          재밌게 본 영화가 있나요?
        </p>
        <p>
          비슷한 영화를 추천해드려요!
        </p>
        <input
          class="w-36 my-3 rounded-md border-2 text-center md:w-auto"
          type="text"
          placeholder="가디언즈 오브 갤럭시"
          name="similar"
        />
      </div>
      <button
      class="w-12 h-12 rounded-full row-span-2 bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] text-2xl text-zinc-50 active:from-[#FFE236] active:to-[#FFA369] md:w-24 md:h-24 md:mr-10"
      >
        <i class="fa-regular fa-paper-plane"></i>
      </button>
    </div>
  </div>
<div>`;