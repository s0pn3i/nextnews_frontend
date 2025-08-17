넥스트뉴스 프론트엔드

개발 실행

```bash
npm run dev
# 또는
pnpm dev
```

환경 변수

```bash
# 백엔드 API 베이스 URL
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
```

기능

- 기사 목록 조회 `/articles` API 연동 (최신/조회수 정렬, 섹션/서브섹션 필터)
- 기사 상세 조회 `/articles/{id}` API 연동
- 한국어 라벨로 섹션/서브섹션 표시
