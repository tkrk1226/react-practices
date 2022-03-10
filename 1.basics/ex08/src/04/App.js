import React, {Fragment} from 'react';
import Header from './Header';
import Content from './Content';

const App = function() {
    // 03. 함수 컴포넌트 만들기
    // return (

    //     <Fragment>
    //         <Header />
    //         <Content />
    //     </Fragment>

    //     );

    return React.createElement(
        Fragment, 'null',
        React.createElement(Header, null),
        React.createElement(Content, null)
    );
};

/*
<div id="App">
    <Header />
    <Content />
</div>
*/

export default App;
