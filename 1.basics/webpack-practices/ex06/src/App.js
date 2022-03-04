// 모듈 , 전역방식 import가 따로 있음
//import './assets/css/App.css';
import './assets/scss/App.scss';
import logo from './assets/images/logo.svg';

const App = function() {
    // app rendering
    const app = document.createElement('div');
    app.className = 'App';
    app.innerHTML = 
    
    `<header class='App-header'>
        <img src='${logo}' class='App-logo' alt='logo' />
        <p>Hello World</p>
    </header>`; // tilt(`)를 써서 다중라인을 쓴다.
    return app;
};

export { App }