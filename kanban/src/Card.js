import React, { Fragment, useState } from 'react'
import TaskList from './TaskList';
import style from './assets/css/Card.css'

// Card__Title__is_open
const Card = ({title, description, tasks}) => {
  const [showTaskList, setShowTaskList] = useState(false);
  
  const onClickShowTaskList = () => {
    setShowTaskList(!showTaskList);
  }
  
  return (
    <div className={style.Card}>
        <div className={showTaskList ? style.Card__Title__is_open : style.Card__Title} onClick={onClickShowTaskList}>{title}</div>
        <div className={style.Card__Details}>
            {description}
            {
              showTaskList ? <TaskList tasks={tasks} />
              : <Fragment></Fragment>
            }
            
        </div>
    </div>
  )
}

export default Card;