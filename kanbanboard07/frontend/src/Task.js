import React, {useState} from 'react'
import styles from './assets/css/Task.css';

const Task = ({no, name, done, callback}) => {
  return (
    <li className={styles.TaskList__Task}>
        <input
          type='checkbox'
          checked={done === 'Y'}
          onClick={() => {

            const newTask = {
              no : no,
              done : done
            }

            callback.update(newTask);
          }} />
        {name}
        <a 
          href='#' 
          className={styles.TaskList__Task__remove}
          onClick={() => { 
            callback.delete(no);
          }}
        ></a>
    </li>
  );
}

export default Task;