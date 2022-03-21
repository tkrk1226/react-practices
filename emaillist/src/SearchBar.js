import React from 'react'
import styles from './assets/scss/SearchBar.scss'

const SearchBar = ({callback}) => {
  return (
    <div className={styles.Searchbar}>
        <input 
            type='text' 
            placeholder='찾기' 
            className={styles.input}
            // value={keyword}
            onChange={e => callback(e.target.value)} />
    </div>  
  );
}

export default SearchBar