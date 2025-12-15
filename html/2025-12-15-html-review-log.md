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

### textarea 태그

- 여러 줄의 입력 요소를 생성할 때는 textarea 태그를 사용
- 형식
  ```html
  <textarea>초깃값</textarea>
- textarea 태그는 닫는 태그가 있음. 콘텐츠 영역에 초깃값을 정의.

### select, option, optgroup 태그

- select 태그를 사용하면 콤보박스(combobox)를 생성 가능.
- 콤보박스에 항목 하나를 추가할 때는 option 태그
- 항목들을 그룹으로 묶고 싶다면 optgroup 태그
- 형식
  ```html
  <select>
    <optgroup label="그룹 이름">
      <option value="서버에 전송할 값">웹 브라우저에 표시할 값</option>
    </optgroup>
  </select>
- 속성을 생략하면, option 태그의 콘텐츠로 적은 텍스트가 값으로 전송
- optgroup 태그로 항목들을 그룹 지을 때 반드시 label 속성으로 그룹명을 지정.
- size 속성 : 콤보박스에서 화면에 노출되는 항목 개수를 지정하는 속성. 생략할 경우 기본 1개 항목 표시.
- multiple 속성 : 여러 항목을 동시에 선택 가능
- selected 속성 : 기본 선택 항목을 변경 가능. 여러 개의 option 태그에 selected 속성을 사용하면, 마지막으로 사용된 option 태그가 기본값으로 선택되어 표시 됨.

### button 태그

- 형식
  ```html
  <button type="종류">버튼 내용</button>
- type 속성값은 폼을 서버에 전송할 목적이면 submit, 상호작용 요서에 입력된 내용을 초기화하는 버튼이면 reset, 단순한 버튼이면 button으로 지정.
- input 태그로 생성한 버튼 vs button 태그로 생성한 버튼
  - button 태그는 시작 태그와 종료 태그가 있어서 콘텐츠를 작성할 수 있음.
  - 또한, 단순한 텍스트 외에도 이미지, 태그 같은 것들을 포함할 수 있어서 버튼 요소를 꾸미기가 더 수월하다는 장점이 있음.

### 폼 관련 태그에서 사용할 수 있는 추가 속성

- diabled 속성 : 상호작용 요소를 비활성
- readonly 속성 : 상호작용 요소를 읽기 전용으로 변경. textarea 태그와 input 태그에서 사용 가능.
* disabled 속성은 form 태그로 서버에 값을 전송할 때 값이 아예 전송되지 않지만, readonly는 값이 전송된다는 차이가 있음.
- maxlength 속성 : 입력할 수 있는 글자 수를 제한
  - 형식
    ```html
    <태그 maxlength="숫자">
- checked 속성 : 요소를 선택된 상태로 표시
- placeholder 속성 : 입력 요소에 어떠한 값을 입력하면 되는지 힌트를 적는 용도로 사용.
  - 형식
    ```html
    <input placeholder="입력값에 대한 힌트">













