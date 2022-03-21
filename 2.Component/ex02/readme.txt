ex02 : Component Styling (Working with UI)

01. Inline Styling
02. Normal CSS(css-loader options : {module : false})
    - $ npm run debug src=02 css-modules=false
03. Normal CSS(css-loader options : {module : true})
    - $ npm run debug src=03 css-modules=true
    - $ npm run debug src=03
04. CSS Module(css-loader options : {module : true})
    - $ npm run debug src=04 css-modules=true
05. SASS & SCSS(css-loader options : {module : true})
    ---------------------------------------------------
    CSS in JS(Style Component), Less & Styleable
    ---------------------------------------------------
06. Font Awesome : Working With UI I
07. React Modal : Working With UI II

설치
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
$ npm i react react-dom prop-types

설정
babel.config.json 설정
webpack.config.js 설정

스크립트 추가하기
  "scripts": {
    "debug": "npx webpack serve --config config/webpack.config.js --progress --mode development --env",
    "build": "npx webpack"
  },
  
실행
$ npm run debug src={01|02|03|04|...} css-modules={[true] | false}
$ npx webpack serve --progress --mode development --env src=01