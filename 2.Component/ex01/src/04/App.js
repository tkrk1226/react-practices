import React from 'react'
import MyComponent from './MyComponent'

const App = () => {
  return (
    <div id="App">
      <MyComponent 
          /*props01={'1000'}*/
          props01={'1000'}
          props02={1000}
          props03={true} 
          />
    </div>
  )
}

export default App