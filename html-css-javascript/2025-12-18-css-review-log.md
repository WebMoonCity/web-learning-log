# CSS review, Day 05
> Date : 2025-12-18-THU

---

- 오늘 드는 생각, 이제 곧 JavaScript로 넘어간다. 다시 열정이 불타오르기 시작했다. 몰입할 수 있을 것 같다.

## 6.4 배경 속성으로 요소의 배경 설정

* padding과 content 영역은 요소의 배경을 나타내는 영역

---

## 6.5 위치 속성으로 HTML 요소 배치

* 위치 속성 : HTML 요소를 ***기본흐름***에서 벗어나서 원하는 곳에 배치

- position, float, clear
- position : static이 기본값
* position이 relative일 때는 기준점이 ***요소의 윈쪽 위 모서리***, absolute일 때는 ***웹 브루우저의 왼쪽 위 모서리***
* float 속성을 적용하면 해당 자식 요소를 부모 요소가 제대로 인식하지 못함.
* clear 속성은 float 속성이 마지막으로 적용된 요소 다음에 사용함.

---

## 6.6 전환 효과 속성 적용

* 전환(transition)이란? CSS에서 한 요소에 적용된 스타일 속성값을 다른 속성값으로 변하게 하는 것.
* 전환 효과 속성을 지정하는 데 필요한 최소 속성은 transition-property, transition-duration 2개.
* 어떤 요소에 전환 효과를 지정하려면 반드시 transition-property 속성과 transition-duration 속성을 함께 사용해야 함. 둘 중 한 속성이라도 빠지면 전환 효과가 제대로 적용되지 않음.

---
