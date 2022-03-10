import React from 'react'

function Clock01() {

    const date = new Date;

    let hours = date.getHours();

    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = date.getHours() >= 12 ? 'PM ' : 'AM ';

    return (
        <div>Clock01 : {ampm} {hours}:{minutes}:{seconds} </div>
    );
}

export default Clock01