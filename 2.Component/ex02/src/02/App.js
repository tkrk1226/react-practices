import React from 'react';
import './assets/css/App.css';

// module import 를 해서 component name이 같아도 쓸 수 있도록 할 예정

const App = () => {
  return (
    <div>
        <h1 className={'Header'}>{`Normal CSS`}</h1>
    </div>
  )
}

export default App
