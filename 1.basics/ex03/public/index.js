// code는 안고쳤지만 module로 import 할 수 있도록

//import appCss from './App.css'; -> 이걸 읽어서 자바스크립트 코드로 만들어줘야하는 애가 있어야한다. -> Webpack

import { App } from './App.js';

document
    .getElementById('root')
    .appendChild(App());