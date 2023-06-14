// index.html 로드 시 HTML 요소 추가를 위한 Template literals 선언 된 javascript

// chatModal 생성을 위한 HTML
const chatModalHTMLForm = `
<!-- // Chat Form -->
<div
  class="bg-slate-100 border-2 rounded-lg drop-shadow-xl mt-10 mb-16 mx-6"
  id="chatForm"
>
  <!-- Chat Modal Close Button -->
  <div class="m-4 flex flex-row-reverse">
    <button
      class="w-8 h-8 text-zinc-50 text-xl bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] rounded-full active:from-[#FFE236] active:to-[#FFA369]"
      id="chatCloseBtn"
    >
      <i class="fa-solid fa-xmark"></i>
    </button>  
  </div>
  <!-- // Chat Modal Close Button -->
  <!-- AI & User Chat List -->
  <div class="overflow-y-auto" id="chatList">
  </div>
  <!-- // AI & User Chat List -->
  <!-- Chat Input & Chat Clear, Send Buttons -->
  <div class="flex mt-6 shadow-2xl md:px-6 md:pb-4">
    <button
      class="bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] text-zinc-50 font-bold px-2 mr-1 rounded-lg active:from-[#FFE236] active:to-[#FFA369] md:mx-2"
      id="chatClearBtn"
    >
      <i class="fa-regular fa-trash-can"></i>
    </button>
    <input
      type="text"
      class="flex-1 w-10 rounded-l-lg p-2 dark:text-[#212631] md:placeholder:pl-2"
      id="chatInput"
    />
    <button
      class="bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] text-zinc-50 px-2 rounded-r-lg active:from-[#FFE236] active:to-[#FFA369] md:px-4"
      id="chatSendBtn"
    >
      <i class="fa-solid fa-comment"></i>
    </button>
  </div>
  <!-- // Chat Input & Chat Clear, Send Buttons -->
</div>
<!-- // Chat Form -->
`;

// messageBox 생성을 위한 HTML
const messageBoxHTMLForm = `
<!-- Message Box Form -->
<div
  class="flex flex-col items-center relative top-1/4 mx-auto p-5 border w-11/12 drop-shadow-lg rounded-md bg-slate-100 dark:text-[#212631] md:w-96"
>
  <!-- Message Box Contents (Icon, Title, Text) -->
  <p
    class="mt-2 w-10 h-10 rounded-full bg-[#fbecee] text-center text-2xl md:text-3xl"
    id="messageBoxIcon"
  ></p>
  <p class="py-5 font-bold md:text-xl" id="messageBoxTitle"></p>
  <p class="md:font-light md:text-lg" id="messageBoxText"></p>
  <!-- // Message Box Contents (Icon, Title, Text) -->
  <!-- Message Box Buttons -->
  <!-- Okay Button -->
  <button
    class="hidden mt-10 mb-6 p-1 bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] text-white font-bold rounded-lg w-3/4 drop-shadow-lg active:to-[#FFA369] md:text-lg"
    id="messageBoxOkBtn"
  >
    확인
  </button>
  <!-- // Okay Button -->
  <!-- Yes No Buttons -->
  <div class="hidden mt-10 mb-6" id="messageBoxYesNoBtn">
    <button
      class="mr-4 mt-8 px-7 py-2 bg-slate-200 font-bold rounded-lg drop-shadow-lg active:bg-slate-300 md:text-lg"
      id="messageBoxNoBtn"
    >
      취소
    </button>
    <button
      class="ml-4 mt-8 px-7 py-2 bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] text-white font-bold rounded-lg drop-shadow-lg active:to-[#FFA369] md:text-lg"
      id="messageBoxYesBtn"
    >
      확인
    </button>
  </div>
  <!-- // Yes No Buttons -->
  <!-- // Message Box Buttons -->
</div>
<!-- // Message Box Form -->
`;

// carousel 생성을 위한 HTML
const carouselHTMLForm = `
<!-- Carousel Form -->
<div>
  <!-- Carousel Title -->
  <div><p class="text-xl my-8 md:text-3xl">Netflix 추천 영화</p></div>
  <!-- // Carousel Title -->
  <!-- Carousel Container -->
  <div class="overflow-hidden">
    <!-- Carousel Contents -->
    <div class="transition" id="carousel">
      <ul class="whitespace-nowrap" id="carouselContainer">
      </ul>
    </div>
    <!-- // Carousel Contents -->
    <!-- Carousel Buttons -->
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
    <!-- // Carousel Buttons -->
  </div>
  <!-- Carousel Container -->
</div>
<!-- // Carousel Form -->
`;

