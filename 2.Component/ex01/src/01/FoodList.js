import React, { Component } from 'react'
import FooldListItem from './FoodListItem'

export default class FoodList extends Component {
    

    
    render(){

        

        return(
            <ul>
                <FooldListItem name="Egg" quantity="10"/>
                <FooldListItem name="Milk" quantity="5"/>
                <FooldListItem name="Bread" quantity="20"/>
            </ul>
        );
    }
}