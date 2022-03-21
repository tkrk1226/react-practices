import React from 'react'
import MyComponent from './MyComponent'

const App = () => {
  return (
    <div id="App">
      <MyComponent 
          props01={'1000'}
          props02={1000}
          props03={true} 
          props04={{no : '1'}} 
          props05={[1,2,3,4,5]} 
          props06={() => '함수'}
          props07={200}
          props08={[false, false, true]}
          props09={{
            no : 1,
            name : '둘리',
            email : 'tkrk1226@naver.com'
          }} 
          />
    </div>
  )
}

export default App