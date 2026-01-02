# Test API Server

배포 테스트용 간단한 Spring Boot API 서버입니다.

## 기능

- 단일 API 엔드포인트: `GET /api/hello`
- JSON 형식의 응답 반환

## 실행 방법

### 로컬 실행

```bash
# Gradle Wrapper를 사용하여 실행
./gradlew bootRun

# 또는 빌드 후 실행
./gradlew build
java -jar build/libs/test-api-0.0.1-SNAPSHOT.jar
```

서버는 기본적으로 `http://localhost:8080`에서 실행됩니다.

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

- Java 17
- Spring Boot 3.2.0
- Gradle