// recommend 생성을 위한 HTML
const recommendHTMLForm = `
<!-- Recommend Form -->
<div id="movieRecommend">
  <!-- Recommend Title -->
  <div class="my-8"><p class="text-lg md:text-3xl">ChatGPT에게 영화 추천 받기</p></div>
  <!-- Recommend Title -->
  <!-- Question 1 -->
  <div id="recommendQuestion1">
    <!-- Question 1 Contents -->
    <div class="m-auto rounded-md shadow-2xl border-2 bg-slate-100 grid grid-cols-4 place-items-center md:w-7/12">
      <div class="my-4 col-span-3 dark:text-[#10111a] md:text-lg">
        <!-- Question 1 Text -->
        <p class="text-sm font-bold">
        1/4
        </p>
        <p>
        오늘 날씨는 어때요?
        </p>
        <!-- // Question 1 Text -->
        <!-- Question 1 Input -->
        <input
          class="w-36 my-3 rounded-md border-2 text-center md:w-auto"
          type="text"
          placeholder="맑음"
          id="recommendQuestion1Input"
        />
        <!-- // Question 1 Input -->
      </div>
      <!-- Question 1 Next Button-->
      <button
      class="w-12 h-12 rounded-full row-span-2 bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] text-2xl text-zinc-50 active:from-[#FFE236] active:to-[#FFA369] md:w-24 md:h-24 md:mr-10"
      id="recommendQuestion1NextBtn"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
      <!-- // Question 1 Next Button-->
    </div>
    <!-- // Question 1 Contents -->
  </div>
  <!-- Question 2 -->
  <div id="recommendQuestion2">
    <!-- Question 2 Contents -->
    <div class="m-auto rounded-md shadow-2xl border-2 bg-slate-100 grid grid-cols-4 place-items-center dark:text-[#10111a] md:text-lg md:w-7/12">
      <!-- Question 2 Before Button-->
      <button
      class="w-8 h-8 rounded-full row-span-2 bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] text-2xl text-zinc-50 active:from-[#FFE236] active:to-[#FFA369] md:w-14 md:h-14"
      id="recommendQuestion2BeforeBtn"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <!-- // Question 2 Before Button-->
      <div class="my-4 col-span-2">
        <!-- Question 2 Text -->
        <p class="text-sm font-bold">
        2/4
        </p>
        <p>
        지금 분위기는 어때요?
        </p>
        <!-- // Question 2 Text -->
        <!-- Question 2 Input -->
        <input
          class="w-36 my-2 rounded-md border-2 text-center md:w-auto"
          type="text"
          placeholder="달콤한"
          id="recommendQuestion2Input"
        />
        <!-- // Question 2 Input -->
      </div>
      <!-- // Question 2 Next Button-->
      <button
      class="w-8 h-8 rounded-full row-span-2 bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] text-2xl text-zinc-50 active:from-[#FFE236] active:to-[#FFA369] md:w-14 md:h-14"
      id="recommendQuestion2NextBtn"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
      <!-- // Question 2 Next Button-->
    </div>
    <!-- // Question 2 Contents -->
  </div>
  <!-- Question 3 -->
  <div id="recommendQuestion3">
    <!-- Question 3 Contents -->
    <div class="m-auto rounded-md shadow-2xl border-2 bg-slate-100 grid grid-cols-4 place-items-center dark:text-[#10111a] md:text-lg md:w-7/12">
      <!-- Question 3 Before Button-->
      <button
      class="w-8 h-8 mr-2 rounded-full row-span-2 bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] text-2xl text-zinc-50 active:from-[#FFE236] active:to-[#FFA369] md:w-14 md:h-14"
      id="recommendQuestion3BeforeBtn"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <!-- // Question 3 Before Button-->
      <div class="my-4 col-span-2">
        <!-- Question 3 Text -->
        <p class="text-sm font-bold">
        3/4
        </p>
        <p>
        누구와 영화를 보세요?
        </p>
        <!-- // Question 3 Text -->
        <!-- Question 3 Input -->
        <input
          class="w-36 my-2 rounded-md border-2 text-center md:w-auto"
          type="text"
          placeholder="남자친구"
          id="recommendQuestion3Input"
        />
        <!-- // Question 3 Input -->
      </div>
      <!-- Question 3 Next Button-->
      <button
      class="w-8 h-8 ml-2 rounded-full row-span-2 bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] text-2xl text-zinc-50 active:from-[#FFE236] active:to-[#FFA369] md:w-14 md:h-14"
      id="recommendQuestion3NextBtn"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
      <!-- // Question 3 Next Button-->
    </div>
    <!-- // Question 3 Contents -->
  </div>
  <!-- Question 4 -->
  <div id="recommendQuestion4">
    <!-- Question 4 Contents -->
    <div class="m-auto rounded-md shadow-2xl border-2 bg-slate-100 grid grid-cols-4 place-items-center dark:text-[#10111a] md:text-lg md:w-7/12">
      <!-- Question 4 Before Button-->
      <button
        class="w-8 h-8 mr-2 rounded-full row-span-2 bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] text-2xl text-zinc-50 active:from-[#FFE236] active:to-[#FFA369] md:w-14 md:h-14"
        id="recommendQuestion4BeforeBtn"
      >
      <i class="fa-solid fa-chevron-left"></i>
      </button>
      <!-- // Question 4 Before Button-->
      <div class="my-4 col-span-2">
        <!-- Question 4 Text-->
        <p class="text-sm font-bold">
        4/4
        </p>
        <p>
        몇 명이서 보나요?
        </p>
        <!-- // Question 4 Text-->
        <!-- Question 4 Input-->
        <input
          class="w-36 my-2 rounded-md border-2 text-center md:w-auto"
          type="number"
          placeholder="2"
          id="recommendQuestion4Input"
        />
        <!-- Question 4 Input-->
      </div>
      <!-- Question 4 Send Button-->
      <button
      class="w-8 h-8 ml-2 rounded-full row-span-2 bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] text-2xl text-zinc-50 active:from-[#FFE236] active:to-[#FFA369] md:w-14 md:h-14"
      id="recommendQuestion4SendBtn"
      >
        <i class="fa-regular fa-paper-plane"></i>
      </button>
      <!-- // Question 4 Send Button-->
    </div>
    <!-- // Question 4 Contents -->
  </div>
<div>
<!-- // Recommend Form -->
`;

