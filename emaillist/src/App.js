import React from 'react'
import './assets/scss/App.scss'
import Emaillist from './Emaillist'
import RegisterForm from './RegisterForm'
import SearchBar from './SearchBar'
import data from './assets/json/data.json'

const App = () => {
  return (
    <div className={'App'}>
      <RegisterForm />
      <SearchBar />
      <Emaillist />
    </div>
  )
}

export default App