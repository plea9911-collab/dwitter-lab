//1. 라이브러리 임포트, 미들웨어 임포트
//const express = require('express'); //type=commojs
import express from 'express';
import cors from 'cors';

//2. 익스프레스 서버 객체 생성
const PORT = 9000;
const app = express();

//3. 미들웨어 
app.use(cors());   //모든 origin(프론트) 허용
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//4. 라우팅
app.get('/api/get', (req, res, next)=>{
    const fruits = [
        {   "name": "apple",
            "color": "red",
            "emoji": "🍎"
        },
        {   "name": "lemon",
            "color": "yellow",
            "emoji": "🍋"
        },
        {   "name": "tomato",
            "color": "red",
            "emoji": "🍅"
        }
    ]
    res.json({"fruits": fruits});
});

app.post('/api/post', (req, res, next)=>{
    // console.log('/api/post 요청!!', req.body.name);
    res.json({"result": req.body.name});
});


//5. 익스프레스 서버 객체 실행
app.listen(PORT, () => {
    console.log(`서버 실행 --->> ${PORT}`);    
});