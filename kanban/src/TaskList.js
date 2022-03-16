import React from 'react'
import style from './assets/css/TaskList.css'

const TaskList = ({name, done}) => {
  return (
    <li className={style.TaskList__Task}>
      <input type='checkbox' checked='' />
      {name}
      <a href='#' className={style.TaskList__Task__remove}></a>
    </li>
    // <div>Task</div>
  )
}

export default TaskList