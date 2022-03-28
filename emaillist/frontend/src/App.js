import React, {useState, useEffect} from 'react'
import './assets/scss/App.scss';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import data from './assets/json/data.json';

const App = () => {
  const [emails, setEmails] = useState([]);

  useEffect(async () => {
    try{
      const response = await fetch('/api', {
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

      setEmails(json.data);
    } catch(err){
      console.log(err);
    }

      // console.log(response);
  }, []);


  const notifyKeywordChange = async function(keyword) {
    console.log(`/api?kw=${keyword}`)
    try{
      const response = await fetch(`/api?kw=${keyword}`, {
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

      setEmails(json.data);
    } catch(err){
      console.log(err);
    }
  }

  const notifyEmailadd = async (email) => {
    try {  
      const response = await fetch('/api', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(email)
      });

      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if(json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }

      setEmails([json.data, ...emails]);
    } catch(err) {
      console.log(err);      
    }    
  }

  return (
    <div className={'App'}>
      <RegisterForm callback={notifyEmailadd} />
      <SearchBar callback={notifyKeywordChange}/>
      <Emaillist emails={emails} />
    </div>
  )
}

export default App