import React from 'react';
import CardList from './CardList';
import styles from './assets/css/KanbanBoard.css'
import cards from './data.json';

const KanbanBoard = () => {
  
    // console.log(cards);
  
    // return true 반환
    // console.log([0, 1, 2, 3, 4].filter(e => e % 2 === 0));

    return (
    <div className={styles.KanbanBoard}>
        <CardList title={'ToDo'} cards={cards.filter(e => e.status === 'ToDo')} />
        <CardList title={'Doing'} cards={cards.filter(e => e.status === 'Doing') } />
        <CardList title={'Done'} cards={cards.filter(e => e.status === 'Done')}/>
    </div>
  )
}

export default KanbanBoard