import React, { useState, useRef } from 'react';
import { postFetchData } from '../util/fetchDatas.js';

export default function CompLogin() {
    const idRef = useRef(null);
    const passwordRef = useRef(null);
    const [formData, setFormData] = useState({ id: '', password: '' });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (idRef.current.value === '') {
            alert('아이디를 입력해주세요');
            idRef.current.focus();
        } else if (passwordRef.current.value === '') {
            alert('비밀번호를 입력해주세요');
            passwordRef.current.focus();  
        } else {
            console.log('서버전송 --> ', formData);
            const jsonData = await postFetchData("/users/login", formData);
            jsonData.result ? alert("로그인 성공!!") : alert("로그인 실패!!");
        }
    }





    return (
        <div style={{ width: "1000px", margin: "auto" }}>
            <h1>GET :: 로그인 폼 </h1>
            <form onSubmit={handleFormSubmit}>
                <ul>
                    <li>
                        <label htmlFor="id">ID</label>
                        <input type="text"
                            id="id"
                            name="id"
                            ref={idRef}
                            value={formData.id}
                            onChange={handleFormChange}
                        />
                    </li>
                    <li>
                        <label htmlFor="password">비밀번호</label>
                        <input type="password"
                            id="password"
                            name="password"
                            ref={passwordRef}
                            value={formData.password}
                            onChange={handleFormChange}
                        />
                    </li>
                    <li>
                        <button type="submit">로그인</button>                    </li>
                </ul>
            </form>
        </div>
    );
}

