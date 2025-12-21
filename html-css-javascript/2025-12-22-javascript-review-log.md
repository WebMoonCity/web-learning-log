# JavaScript review, Day 09
> Date : 2025-12-22-MON

---

## 9.4, 조건문

- if 문, switch 문
- block statement(블록문) : 한 개 이상의 자바스크립트 코드를 중괄호로 묶은 것. 다른 말로 블록 또는 코드 블록.

###  if, else, else if 문

### switch 문

- switch 뒤에 오는 소괄호 안의 값과 일치하는 case 문이 있을 때 해당 코드를 실행하는 조건문.
- 일치 여부 확인은 일치 연산자(===)를 사용한 비교 연산처럼 ***값과 자료형***을 함께 비교.
- switch 문에는 하나 이상의 case 문과 default 문, break 문을 사용.
- 형식
  ```javascript
  switch(key){
    case value1:
        // key가 value1일 때 실행할 블록문
        break;
    case value2:
        // key가 value2일 때 실행할 블록문
        break;
    default:
        // 아무것도 일치하지 않을 때 실행할 블록문
        break;
  }
  ```
- default 문은 생략해도 되지만,<br>
    switch 문에는 case 문과 default 문 중 하나 이상은 있어야 함.

### if 문 vs switch 문
- 이 둘의 차이는 무엇일까?
- if 문은 조건에 식(statement)을 사용.
- switch 문은 조건에 값(value)을 사용.
- 따라서, 범위를 이용한 조건을 작성할 때는 if 문이 적합.
- 그러나 값이 하나일 때는 switch 문이 더 적합.

---