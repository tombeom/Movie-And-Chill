# Movie-And-Chill

Movie-And-Chill은 ChatGPT를 기반으로 한 영화 추천 서비스

사용자에게 맞춤형 영화 추천을 제공하며, 사용자와 자연스럽게 대화하면서 취향에 맞는 영화를 찾을 수 있다.

## 기능

- 사용자와 대화하며 취향에 맞는 영화를 추천
- ChatGPT API를 사용해 자연어 처리와 이해 수행
- 상황 별 영화 추천
- MBTI 유형 별 영화 추천
- 재미있게 본 영화와 유사한 영화 추천

## 사용 기술 및 배포 URL

### 사용 기술

<div>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
<div>

### 배포 URL

- https://tombeom.github.io/Movie-And-Chill/
  - Github Pages를 통해 배포

## 프로젝트 구조

```
Movie-And-Chill
│  index.html
│
├─img
│  │  bg.png
│  │  chatIcon.png
│  │
│  ├─carousel
│  │      1.png
│  │      2.png
│  │      3.png
│  │      4.png
│  │      5.png
│  │      6.png
│  │      7.png
│  │      8.png
│  │      9.png
│  │
│  └─favicon
│          android-chrome-192x192.png
│          android-chrome-512x512.png
│          apple-touch-icon.png
│          favicon-16x16.png
│          favicon-32x32.png
│          favicon.ico
│          site.webmanifest
│
└─js
        carousel.js
        chat.js
        chatModal.js
        form.js
        init.js
        mbti.js
        menu.js
        messageBox.js
        recommend.js
        similarGenre.js
```

## 상세 기능

- 메뉴 구성
<img src="https://user-images.githubusercontent.com/90359639/245684472-064275b3-9521-4308-876f-810654299c42.gif"/>

```
Main Page, MBTI Page, Similar Genre Page

총 3개의 페이지로 구성되어 있고
리프레시 없이 index.html 내에서 메뉴 변경이 이루어지도록 구성
```

- 사용자와 대화할 수 있는 챗봇
<img src="https://user-images.githubusercontent.com/90359639/245684490-005382cd-4031-45ce-a433-a799d023af28.gif"/>

```
Modal로 구성된 채팅창에서 사용자는 Assistant와 자연스럽게 대화할 수 있다.
```

- 추천 영화 Carousel
<img src="https://user-images.githubusercontent.com/90359639/245684691-5dda4c89-67f1-4b95-9da1-3f8a7a3a43b1.gif"/>

```
추천 영화 리스트를 Carousel로 구현
```

- Modal을 통한 메시지 박스 활성화
<img src="https://user-images.githubusercontent.com/90359639/245684515-f5e7e5b4-ff8c-4081-9d38-b01f9d36df5e.gif"/>

```
채팅창의 메시지를 삭제하거나 사용자가 빈 값을 입력했을 때 Modal로 구성된 Message Box를 활성화한다.
```

- 상황 별 영화 추천
<img src="https://user-images.githubusercontent.com/90359639/245684591-0a10e1b7-97b7-4d32-8423-4dd5b4312851.gif"/>

```
현재 날씨와 분위기 그리고 누구와 함께 영화를 보는지 입력하면 상황에 맞는 영화를 추천
```

- MBTI 유형 별, 유사한 영화 추천
<div>
  <img width="300" src="https://user-images.githubusercontent.com/90359639/245685025-c85c59ef-69c1-4284-902d-5b406e9bf968.png"/>
  <img width="300" src="https://user-images.githubusercontent.com/90359639/245685035-031da89d-b644-44f4-9af8-8ae05429c053.png"/>
</div>

```
MBTI 유형 별 어울리는 영화 추천 및 재미있게 본 영화와 유사한 영화 추천
```

- 반응형 웹 디자인 지원
<div>
  <img width="300" src="https://user-images.githubusercontent.com/90359639/245685008-698b8a20-e99a-44a9-abab-8320a148d3bd.png"/>
  <img width="300" src="https://user-images.githubusercontent.com/90359639/245685016-03b17a56-3485-48db-ba1e-242406bb7a30.png"/>
</div>

```
PC 환경 뿐만 아니라 모바일에서도 웹페이지를 사용할 수 있도록 반응형 디자인을 지원
```

