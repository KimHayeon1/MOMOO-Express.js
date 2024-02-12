const express = require('express');
const app = express();
// const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

// dotenv.config();
const indexRouter = require('./routes/index.js');
const feedRouter = require('./routes/feed.js');

app.set('port', process.env.PORT || 3000);

app.use(
  cors({
    origin: 'https://localhost:5173',
    credentials: true,
  })
);

app.use('/', indexRouter);
app.use('/feed', feedRouter);

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '포트 대기 중');
});

// GET(조회): router.get()
// POST(저장): router.post()
// PUT(수정): router.put()
// DELETE(삭제): router.delete()

// res.send(): 문자열로 응답
// res.json(): 제이슨(Json) 객체로 응답
// res.render(): html 변환 템플릿을 렌더링(ejs)
// res.sendfile(): 파일 다운로드
