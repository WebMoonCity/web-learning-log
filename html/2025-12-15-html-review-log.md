# HTML review, Day 02
> Date : 2025-12-15-MON
---

## 3.6 폼 구성하기

- 폼(form)은 HTML에서 사용자와 상호작용해서 정보를 입력받고 서버로 전송하기 위한 양식을 의미.

### form 태그

- 형식
  ```html
  <form action="서버 url" method="get or post"></form>
- action 속성 : 폼 요소에서 사용자와 삭호작용으로 입력받은 값들을 전송할 서버의 URL 주소를 적음
- method 속성 : 입력받은 값을 서버에 전송할 때 송신 방식을 적음. get 또는 post를 사용. 보안이 요구되면 정보는 post, 아니라면 get.

### input 태그

- 형식
  ```html
  <input type="종류" name="이름" value="초깃값">
- type 속성 : 입력된 값에 따라 상호작용 요소의 종류를 결정
- name 속성 : 입력 요소의 이름을 작성. 입력 요소가 form 태그에 의해 서버로 전송될 때, name 속성에 적힌 값이 이름으로 지정.
- value 속성 : 입력 요소의 초깃값을 작성

### label 태그

- label 태그는 form 태그 안에서 사용하는 상호작용 요소에 이름을 붙일 때 사용.
- 사용하는 방법에 따라 암묵적인 방법과 명시적인 방법으로 구분.
- 암묵적인 방법
  ```html
  <label>
    아이디
    <input type="text"> -> 상호작용 요소
  </label>
- 명시적인 방법 : label 태그의 for 속성과 상호작용 요소의 id 속성을 같은 값으로 설정하는 방법
  ```html
  <label for="userpw">password</label>
  <input type="password" id="userpw">
- 예외적으로 암묵적인 방법과 명시적인 방법을 함께 사용 가능
  ```html
  <label for="username">
  이름
  <input type="text" id="username">
  </label>

### fieldset와 lengend 태그

- form 태그 안에 사양된 다양한 상호작용 요소를 fieldset 태그를 사용해 그룹 짓기 가능.
- fieldset 태그로 그룹을 지으면, 그룹별로 박스 모양의 테두리가 생김.
- 그룹 지은 요소들은 legend 태그로 이름 붙일 수 있음.
- ```html
  <form>
    <fieldset>
      <legend>기본 정보</legend>
      <p>
        <label for="userid">아이디</label>
        <input type="text" id="userid">
      </p>
      <p>
        <label for="passwd">비밀번호</label>
        <input type="password" id="passwd">
      </p>
    </fieldset>
    <fieldset>
      <legend>선택 정보</legfend>
      <p>
        <label for="age">나이</label>
        <input type="number" id="age">
      </p>
      <p>
        <label for="recommender">추천인</label>
        <input type="text" id="recommender">
      </p>
    </fieldset>
  </form>







