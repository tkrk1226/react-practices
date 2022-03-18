import React, { useState } from 'react'
import styles from './assets/css/Task.css';

const Task = ({name, done}) => {

  const [checkBox, setCheckBox] = useState(done);

  const onChangeInputCheckBox = (e) => {
    const status = (!checkBox);
    setCheckBox(status);
  }

  return (
    <li className={styles.TaskList__Task}>
        <input type='checkbox' checked={checkBox} onChange={onChangeInputCheckBox} />
        {name}
        <a href='#' className={styles.TaskList__Task__remove}></a>
    </li>
  );
}

export default Task;