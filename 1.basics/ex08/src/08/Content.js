import React, {Fragment} from 'react';
import Clock from './Clock';

// module 이름도 대문자로 적기!

//export default function () {
const Content = () => {

    //new Data();
    //hour minutes second

    return (
        <Fragment>
            <p>{`Dynamic HTML Rendering`}</p>
            <Clock />
        </Fragment>
    );
}
    
export default Content