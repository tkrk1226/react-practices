// 모듈 , 전역방식 import가 따로 있음
import './assets/css/App.css';

const App = function() {
    // app rendering
    const App = document.createElement('h1');
    App.classname = 'Header';
    App.textContent = 'Hello World!!!';
    return App;
};

export { App }