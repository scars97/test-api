# Test API Server

배포 테스트용 간단한 Node.js API 서버입니다.

## 기능

- 단일 API 엔드포인트: `GET /api/hello`
- JSON 형식의 응답 반환
- Express 프레임워크 사용

## 사전 요구사항

- Node.js (v14 이상 권장)
- npm (Node.js와 함께 설치됨)

## 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 서버 실행

```bash
npm start
```

서버는 기본적으로 `http://localhost:8080`에서 실행됩니다.

포트를 변경하려면 환경 변수를 사용하세요:

```bash
PORT=3000 npm start
```

## API 엔드포인트

### GET /api/hello

간단한 인사 메시지를 반환합니다.

**요청:**
```bash
curl http://localhost:8080/api/hello
```

**응답:**
```json
{
  "message": "Hello, World!",
  "status": "success",
  "timestamp": 1234567890123
}
```

## 기술 스택

- Node.js
- Express.js
