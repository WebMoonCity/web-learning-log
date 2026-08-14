---
date: 2026-08-14
title: "Server Action의 실행 경계 이해하기"
summary: "Server Action이 서버에서 실행되는 방식과 사용 시 주의점을 정리했다."
tags:
  - nextjs
  - server-actions
minutes: 60
draft: false
---

## 오늘의 목표

- [ ] Server Action이 어디에서 실행되는지 이해한다.
- [ ] 간단한 폼을 직접 구현해본다.

## 배운 것

### Server Action은 서버에서 실행된다

- `use server`가 붙은 함수는 서버에서 실행된다.
- 클라이언트 컴포넌트에서 호출할 수 있지만 함수 자체가 브라우저로 전달되는 것은 아니다.
- 인증과 입력값 검증은 Action 내부에서도 반드시 수행해야 한다.

### 내 말로 설명하면

Server Action은 클라이언트에서 서버 함수를 직접 호출하는 것처럼 보이게 해주는 인터페이스다. 하지만 실제 실행 위치와 보안 책임은 여전히 서버에 있다.

## 해본 것과 결과

### 폼 제출 실험

- 시도: Server Action으로 게시글 작성 폼을 만들었다.
- 결과: 별도의 API Route 없이 데이터를 서버로 전달할 수 있었다.
- 확인: 제출 후 `revalidatePath()`를 호출하니 목록이 갱신되었다.

```ts
"use server";

export async function createPost(formData: FormData) {
  const title = formData.get("title");
  // 입력 검증 및 저장
}
```

## 막힌 점과 질문

- `redirect()`와 `revalidatePath()`의 호출 순서가 헷갈린다.
- 오류를 사용자에게 전달할 때 `useActionState()`를 어떻게 구성해야 하는지 더 확인해야 한다.

## 오늘의 결론

Server Action은 API Route를 무조건 대체하는 기능이 아니라, 서버 변경 작업을 React UI와 밀접하게 연결하는 방법이다.

## 다음 행동

- [ ] `useActionState()`를 사용한 유효성 검사 예제를 구현한다.

## 참고

- [Next.js 공식 문서](https://nextjs.org/docs)

---

[바쁜 날]

---
date: 2026-08-14
title: "오늘의 학습"
summary: "동적 라우트의 기본 동작을 확인했다."
tags:
  - nextjs
---

## 배운 것

- `[date]` 디렉터리로 날짜별 동적 경로를 만들 수 있다.

## 막힌 것

- 정적 생성 시 날짜 목록을 어떻게 전달하는지 아직 모른다.

## 다음 행동

- [ ] `generateStaticParams()` 문서를 읽고 작은 예제를 만든다.