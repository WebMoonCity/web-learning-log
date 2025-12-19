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

- 자료형(data type)
- 기본(primitive) 자료형 : string, number, boolean, undefined, null, Symbol
- 참조(reference) 자료형 : object
- 역슬래시(\)를 붙여 이스케이프 문자로 사용.
- 템플릿 문자열 : 백틱(`)으로 문자열을 정의하는 방법<br>
  1) Enter을 눌렀을 때 줄 바꿈이 적용됨.
  2) ${} 문법을 이용해 문자열에 변수 또는 식을 넣을 수 있음.
- 숫자형, 논리형, undefined, null, 객체
- undefined와 null : 특수 자료형
- 객체(object) : 기본 자료형을 제외하고 JavaScript에서 거의 모든 데이터와 자료구조는 객체. 객체 자료형에서 파생되는 자료형으로 배열(array), 객체 리처럴, 함수가 있음.
- 객체 리터럴 : 객체를 젖ㅇ의하는 가장 간단한 방법
- key + value : property

---