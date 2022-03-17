import React, { useRef } from 'react';
import './assets/scss/App.scss';

export default function App() {
    const outterRef = useRef(null); // 필요할 때만 hook, 관심의 분리 코드
    const innerRef = useRef(null);

    // Array.from({length: 100}, (_, i) => i+1)

    // index i만 쓰니까 안쓰는 변수 '_'를 따로 만들어서 그냥 돌린 것임
    const result = Array.from({length: 100}, (_,i) => i+1 );

    console.log(result);

    return (
        <div
            ref= {outterRef}
            className={'App'}
            onScroll={function(e){
                console.log(outterRef.current.clientHeight, ':', outterRef.current.scrollTop, ':' , innerRef.current.clientHeight)
            }}>
            <div
                ref={ innerRef }>
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