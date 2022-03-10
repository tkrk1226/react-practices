ex08: JSX Tutorials
01. 특징1: HTML과 차이점
02. 특징2: Single Root node
03. 함수 컴포넌트 만들기
04. Pure React
05. 클래스 컴포넌트 만들기
06. 특징3: JSX 표현식 표기법 ({js expression})
07. 특징4: 공백
08. Dynamic HTML Rendering
09. Comment (주석) JSX 외부 주석은 가능하나 내부에는 불가능

{js expression}
// 식 O : count + 1
// 함수 O : f()
// 구문 X : if()

1. 설치
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
$ npm i react react-dom

2. 설정
    babel.config.json 설정
    webpack.config.js 설정

3. npm 스크립팅

  "scripts": {
    "debug": "npx webpack serve --progress --mode development --env",
    "build": "npx webpack"
  },

4. 실행
$ npm run debug src={01|02|03|04|...}
$ npx webpack serve --progress --mode development --env src=01