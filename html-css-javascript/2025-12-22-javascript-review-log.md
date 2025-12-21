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

## 9.5, 반복문(loop)
> while, do...while, for

- 반복문을 영어로 루프(loop)라고 함.
- 무한 반복문 주의.

- do...while 문<br>
  형식
  ```javascript
  do{
    // block statement
  }while(조건식);
  ```

- for 문 : 횟수를 지정해 지정한 횟수가 끝날 때까지 블록문을 반복 실행하는 반복문, 조건식과 증감식이라는 독특한 실행 구조로 되어 있음.
- 형식<br>
  ```javascript
  for(초깃값; 조건식; 증감식){
    // block statement
  }
  ```
- for 문은 ***초깃값 → 조건식 → 블록문(조건식이 참일 경우) → 증감식 → 조건식*** 순서로 실행됨. 이때, 초깃값은 최초 1회만 실행됨.
- for 문도 중첩해서 사용 가능.

* 반복문의 중첩 횟수에는 제한이 없지만, 중첩될수록 실행되는 순서가 복잡해지므로 최소한으로만 사용해야 함.

- for 문과 배열
- for...in
- for...in, 배열을 반복할 경우 : 문법적으로는 for...in 문으로 반복할 때 배열의 순서대로 접근하는 것을 보장하지 않으므로 코드를 작성할 때 주의.

* break 문 : 어떤 반복문이라도 break 문을 만나면, 반복문 종료.
* continue 문 : 반복문을 건너뛰고 실행하라는 명령.