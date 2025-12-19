# JavaScript review, Day 07
> Date : 2025-12-20-SAT

---

## 9장, 자바스크립트 기초 문법

## 9.1 변수와 상수

- 자바스크립트에서는 데이터를 저장하는 공간을 ***변수***와 ***상수***라고 함.
- 변수(variant)
- 키워드(keyword)란? 자바스크립트 프로그래밍 언어에서 어떤 역할이나 기능이 정해진 특별한 단어. 다른 용어로 예약어(reserved word).
- 식별자(identifier)
- 키워드는 식별자로 사용할 수 없음.
- 연산자(operator), expression, evaluation, value, semicolon, statement.
- 선언, 할당, 초기화(선언과 할당을 한 번에).

- let
- 1) 변수명 중복이 불가능.
- 2) 호이스팅 되지 않음. (사실, let과 const도 hoisting 된다. 하지만 TDZ(Temporal Dead Zone, 일시적 사각지대) 때문에 선언 전에 접근하면 에러가 난다.
- 3) 스코프의 범위가 다름.

- 식별자 명명 규칙 : 강제 규칙, 관용적 규칙.
- 식별자 표기 방법 : camel case, underscore case, pascal case

---

## 9.2 자료형.