// mbti 생성을 위한 HTML
const mbtiHTMLForm = `
<!-- MBTI Form -->
<div id="mbtiRecommend">
  <!-- MBTI Title -->
  <div class="my-8"><p class="text-lg md:text-3xl">MBTI 별 영화 추천</p></div>
  <!-- // MBTI Title -->
  <div>
    <!-- MBTI Contents -->
    <div class="m-auto rounded-md shadow-2xl border-2 bg-slate-100 grid grid-cols-4 place-items-center md:w-7/12">
      <div class="my-4 col-span-3 dark:text-[#10111a] md:text-lg">
        <!-- MBTI Text -->
        <p>
          당신의 MBTI는 무엇인가요?
        </p>
        <!-- // MBTI Text -->
        <!-- MBTI Input -->
        <input
          class="w-36 my-3 rounded-md border-2 text-center md:w-auto"
          type="text"
          maxlength="4"
          placeholder="ENFP"
          id="mbtiInput"
        />
        <!-- // MBTI Input -->
      </div>
      <!-- MBTI Send Button -->
      <button
      class="w-12 h-12 rounded-full row-span-2 bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] text-2xl text-zinc-50 active:from-[#FFE236] active:to-[#FFA369] md:w-24 md:h-24 md:mr-10"
      id="mbtiSendBtn"
      >
        <i class="fa-regular fa-paper-plane"></i>
      </button>
      <!-- // MBTI Send Button -->
    </div>
    <!-- // MBTI Contents -->
  </div>
<div>
<!-- // MBTI Form -->
`;

// similarGenre 생성을 위한 HTML
const similarGenreHTMLForm = `
<!-- Similar Genre Form -->
<div id="similarGenreRecommend">
  <!-- Similar Genre Title -->
  <div class="my-8"><p class="text-lg md:text-3xl">유사한 영화 추천</p></div>
  <!-- // Similar Genre Title -->
  <div>
    <!-- Similar Genre Contents -->
    <div class="m-auto rounded-md shadow-2xl border-2 bg-slate-100 grid grid-cols-4 place-items-center md:w-7/12">
      <div class="my-4 col-span-3 dark:text-[#10111a] md:text-lg">
        <!-- Similar Genre Text -->
        <p>
          재밌게 본 영화가 있나요?
        </p>
        <p>
          비슷한 영화를 추천해드려요!
        </p>
        <!-- // Similar Genre Text -->
        <!-- Similar Genre Input -->
        <input
          class="w-36 my-3 rounded-md border-2 text-center md:w-auto"
          type="text"
          placeholder="가디언즈 오브 갤럭시"
          id="similarGenreInput"
        />
        <!-- // Similar Genre Input -->
      </div>
      <!-- Similar Genre Send Button -->
      <button
      class="w-12 h-12 rounded-full row-span-2 bg-gradient-to-r from-[#06b6d4] to-[#4e9aff] text-2xl text-zinc-50 active:from-[#FFE236] active:to-[#FFA369] md:w-24 md:h-24 md:mr-10"
      id="similarGenreSendBtn"
      >
        <i class="fa-regular fa-paper-plane"></i>
      </button>
      <!-- // Similar Genre Send Button -->
    </div>
    <!-- // Similar Genre Contents -->
  </div>
<div>
<!-- // Similar Genre Form -->
`;
