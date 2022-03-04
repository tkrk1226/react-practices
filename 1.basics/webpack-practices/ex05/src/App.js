// 모듈 , 전역방식 import가 따로 있음
//import './assets/css/App.css';
import './assets/scss/App.scss';

const App = function() {
    // app rendering
    const App = document.createElement('h1');
    App.className = 'Header';
    App.textContent = 'Hello Webpack';
    return App;
};

export { App }