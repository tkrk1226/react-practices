import React, { Component } from 'react'
import FoodListItem from './FoodListItem';

export default class FoodList extends Component {
    
    render(){

        // const components = [];
        // this.props.foods.forEach(function(food){
        //   components.push(<FoodListItem name={food.name} quantity={food.quantity} />);
        // });

        // const result = [1,2,3,4].map(function(e){
        //     return e * e;
        // });

        // result === [1,4,9,16];

        // const components = [
        //     // <FoodListItem name="Egg" quantity="10" />,
        //     // <FoodListItem name="Milk" quantity="20" />,
        //     // <FoodListItem name="Bread" quantity="60" />
        // ];

        // // loop를 어떻게 돌릴 것인지...
        // this.props.foods.forEach(function(food){
        //     components.push(<FoodListItem name={food.name} quantity={food.quantity} />);
        // });

        const components = this.props.foods.map(function(food){
            return <FoodListItem name={food.name} quantity={food.quantity} />;
        });

        return(
            <ul>
                { this.props.foods.map((food) => <FoodListItem 
                                                        name={food.name} 
                                                        quantity={food.quantity} />) }
            </ul>
        );
    }
}