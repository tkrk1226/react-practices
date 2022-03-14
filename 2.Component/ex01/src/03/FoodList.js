import React from 'react'

// 함수 안에서의 this가 component this가 아니므로...

const FoodList = ({foods}) => {
    return(
        <ul>
            { foods.map( (food) => { <FoodListItem 
                                                name={food.name} 
                                                quantity={food.quantity} />}) }
        </ul>
    );
}

export default FoodList