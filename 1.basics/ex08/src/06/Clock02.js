import React from 'react'

function Clock02() {

    function pad(n) { return n<10 ? "0"+n : n }

    let date = new Date();
    let ampm = date.getHours() >= 12 ? 'PM ' : 'AM ';
    let strDate = ampm + pad(date.getHours()) + ":" + pad(date.getMinutes()) + ":" + pad(date.getSeconds());

    return (
        <div>Clock02 : {strDate} </div>
    );
}

export default Clock02