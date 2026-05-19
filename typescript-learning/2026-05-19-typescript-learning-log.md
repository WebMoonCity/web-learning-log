# TypeScript learning, Day 18 (실제: Day 12)
Date : 2026-05-19 Tuesday.

---

# 나의 첫 타입스크립트 프로젝트
> 타입스크립트 + 리액트 + NestJS + 몽고DB로 나만의 블로그 만들기
> 조용수 지음
> 제이펍

---

* 2026-05-19 화요일
- 23:20 ~ 24:22 (62m)
- 154 ~ 159쪽.

* 오늘은 잠깐이라도 공부하지만, 앞으로는 응집도 있게 속도를 내야겠다.

## 5 타입스크립트 예제

### 5.3 타입 가드

* 타입 가드(type guard): 타입을 예측할 수 있도록 범위를 좁히는 것. 실무에서 많이 쓰이며, 타입스크립트 핵심 개념 중 하나.

- .length
    - 보통 길이를 나타내는 프로퍼티
    - 문자열은 길이를 가짐.
    - 배열도 길이를 가짐.
    - 즉, .length는 함수가 아니라 값에 붙어 있는 정보, 즉 프로퍼티.
- number 타입은 length가 없음.
- typeof: 값의 타입을 문자열로 확인하는 JavaScript/TypeScript 연산자.

- 예
    - `function printValue(value: number | string) {console.log(value.length ? value.length : value);}` 
    - `function isPerson(p: any): p is IPerson { return "name" in p && "greet" in p; }`

- is: TypeScript에게 타입을 좁혀주는 힌트
- in: 실제 객체 안에 특정 프로퍼티가 있는지 검사
- `function isPerson(p: any): p is IPerson { return "name" in p && "greet" in p; }`, `p is IPerson`: 이 함수가 true를 반환하면 TypeScript는 p를 IPerson 타입으로 봐도 된다.
- p is IPerson = "이 함수가 true를 반환하면, p를 IPerson으로 타입 좁힘하라"는 TypeScript용 표시.
- `"name" in p`: 뜻, "name"이라는 프로퍼티가 p 안에 있는가?

* 타입 가드를 하는 첫 번째 방법: **if + is를 활용**
* 타입 가드를 하는 두 번째 방법: 타입을 판별을 할 수 있는 키를 하나 추가해주는 것.

- 타입 갖드는 개념만 알면 정말 다양한 방법으로 구현이 가능. 인터페이스 상속과 제네릭을 활용하여 코드를 단축하는 것도 또 하나의 방법.

- 제네릭(generic):
- 제네릭 문법: **홑화살괄호(<>) 안에는 함수 파라미터를 넣듯이** 타입을 넣어줌. 홑화살괄호 안에는 보통은 Type의 준말인 T를 쓰고 여러 타입이 들어간다면 G, V, K를 써줌.

- interface의 extends는 쉽게 말해 **기존 타입을 물려받아서 더 확장하는 문법.**
    - 기본 구조
    -
    ```TypeScript
    interface 새인터페이스 extends 기존인터페이스 {
        추가할프로퍼티: 타입;
    }
    ```
- type에서는 비슷한 역할을 &로 함.
    - type에는 보통 extends 대신 교차 타입(intersection type) 인 &를 많이 씀.
- interface도 type을 extends 할 수 있음.
- Type에서의 조건부 타입의 extends
    - `type IsString<T> = T extends string ? true : false;`
    - 뜻은: T가 string에 할당 가능한 타입이면 true, 아니면 false
    - 예를 들어:
    - `type A = IsString<string>; // true`
    - `type B = IsString<number>; // false`

| - | - |
|:---:|:---:|
| interface + interface | extends |
| interface + type | extends 가능, 단 객체 타입일 때 |
| type + interface | & 사용 |
| type + type | & 사용 |

| 목적 | interface | type |
|---|---|---|
| 기존 객체 타입 확장 | extends | & |
| 여러 타입 중 하나 | 어려움 | ` |
| 일부 속성 제거 | Omit 사용 | Omit 사용 |
| 일부 속성 선택 | Pick 사용 | Pick 사용 |
| 조건에 따라 타입 결정 | 거의 안 씀 | T extends U ? A : B |

- |: 파이프(pipe)라고 부름. TypeScript에서는 |가 유니온 타입(union type)을 만들 때 쓰임.

### 5.4 최하위 타입 undefined

* undefined는 값이면서 타입으로 쓸 수 있음.
* **undefined 타입이 모든 타입의 하위 타입인 것은 타입스크립트 코딩을 할 때 반드시 이해해야 하는 개념.**
* 데이터가 undefined인 경우를 대비해서 분기 처리를 하고, 기본값을 채워주는 로직이 있다면 좋음.(데이터 분석 등 작업에서 null 값이 있는 것은 좋지 않음.)

- undefined: 보통 값이 아직 할당되지 않았다는 뜻
- null: 개발자가 의도적으로 넣는 빈 값.

- ?? : null 병합 연산자.
- value ?? defaultValue: value가 null 또는 undefined이면 defaultValue를 사용함.
- undefined는 null과 같은 값은 아님.

- ==는 느슨한 비교. loose equality 또는 abstract equality. 타입을 자동 변환해서 비교.
- ===는 엄격한 비교. strict equality. 타입과 값을 모두 비교.

---