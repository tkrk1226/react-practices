import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import './assets/Form.css';

export default function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validEmail, setValidEmail] = useState(false); // false, "", true?
    const [gender, setGender] = useState('female');
    const [birthYear, setBirthYear] = useState("1984");
    const [description, setDescription] = useState("");
    const [agreeProv, setAgreeProv] = useState("no");

    const onChangeInputName = (e) => {
        // 10자 제한, 제한 같은게 없으면 비제어가 낫다
        setName(e.target.value.substr(0,10));
    }

    const onChageInputEmail = (e) => {
        setEmail(e.target.value);

        const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
        setValidEmail(re.test(e.target.value));
    }

    const onChangeInputPassword = (e) => {
        setPassword(e.target.value);
    }

    const onChangeInputGender = (e) => {
        setGender(e.target.value)
    }

    const onChangeInputBirthYear = (e) => {
        setBirthYear(e.target.value)
    }

    const onChangeInputDescription = (e) => {
        setDescription(e.target.value)
    }

    const onChangeAgreeProv = (e) => {
        // (e.target.value === 'no') ? setAgreeProv('yes') : setAgreeProv('no');
        const status = e.target.value === 'no' ? 'yes' : 'no';
        
        // API 호출
        const url = `/prov/agree?status=${status}`;        
        console.log(url);
        if(true){
            setAgreeProv(status);
        }
    }

    return (
        <form id="joinForm" name="joinForm" method="post" action="/do/not/post">
            <label htmlFor="name">이름</label>
            <input 
                id="name" 
                name="name" 
                type="text" 
                value={ name } 
                onChange={onChangeInputName} />

            <label htmlFor="email">이메일</label>
            <input 
                id="email" 
                name="email" 
                type="text" 
                value={email}
                onChange={onChageInputEmail}
                />
                {
                    email === '' ?
                        null :
                        validEmail ? 
                            <FontAwesomeIcon icon={faCheckCircle} style={{marginLeft : 5 ,fontSize : 16, color : 'blue'}} /> : 
                            <FontAwesomeIcon icon={faTimesCircle} style={{marginLeft : 5, fontSize : 16, color : 'red'}} /> 
                }
            <label htmlFor="password">패스워드</label>
            <input 
                id="password" 
                name="password" 
                type="password" 
                value={password}
                onChange={onChangeInputPassword} />

            <fieldset>
                <legend>성별</legend>
                <label>여</label> 
                <input 
                    type="radio" 
                    name="gender" 
                    value={ "female" } 
                    checked={gender === 'female'}
                    onChange={onChangeInputGender} />
                <label>남</label> 
                <input 
                    type="radio" 
                    name="gender" 
                    value={ "male" } 
                    checked={gender === 'male'}
                    onChange={onChangeInputGender} />
            </fieldset>

            <label htmlFor="birthYear">생년</label>
            <select 
                id="birthYear" 
                value={birthYear} 
                onChange={onChangeInputBirthYear}>
                <option value='1984'>1984년</option>
                <option value='1985'>1985년</option>
                <option value='1986'>1986년</option>
                <option value='1987'>1987년</option>
                <option value='1988'>1988년</option>
                <option value='1989'>1989년</option>
                <option value='1990'>1990년</option>
            </select>

            <label htmlFor="birthYear">자기소개</label>
            <textarea value={description} onChange={onChangeInputDescription}/>

            <fieldset>
                <legend>약관동의</legend>
                <input 
                    id="agree-prov" 
                    type="checkbox" 
                    name="agreeProv" 
                    value= {agreeProv} 
                    checked={agreeProv === 'yes'}
                    onChange={onChangeAgreeProv} />
                <label>서비스 약관에 동의합니다.</label>
            </fieldset>

            <input type="submit" value="가입" />
        </form>
    );
}