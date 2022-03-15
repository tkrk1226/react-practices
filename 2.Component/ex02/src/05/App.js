import React from 'react';
import styles from './assets/scss/App.scss';

// module import 를 해서 component name이 같아도 쓸 수 있도록 할 예정

const App = () => {
  return (
    <div className={styles.App}>
        <h1 className={styles.Header}>{`SASS & SCSS(css-loader option : {module : true})`}</h1>
    </div>
  )
}

export default App
