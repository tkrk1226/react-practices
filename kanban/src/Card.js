import React from 'react'
import TaskList from './TaskList';
import style from './assets/css/Card.css'


const Card = ({title, description, tasks}) => {
  return (
    <div className={style.Card}>
        <div className={style.Card__Title}>{title}</div>
        <div>{description}</div>
        <ul>
            { tasks.map((task) => <TaskList
                                        key = {task.no} 
                                        name={task.name} 
                                        done={task.done} />) }
        </ul>
    </div>
  )
}

export default Card