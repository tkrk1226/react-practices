function App() {
    // app rendering
    const App = document.createElement('h1');
    App.textContent = 'Hello World';
    return App;
};

//var el = App();

// dom이 다 loading 되야하는게 아니냐 할 수도 있는데 DOM 생성 중 script tag를 쓴 것이므로 괜찮다!
document
    .getElementById('root')
    .appendChild(App());