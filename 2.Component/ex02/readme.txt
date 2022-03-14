ex02 : Component Styling (Working with UI)

01. Inline Styling
02. Normal CSS(css-loader option : {module : false})
03. Normal CSS(css-loader option : {module : true})
04. CSS Module(css-loader option : {module : true})
05. SASS & SCSS 
06. 
07. 
08. 

설치
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
$ npm i react react-dom

설정
babel.config.json 설정
webpack.config.js 설정

스크립트 추가하기
  "scripts": {
    "debug": "npx webpack serve --progress --mode development --env",
    "build": "npx webpack"
  },

실행
$ npm run debug src={01|02|03|04|...}
$ npx webpack serve --progress --mode development --env src=01