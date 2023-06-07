const modalHTMLForm = `
<div
  class="bg-slate-100 border-2 rounded-lg drop-shadow-lg mt-8 mx-20"
  id="chatForm"
>
  <div class="m-4 flex flex-row-reverse">
    <button
      class="w-8 h-8 text-zinc-50 text-xl bg-blue-500 rounded-full active:bg-[#2e88ff]"
      id="chatCloseBtn"
    >
      X
    </button>
  </div>
  <div id="chatList">
    <div class="flex justify-start mt-6">
      <div class="w-10 h-10 rounded-full overflow-hidden mt-2 ml-8">
        <img
          class="w-full h-full object-cover"
          src="img/chatIcon.png"
          alt="Movie AI"
        />
      </div>
      <p
        class="mt-1 ml-4 p-3 bg-slate-200 rounded-lg dark:text-[#10111a]"
      >
        멋진 영화를 추천해드릴게요😊
      </p>
    </div>
    <div class="flex justify-end mt-4 mr-6">
      <p
        class="mt-1 ml-4 p-3 bg-slate-300 rounded-lg dark:text-[#10111a]"
      >
        어떤 영화가 좋을까~
      </p>
    </div>
    <div class="flex justify-start mt-6">
      <div class="w-10 h-10 rounded-full overflow-hidden mt-2 ml-8">
        <img
          class="w-full h-full object-cover"
          src="img/chatIcon.png"
          alt="Movie AI"
        />
      </div>
      <p
        class="mt-1 ml-4 p-3 bg-slate-200 rounded-lg dark:text-[#10111a]"
      >
        멋진 영화를 추천해드릴게요😊
      </p>
    </div>
    <div class="flex justify-end mt-4 mr-6">
      <p
        class="mt-1 ml-4 p-3 bg-slate-300 rounded-lg dark:text-[#10111a]"
      >
        어떤 영화가 좋을까~
      </p>
    </div>
  </div>
  <div class="flex px-6 pb-4 mt-8">
    <input
      type="text"
      class="flex-1 rounded-l-lg p-2 placeholder:pl-3 font-bold dark:text-[#212631]"
      placeholder="다른 질문이 있으신가요?"
      id="chatInput"
    />
    <button
      class="bg-blue-500 text-zinc-50 font-bold px-4 rounded-r-lg active:bg-[#2e88ff]"
      id="chatSendBtn"
    >
      전송
    </button>
  </div>
</div>
`;

const carouselHTMLForm = `
<div>
  <div><p class="text-3xl mt-20">Netflix 추천 영화</p></div>
  <div class="overflow-hidden mt-8 mx-20">
    <div class="transition" id="carousel">
      <ul class="whitespace-nowrap" id="carouselContainer">
      </ul>
    </div>
    <button
      class="w-12 h-12 mx-6 mt-4 mb-8 border-2 rounded-full hover:border-blue-500 hover:text-blue-500 active:border-0"
      id="leftButton"
    >
      <
    </button>
    <button
      class="w-12 h-12 mx-6 mt-4 mb-8 border-2 rounded-full hover:border-blue-500 hover:text-blue-500 active:border-0"
      id="rightButton"
    >
      >
    </button>
  </div>
</div>`;

const recommendHTMLForm = `
<div id="movieRecommend">
  <div class="my-8">
    <p class="text-3xl">ChatGPT에게 영화 추천 받기</p>
  </div>
  <div
    id="inputForm"
    class="grid gap-4 grid-flow-row-dense grid-cols-3 mx-20 drop-shadow-lg"
  >
    <div class="rounded-md border-2 bg-slate-100">
      <p class="my-6 text-lg dark:text-[#10111a]">
        오늘 날씨는 어떤가요?
      </p>
      <input
        class="rounded-md border-2 text-center mb-8 dark:text-[#212631]"
        type="text"
        placeholder="맑음"
        name="todaysWeather"
      />
    </div>
    <div class="rounded-md border-2 bg-slate-100">
      <p class="my-6 text-lg dark:text-[#10111a]">
        지금 분위기는 어때요?
      </p>
      <input
        class="rounded-md border-2 text-center mb-8 dark:text-[#212631]"
        type="text"
        placeholder="달콤한"
        name="todaysAtmosphere"
      />
    </div>
    <button
      class="rounded-md bg-[#4e9aff] text-3xl text-zinc-50 font-bold row-span-2 active:bg-[#2e88ff]"
      href="#"
    >
      알려줘!
    </button>
    <div class="rounded-md border-2 bg-slate-100">
      <p class="my-6 text-lg dark:text-[#10111a]">
        영화를 같이 보는 사람은 누구예요?
      </p>
      <input
        class="rounded-md border-2 text-center mb-8 dark:text-[#212631]"
        type="text"
        placeholder="남자친구"
        name="withWho"
      />
    </div>
    <div class="rounded-md border-2 bg-slate-100">
      <p class="my-6 text-lg dark:text-[#10111a]">
        몇 명이서 영화를 보나요?
      </p>
      <input
        class="rounded-md border-2 text-center mb-8 dark:text-[#212631]"
        type="number"
        placeholder="2명"
        name="personOfNumber"
      />
    </div>
  </div>
<div>`;

const mbtiHTMLForm = `
<div class="hidden" id="mbtiRecommend">
  <div class="my-8">
    <p class="text-3xl">MBTI 별 영화 추천</p>
  </div>
  <div
    id="inputForm"
    class="grid gap-4 grid-flow-row-dense grid-cols-3 mx-20 drop-shadow-lg"
  >
    <div class="rounded-md border-2 bg-slate-100 col-span-2">
      <p class="my-6 text-lg dark:text-[#10111a]">
        당신의 MBTI는 무엇인가요?
      </p>
      <input
        class="rounded-md border-2 text-center mb-8 dark:text-[#212631]"
        type="text"
        placeholder="ENFP"
        name="mbti"
      />
    </div>
    <button
      class="rounded-md bg-[#4e9aff] text-3xl text-zinc-50 font-bold active:bg-[#2e88ff]"
      href="#"
    >
      알려줘!
    </button>
  </div>
<div>`;

const genreHTMLForm = `
<div class="hidden" id="genreRecommend">
  <div class="my-8">
    <p class="text-3xl">장르 별 영화 추천</p>
  </div>
  <div
    id="inputForm"
    class="grid gap-4 grid-flow-row-dense grid-cols-3 mx-20 drop-shadow-lg"
  >
    <div class="rounded-md border-2 bg-slate-100 col-span-2">
      <p class="my-6 text-lg dark:text-[#10111a]">
        보고 싶은 장르가 있나요요?
      </p>
      <input
        class="rounded-md border-2 text-center mb-8 dark:text-[#212631]"
        type="text"
        placeholder="로맨스"
        name="genre"
      />
    </div>
    <button
      class="rounded-md bg-[#4e9aff] text-3xl text-zinc-50 font-bold active:bg-[#2e88ff]"
      href="#"
    >
      알려줘!
    </button>
  </div>
<div>`;
