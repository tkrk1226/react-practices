Babel PlugIn(변환 규칙)

1. 라이브러리 설치
$ npm i -D @babel/core @babel/cli 

2. 플러그인 적용
1) 블록 스코프 변수 플러그인 (@babel/plugin-transform-block-scoping)
$ npm i -D @babel/plugin-transform-block-scoping

// 디렉토리를 주면 다 변환, 파일만 하나 주면 하나만 변환, d는 디렉토리, o는 파일만...?
$ npx babel src/ex.js -o dist/ex.js --plugins @babel/plugin-transform-block-scoping


2) 객체분해 - 파라미터 플러그인(@babel/plugin-transform-parameters)

3) 탬플릿 문자열 변환 - 파라미터 플러그인(@babel/plugin-transform-template-literals)

4) for...of 변환 플러그인(@babel/plugin-transform-for-of)

5) 모두 적용해보기
$ npm i -D @babel/plugin-transform-block-scoping @babel/plugin-transform-parameters @babel/plugin-transform-template-literals @babel/plugin-transform-for-of
$ npx babel src/ex.js -o dist/ex.js --plugins @babel/plugin-transform-block-scoping --plugins @babel/plugin-transform-parameters --plugins @babel/plugin-transform-template-literals --plugins @babel/plugin-transform-for-of
