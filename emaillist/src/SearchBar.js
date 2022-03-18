import React from 'react'
import styles from './assets/scss/SearchBar.scss'

const SearchBar = () => {
  return (
    <div className={styles.Searchbar}>
        찾기: <input type='text' placeholder='찾기' className={styles.input} />
    </div>  
  )
}

export default SearchBar