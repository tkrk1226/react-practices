
import React, { useRef } from 'react';
import styles from './assets/css/TaskList.css';
import Task from './Task';

const TaskList = ({tasks, cardNo, callback}) => {


  return (
    <div className={styles.TaskList}>
        <ul>
            {tasks.map(task => <Task
                                    key={task.no}
                                    name={task.name}
                                    done={task.done} /> )}
            <input 
              type='text'
              name={'task_name'}
              className={styles.TaskList__add_task}
              placeholder={'태스크 추가'}
              onKeyPress={e => {
                  if(e.key === 'Enter'){

                    console.log(`call notifyAddTask(${e.target.value})`);
                    
                    try {
                      if(e.target.value === ''){
                        throw new Error(`${e.target.name}이 비어 있습니다. `);
                      }
                      const newTask = { 
                        name : e.target.value ,
                        done : 'N', 
                        cardNo : cardNo };
                      callback(newTask);
                    } catch(err) {
                      console.log(err.message);
                    }
                  }
                }
              }
            />
        </ul>
    </div>     
  );
}

export default TaskList