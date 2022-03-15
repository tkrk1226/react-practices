ex03 : Component - React Event 

01: Inline Handler
02: Function Handler
03: Synthetic Event (이벤트 합성)
04: Event Handler 에제들
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