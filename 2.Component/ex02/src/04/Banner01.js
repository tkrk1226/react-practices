import React from 'react';
import styles from './assets/css/Banner01.css';

// module로 해야 객체로 접근이 가능하다.
// module로 쓰는게 아니면 Header만 써야함

const Banner01 = () => {
  return (
    <h1 className={styles.Header}>Hello React</h1>
  )
}

export default Banner01