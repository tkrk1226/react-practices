import React from 'react'
import style from './assets/css/CardList.css'

const CardList = ({title}) => {
  return (
    <div className={style.CardList}>
        <h1>{title}</h1>
    </div>
  )
}

export default CardList