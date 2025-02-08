const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 

// EJS 설정
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // views 폴더 설정

// 홈 페이지 라우트
app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome!', message: 'EJS로 동적 페이지 만들기!' });
});

// 다른 페이지 라우트
app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us', content: '이곳은 소개 페이지입니다.' });
});

// 서버 실행
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
