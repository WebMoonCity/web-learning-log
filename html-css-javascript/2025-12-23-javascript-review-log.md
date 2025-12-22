# JavaScript review, Day 10
> Date : 2025-12-23-TUE

---

- Chapter 10, Function
- Chapter 11, Object
- Chapter 12, DOM(Document Object Model) and Event

---

## 10장, JavaScript Function

- 자바스크립트에서 함수는 객체에서 파생된 자료형 중 하나로 볼 수 있지만, 문법 전반적으로 굉장히 중요한 역할을 하는 개념.

### 10.1, What is a Function?

* 자바스크립트에서 함수(function)는 어떤 목적을 가지고 작성한 코드를 모아 둔 블록문

### 12.2, 함수를 정의하는 방법

* 함수 선언문(function declaration statement)

* 함수 표현식(function expression)
- 함수는 객체에서 파생된 자료형. 자바스크립트에서 자료형은 변수에 할당할 수 있어야 함. 따라서 함수도 변수에 할당할 수 있음.
- 함수 표현식은 변수에 할당하는 함수에 식별자가 있으면 ***네이밍 함수(naming function)***,<br>
  없으면 ***익명 함수(anonymous function)***로 다시 구분.
- ```javascript
  const 변수명 = function(){}; // anonymous function
  const 변수명 = function identifier(){}; // naming function
  ```
* ***함수 표현식***으로 함수를 정의할 때는 function 키워드 다음에 오는 식별자가 아니라 변수명으로 호출해야 한다.

* 화살표 함수(arrow function)
- ```javascript
  () => {};
  ```
* 화살표 함수는 익명 함수로만 정의할 수 있음. 함수를 호출하려면 정의된 함수를 변수에 할당하는 방법인 함수 표현식을 사용해야 함.
- ES6가 지원되는 개발 환경에서는 가장 많이 사용하는 방법.

* [x] 알아봄 : 함수의 매개변수와 인수는 여러개 가능? 찾아보고 알아보기.

* 헷갈리는 것 ChatGPT에 알아본 것<br>
  [함수 정의 방법]<br>
  ├─ 함수 선언문 (statement)<br>
  │    └─ function foo() {}<br>
  │<br>
  └─ 함수 표현식 (expression)<br>
       ├─ 익명 함수 표현식<br>
       │    └─ const a = function () {}<br>
       │<br>
       ├─ 네이밍 함수 표현식<br>
       │    └─ const a = function foo() {}<br>
       │<br>
       └─ 화살표 함수 표현식<br>
            └─ const a = () => {}

---

### 10.3, 함수 기능 확장하기