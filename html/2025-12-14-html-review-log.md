# HTML review, Day 01
> Date : 2025-12-14-SUN
---

## HTML의 기본 구성 요소
> HTML이라는 언어가 어떻게 구성되었는지 알아보자.

- 태그 : 구성 요소를 정의하는 역할
  형식 : `<태그명>`
- 속성 : 태그에 어떤 의미나 기능을 보충하는 역할
  형식 : `<태그명 속성명="속성값">`
- 문법 : 시작태그(open tag) + 콘텐츠(content) + 종료 태그(close tag) = 요소(element)
  콘텐츠가 있는 문법 or 콘텐츠가 없는 문법(빈 태그, empty tag)
- 주석(comment) : 실행결과에는 표시되지 않지만, 코드에 어떤 메모나 설명을 남긴고 싶을 때 사용
  형식 : `<!-- 주석 내용 -->`
- HTML 문법을 이루는 가장 작은 단위 : 태그

---

## HTML의 기본 구조

1. DTD
   `<!DOCTYPE html>`
   문서형 정의, Document Type Definition.
   웹 브라우저가 처리할 HTML 문서가 어떤 문서 형식을 따라야 하는지 알려 주는 것.
2. html 태그
3. head 태그 : HTML 문서의 메타데이터(metadata)를 정의하는 영역.
   메타데이터란? HTML 문서에 대한 정보(data)
   - meta 태그
     예)
     `<meta charset="UTF-8">`
     `<meta name="vewport" content="width=device-width, initial-scale=1.0">`
   - title 태그 : HTML 문서의 제목을 지정하는 데 사용.
     예)
     `<title> My First Web Page!</title>`
   - title 태그의 문서 제목은 HTML 문서마다 중복되지 않도록 주의.
     검색 엔진 사이트에서 HTML 문서를 찾을 때는 title 태그에 작성된 제목으로 찾음.
     만약 한 웹 사이트에서 제목이 중복된 문서가 여러 개라면, 검색 엔진은 해당 웹 사이트의 신뢰성을 하락시킴.
     따라서 검색 엔진 노출 시, 불이익.
4. body 태그 : 웹 브라우저에 노출되는 내용을 작성하는 영역.

---

### HTML의 특징 파악하기

1. 블록 요소와 인라인 요소
   - 블록 요소(block element) :  사용할 때마다 줄 바꿈되는 태그. 예) hn 태그, p 태그
   - 인라인 요소(inline element) : 공간이 부족할 때만 줄 바꿈되는 태그. 예) a 태그, span 태그
2. 부모, 자식, 형제 관계
   - HTML은 태그의 사용 위치에 따라 부모, 자식, 형제 관계를 맺는다.
3. 줄 바꿈과 들여쓰기
   - 줄 바꿈과 들여쓰기의 이유는 **가독성** 때문.
   - 줄 바꿈과 들여쓰기는 부모, 자식, 형제, 더 나아가 조상과 자손 관계까지 파악하기 쉽게 함.
