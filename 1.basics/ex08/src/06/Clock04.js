import React from 'react'

function Clock04() {

    const date = new Date;
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return (
        <div>Clock04 : 
            {('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)}
            {' : '}
            {('0' + minutes).slice(-2)}
            {' : '}
            {('0' + seconds).slice(-2)}
            {(' ' + (hours >= 12 ? 'PM' : 'AM'))}
            <br/>
            Clock04{' : '} 
            {('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)}
            {' : '}
            {('0' + minutes).slice(-2)}
            {' : '}
            {('0' + seconds).slice(-2)}
            {(' ' + (hours >= 12 ? 'PM' : 'AM'))}
            </div>
    );
}

export default Clock04