import React from 'react'
import Card from './Card'
import style from './assets/css/CardList.css'

const CardList = ({title, cards}) => {

  return (
    <div className={style.CardList}>
        <h1>{title}</h1>
        <div>
          { cards.map((card) => <Card
                                      key = {card.no}
                                      no = {card.no}
                                      title = {card.title}
                                      description = {card.description}
                                      />) }
        </div>
    </div>
  )
}

export default CardList