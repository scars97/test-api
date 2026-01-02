const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// JSON 파싱 미들웨어
app.use(express.json());

// 단일 API 엔드포인트
app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello, World!',
    status: 'success',
    timestamp: Date.now()
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    message: 'OK',
    status: 'success',
  });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
  console.log(`API 엔드포인트: http://localhost:${PORT}/api/hello`);
});

