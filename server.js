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

// 자기소개 페이지 라우트 추가
app.get('/profile', (req, res) => {
  res.render('profile', profileData);
});

// 다른 페이지 라우트
app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us', content: '이곳은 소개 페이지입니다.' });
});

// 서버 실행
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// 데이터 정의
const profileData = {
  name: '홍길동',
  introduction: '안녕하세요! 저는 웹 개발자 홍길동입니다.',
  description: '웹 개발을 좋아하고, 다양한 기술을 배우는 것을 즐깁니다.',
  skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React'],
  email: 'example@example.com',
  linkedin: 'https://www.linkedin.com/in/username'
};

// 자기소개 페이지 라우트 추가
app.get('/profile', (req, res) => {
  res.render('profile', profileData);
});

app.use(express.static('public'));
