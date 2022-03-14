import React, { Component } from 'react'
import FoodList from './FoodList';

export default class App extends Component {

  // 통신해서 Data 가져올것
  constructor() {
    super(arguments);

    this.foods = [{
      no: 1,
      name: 'Bread',
      quantity: 40      
    }, {
      no: 2,
      name: 'Egg',
      quantity: 80      
    }, {
      no: 3,
      name: 'Milk',
      quantity: 50      
    }];
  }
    // attribute는 다 표현식으로 쓸 것

    render() {
      return (
        <div id="App">
          <FoodList foods={this.foods} />
        </div>
      );
  }
}
