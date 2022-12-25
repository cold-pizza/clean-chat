# 소개

-   socket.io를 기반으로 실시간 채팅이 가능한 웹사이트입니다.
-   프론트엔드 1명, 백엔드 1명으로 구성된 팀 프로젝트입니다.

# 적용 기술

## Front (my Position)

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/socket.io-010101?style=flat&logo=socket.io&logoColor=white"/> <img src="https://img.shields.io/badge/axios-5A29E4?style=flat&logo=axios&logoColor=white"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white"/> <img src="https://img.shields.io/badge/Sass-CC6699?style=flat&logo=Sass&logoColor=white"/>

## Back

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white"/> <img src="https://img.shields.io/badge/express.js-000000?style=flat&logo=express&logoColor=white"/> <img src="https://img.shields.io/badge/Swagger-85EA2D?style=flat&logo=swagger&logoColor=white"/>

# 주요 기능

-   socket.io로 실시간 채팅기능 구현
-   로그인, 로그아웃, 회원가입.
-   친구 추가, 삭제, 검색.

# 파일 구조

-   src
    -   controller - 기능 관리
    -   view - 컴포넌트 & css파일 관리
    -   reducers - 모든 컴포넌트에 적용할 기능 & 데이터 관리

# 프로젝트 후기

-   컴포넌트의 props로 보내는 복잡한 데이터를 <code>Redux</code>로 한번에 상태관리.
-   <code>Redux-persist</code>로 데이터가 휘발되는 상황 방지.
-   스크롤 이벤트의 대량 호출문제 -> <code>lodash throttle</code>로 일정시간마다 호출하여 완화.
-   CORS문제 발생시 프론트에서 <code>withCredentials = true</code>를 하거나 백엔드와 소통해서 풀어야 하는 문제라는 것을 깨달음.
-   수많은 알 수 없는 오류로 <code>JavaScript</code>로 개발시 인자와 리턴값이 무엇이 들어가는지 확실이 알아야한다는 것을 알게 됨. 또는 <code>TypeScript</code> 도입을 생각해보는 것도 좋은 방안.

## reference

-   (C) 2021. Matt Furie all rights reserved.
