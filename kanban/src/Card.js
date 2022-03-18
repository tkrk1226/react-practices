import React, { useState } from 'react'
import TaskList from './TaskList';
import style from './assets/css/Card.css'


const Card = ({title, description, tasks}) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className={style.Card}>
        <div className={style.Card__Title}>{title}</div>
        <div className={style.Card__Details}>
            {description}
            <TaskList tasks={tasks} />
        </div>
    </div>
  )
}

export default Card;