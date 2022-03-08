import React from 'react';

const App = function() {
    // app rendering
    // const App = document.createElement('h1');
    // App.textContent = 'Hello World';
    
    // tag, child, contents
    const App = React.createElement('h1', null, 'Hello World');
    return App;
};

export { App }