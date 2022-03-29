import React, { Fragment, useEffect, useState } from 'react'
import TaskList from './TaskList';
import style from './assets/css/Card.css'

// Card__Title__is_open
const Card = ({no, title, description}) => {
  const[tasks, setTasks] = useState([]);
  const [showTaskList, setShowTaskList] = useState(false);
  
  const onClickShowTaskList = () => {
    console.log(`fetch task(/api/task?cardNo=${no}...`)
    setShowTaskList(!showTaskList);
  }
  
  useEffect(async () => {
    try{
      const response = await fetch(`/api/card/${no}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: null
      });

      if(!response.ok){
        throw new Error(`${response.status} ${response.statusText}`)
      }

      const json = await response.json(); // 비동기 함수
      
      if(json.result !== 'success'){
        throw new Error(`${json.result} ${json.message}`);
      }

      setTasks(json.data);
    } catch(err){
      console.log(err);
    }

  }, []);

  const notifyTaskAdd = async (task) => {
    try {  
      const response = await fetch(`/api/card/insert/${no}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(task)
      });

      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if(json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }

      setTasks([json.data, ...tasks]);
    } catch(err) {
      console.log(err);      
    }    
  }

  const notifyTaskDelete = async (taskNo) => {
    try {  
      const response = await fetch(`/api/task/delete/${taskNo}`, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: null
      });

      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if(json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }
      setTasks(tasks.filter(({no}) => { 
        return (no !== taskNo);
       }));
    } catch(err) {
      console.log(err);      
    }    
  }

  const notifyTaskUpdate = async (taskNo) => {
    try {  
      const response = await fetch(`/api/task/update/${taskNo}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: null
      });

      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if(json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }

      setTasks(tasks);

    } catch(err) {
      console.log(err);      
    }    
  }

  return (
    <div className={style.Card}>
        <div 
          className={showTaskList ? style.Card__Title__is_open : style.Card__Title} 
          onClick={onClickShowTaskList}>{title}
        </div>
            {
              showTaskList ? 
              <div className={style.Card__Details}>
                {description}
                <TaskList 
                  tasks={tasks} 
                  callback={{
                    insert : notifyTaskAdd,
                    delete : notifyTaskDelete,
                    update : notifyTaskUpdate
                  }}
                  no = {no}
                  />
              </div>
              : null
            }
    </div>
  )
}

export default Card;