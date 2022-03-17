ex04 : Component - State 

01: 기본개념
  1. state
    - 컴포넌트 내부의 현재 상태를 나타내는 쓰기 가능한 데이터
    - 컴포넌트는 this.state 안에 에러 데이터(상태)를 가질 수 있다.
    - this.state은 특정 컴포넌트 전용이며 변경을 위해서는 setState 함수를 사용 (Class Component)
    - 상태가 업데이트가 되면 컴포넌트의 반응형(Reactive) Rendering이 트리거되고 컴포넌트와 자식 
    - 컴포넌트의 동작(Event)와 상호작용을 수행할 수 있는 매커니즘을 제고한다.

  2. 예제 : src/01

02: 제어 컴포넌트
  - src/02 제어 컴포넌트
  - src/03 비제어 컴포넌트 

03: 상태(Stateful) 컴포넌트 vs 순수(Pure, Dumb) 컴포넌트
  - emaillist

04: Data Flow(Bottom -> Up)
  - emaillist

05: Event Handler에서 'ref'를 사용하기 : Functional Component
06: Event Handler에서 'ref'를 사용하기 : Class Component

설치
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
$ npm i react react-dom

설정
babel.config.json 설정
webpack.config.js 설정

스크립트 추가하기
  "scripts": {
    "debug": "npx webpack serve --config config/webpack.config.js --progress --mode development --env",
    "build": "npx webpack"
  },

실행
$ npm run debug src={01|02|03|04|...}
$ npx webpack serve --progress --mode development --env src=01