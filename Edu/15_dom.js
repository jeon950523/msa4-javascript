// 문서(document object model) 객체 모델, HTML용
// 요소 선택

// document.getElementById() :  요소의 ID로 선택
const titleEle = document.getElementById(`title`);
titleEle.style.color = `blue`;

// 요소의 태그명으로 선택
// document.getElementsByTagName(tagname): 요소의 태그명으로 선택
// 해당 요소들을 HTMLCollection 객체로 획득 = 안씀
const tagEle = document.getElementsByTagName(`h1`);

for(let i = 0; i < tagEle.length; i++){
  tagEle[i].style.color = `red`;
}

// document.getElementsByClassName(className): 클래스로 요소를 선택
// 해당 요소들을 HTMLCollection 객체로 획득 = 안씀
const classEle = document.getElementsByClassName(`title2`);

// ************ 매우중요 ***************
// document.querySelector(Selector) : CSS 선택자를 사용해 요소를 찾는 메소드
// 선택된 요소가 복수일 경우, 가장 첫번째 요소만 선택
const queryId = document.querySelector(`#title`);
queryId.style.color = `skyblue`;
const queryType = document.querySelector(`h1`); // 요소를 못찾으면 null 반환
queryType.style.color = `green`;

//************ 매우중요 **************
// document.querySelectorAll(Selector) : CSS 선택자를 사용해 요소를 찾는 메소드
// 선택된 요소가 복수일 경우, 전부 선택
// 해당 요소들을 NodeList 객체로 획득 
const queryAll = document.querySelectorAll(`h1`);
queryAll.forEach(item => {
  item.style.fontSize = `4rem`;
});

//----------------------
// 요소 조작
//----------------------
// Element.textContent : 컨텐츠를 획득 및 변경
// 순수한 텍스트 데이터를 전달
const title1 = document.querySelector(`#title`);
title1.textContent; // 콘텐트 접근
title1.textContent = `Dom1`; // 콘텐트 변경
// Element.innerHTML: 컨텐츠를 획득 및 변경
// 태그는 태그로 인식해서 전달
title1.textContent = `<p>피태그</p>`; //<p>피태그</p>
title1.innerHTML = `<p>피태그</p>`; //피태그 - 개발자모드에서 <p>피태그</p>로 보임, 요즘 안씀

// Element.setAttribute(attributeName, value) : 요소의 속성과 속성 값을 추가하는 메소드
const setAttrInput = document.querySelector(`.set-attr`);
setAttrInput.setAttribute(`placeholder`, `js에서 추가`);
setAttrInput.setAttribute(`style`, `color:red;`);

// Element.removeAttribute(attributeName) : 요소의 특정 속성 제거
setAttrInput.removeAttribute(`placeholder`);

//-------------------
// 요소 스타일링
//-------------------
// Element.style : 요소에 인라인 스타일을 추가
title1.style.color = `red`;
// Element.classList : DOMTkokenList 객체로 클래스 제어
title1.classList.add(`display-none`,`test`); // 클래스 추가
title1.classList.remove(`display-none`); // 클래스 제거
title1.classList.toggle(`display-none`); // 클래스 토글

//--------------------
// 새로운 요소 생성
//--------------------
// document.createElement(tagName) : 해당 tag요소를 생성
const newP = document.createElement(`p`);
newP.textContent = `이건P에요`;
newP.style.fontSize = '3rem';
newP.style.fontWeight = 900;
newP.style.color ='#eb6671';

const newspan = document.createElement(`span`);
newspan.textContent = `이건span임`;
newspan.style.fontSize = '4rem';

const newH = document.createElement(`h2`);
newH.textContent = `H2`

// Node.appendChild(node)
// 해당 부모 node의 가장 마지막 자식 node로 추가
const parentContainer = document.querySelector(`.container`);
parentContainer.appendChild(newP);
parentContainer.appendChild(newspan);

// Node.insertBefore(newNode, referenceNode);
// 부모노드에 대상노드 앞에 새 노드자식으로 추가
parentContainer.insertBefore(newH, newspan);

// Node.removeChild(node)
// 해당 부모 노드의 특정 자식 노드를 제거

parentContainer.removeChild(newspan);
