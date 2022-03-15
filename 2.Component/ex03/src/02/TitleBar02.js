import React from 'react'

const TitleBar02 = () => {

  const OnClickHandler = e => {

    console.log('TitleBar02 Clicked!!!!');
  }

  return (
    <h1
      style={{cursor : 'pointer'}}
      onClick={OnClickHandler}>
      ex03 : Functional Event Handler (Functional Component)
    </h1>
  )
}

export default TitleBar02