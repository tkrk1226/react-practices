import React, {Fragment, Component} from 'react';
import Header from './Header';
import Content from './Content';

class App extends Component {

    // component로 가장 중요한 부분
    render() {
        return (
        <Fragment>
            <Header />
            <Content />
        </Fragment>
        );
    }
}

export default App;
