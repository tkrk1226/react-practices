import React, { Component } from 'react';
import './assets/scss/App.scss';

export default class App extends Component {
    
    // render만 불리니까 여기에 코드가 자유롭게 생성 될 수 있음.

    onScroll(e) {
        console.log(this.outterRef.clientHeight, ':', this.outterRef.scrollTop, ':' , this.innerRef.clientHeight);
    }

    // bind this의 주체가???

    render(){
        return (
            <div
                ref={ref => this.outterRef = ref }
                className={'App'}
                onScroll={this.onScroll.bind(this)}>
                <div
                    ref={ref => this.innerRef = ref }>
                    <ul>
                        {  Array.from({length: 100}, (_,i) => i+1 ).map(i =>
                            <li key={i}>
                                { `아이템 ${i} 입니다.` }
                            </li>
                        ) }
                    </ul>
                </div>
            </div>
        );
    }
}