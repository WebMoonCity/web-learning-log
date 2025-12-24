# JavaScript review, Day 12
> Date : 2025-12-25-THU

* 어제는 어쩌다 보니, 잠을 푹 자고 쉬었다. 푹 쉬었으니, 오늘은 공부를 많이 나아가보자.

---

## 10.3, 함수 기능 확장하기

- 매개변수(parameter), 인수(argument)
- parameter : 함수를 정의할 때 외부에서 전달하는 데이터를 함수에서 받을 수 있도록 정의하는 변수
- argument :  정의한 함수를 호출할 대 소괄호 안에 전달하고 싶은 데이터를 적는데, 이를 인수라고 함.
* 매개변수도  함수 호출 시 데이터를 전달하지 않으면 undefined 값이 할당되어 코드를 실행해도 오류가 발생하지 않음.
- result 문 
- return 문은 데이터를 반환하지 않으면 단순히 함수 실행을 종료하는 역할만 하게 됨.

- return; : 함수 즉시 종료 + undefined 반환
- return 값; : 함수 즉시 종료 + 값 반환

* 1분 퀴드
- 2. 
-  오답 수정 후<br>
```javascript
function getArrayMaxNumber(arr){
  let max = arr[0];
  for(let i = 1; i < arr.length; i++){
      if(arr[i] > max){
          max = arr[i];
      }
  }
  return max;
}
const max = getArrayMaxNumber([10, 50, 30, 63, 22]);
console.log(max);
```