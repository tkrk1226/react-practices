import React from 'react';

/*
const Header = function(){
    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}
*/

const App = function() {
    // app rendering
    // const App = document.createElement('h1');
    // App.textContent = 'Hello World';
    

    const message = 'Hello World';

    // tag, child, contents -> transpiling 필요
    return (
        <div>
            <h1>{message}</h1>
        </div>
    );

    // return <Hedaer />;

    // tag, child, contents -> transpiling 필요
    // const App = React.createElement('div', React.createElement('h1', null, 'Hello World'), null);

};

export { App }