import React, {Fragment} from 'react';
import Header from './Header';
import Content from './Content';

const App = function() {
    // 03. 함수 컴포넌트 만들기
    return (

        <Fragment>
            <Header />
            <Content />
        </Fragment>

        );
};

/*
<div id="App">
    <Header />
    <Content />
</div>
*/

export default App;
