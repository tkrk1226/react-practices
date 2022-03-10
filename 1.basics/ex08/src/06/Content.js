import React, {Fragment} from 'react';
import Clock01 from './Clock01';
import Clock02 from './Clock02';
import Clock03 from './Clock03';
import Clock04 from './Clock04';

// module 이름도 대문자로 적기!

//export default function () {
const Content = () => {

    //new Data();
    //hour minutes second

    return (
        <Fragment>
            <p>{`특징3: JSX 표현식 표기법 ({js expression})`}</p>
            <Clock01 />
            <Clock02 />
            <Clock03 />
            <Clock04 />
        </Fragment>
    );
}
    
export default Content