## 개발과정과 시행착오
- SPA
```
프로젝트를 시작하면서 새로고침 없이 화면이 전환되는 페이지를 만들려고 구상했다.
처음에는 화면전환이 필요할 때마다 HTML 요소를 추가하고 삭제하는 방식으로 페이지를 만들었는데
이 경우 화면전환을 하고 다시 이전 화면으로 돌아갔을 때 요소의 변경으로
기존 화면의 EventListener가 제대로 동작하지 않는 이슈가 있었다.

그래서 고민을 하면서 다른 사이트들을 참고했고 생각한 방법이 Modal을 구현한 것처럼
처음에 요소를 숨김 처리한 상태로 불러오고
버튼 상호작용을 할 때마다 현재 요소는 숨김 처리하고 숨김 처리되어 있던 요소를 보여주는 것이다.
이렇게 만들고 나니 처음 원했던 방식대로 구현할 수 있었다.

나중에 추가로 찾아보니 SPA(Single Page Application)는 history나 hash를 이용해서
router를 구현해서 만든다고 한다. 또 CSR(Client Side Rendering)과 SSR(Server Side Rendering)에
대해서도 알게 되었다.
```

- Carousel
```
Carousel을 만들면서 처음에는 모든 요소를 <div> 태그로 작성했는데
왓챠피디아 홈페이지의 Carousel을 보니 ul로 구성했다.
Carousel도 결국 List이고 내가 구현한 <div> 태그보다 시맨틱 해서 <ul> 태그로 변경했다.

다른 잘 만들어진 홈페이지를 보는 것도 많은 도움이 되는 것 같다.

현재는 해상도 별로 width 값을 고정시키고 이동하는 값을 직접 설정하는
하드코딩 방식으로 Carousel을 만들었는데 더 좋은 방법이 있을 것 같아서
내 코드에 아쉬움이 남는다.
```


- Responsive Design
```
페이지를 처음 만들면서 당연하게 PC를 기준으로 페이지를 제작했다.
만들고 나서 반응형을 추가하려고 Tailwind CSS 공식 문서를 봤는데

처음 기본이 되는 페이지를 모바일 환경 해상도 기준으로 제작하고
이후에 반응형 중단점을 사용해 더 큰 해상도를 지원하도록 만들으라고 되어 있었다.

결국 모바일을 기준으로 페이지 디자인을 재설계했다.

크롬 개발자 모드의 디바이스 툴바를 사용해 모바일 화면을 만들었는데 애로사항이 꽤 있었다.

1. 디바이스 툴바에서 보이는 화면과 실제 모바일 디바이스에서 보이는 화면이 다르다.

2. 삼성 브라우저의 경우 다크 모드를 켜면 다크 모드를 지원하지 않는 웹에서
다크 모드를 지원하도록 페이지 색상을 강제로 바꿔버리기 때문에 내가 지정한 색이 보이지 않는다.

(예전 네이버가 다크 모드를 지원하지 않을 때 편하게 사용했는데 페이지 색상을 강제로 바꾸다 보니
디자이너와 개발자 입장에서는 독이 든 성배로 느껴졌다.
브라우저 옵션의 실험실에서 해당 옵션을 끌 수 있지만 과연 일반 사용자가 그런 것까지 신경 쓸까...?)


3. iOS, macOS 사파리 브라우저는 웹페이지 색상에 따라 상단 바 색상이 변하게 되는데
Tailwind CSS를 사용해서 그런지 Tailwind CSS CDN을 사용해서 그런 건지
다크 모드가 적용되었음에도 상단 바 색은 라이트 모드에 맞춰서 나왔다.

이 문제는 <head> 내 <meta name="theme-color" content="#색 코드"/>
삽입으로 해결할 수 있었다.


4. 갤럭시 폴드를 접었을 때 화면의 width가 280px이라 디자인하기 굉장히 어려웠다...
```

- 기타
```
웹페이지를 만들고 웹 표준을 잘 지켰는지 확인하기 위해서 
https://validator.w3.org/ 에서 검사를 해봤다.

<section> 태그 내에 <main> 태그를 자손으로 넣는 Error가 있었고
<section> 태그 내 <h2>-<h6> 제목 태그가 없다는 Warning이 있었다.

모두 수정했고 둘 다 HTML을 작성하면서 몰랐던 내용인데 새로 배웠다!
```
