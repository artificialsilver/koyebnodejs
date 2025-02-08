// Express 모듈을 불러옵니다.
const express = require('express');
const app = express();

// 포트 번호를 지정합니다.
const PORT = process.env.PORT || 3000;

// 기본 경로에 대한 요청 처리
app.get('/', (req, res) => {
  res.send('Hello, world! Welcome to my Node.js application!');
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
