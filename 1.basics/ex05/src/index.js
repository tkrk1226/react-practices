// code는 안고쳤지만 module로 import 할 수 있도록

//import appCss from './App.css'; -> 이걸 읽어서 자바스크립트 코드로 만들어줘야하는 애가 있어야한다. -> Webpack

//import './App.css';

import ReactDOM from 'react-dom'
import { App } from './App.js';

// document
    // .getElementById('root')
    // .appendChild(App());

// 아까 만든 element를 활용해서 Rendering 해야한다.
ReactDOM.render(App(), document.getElementById('root'));

