// Event 이벤트
// 웹페이지에서 유저의 행위에 따라 특정 처리를 실행 되도록 하는 처리

// inline 방식, 인라인 이벤트 = 이벤트 대상인 요소의 속성으로 이벤트를 지정하는 방법, 안씀
// HTML 문서에 JS가 혼재되므로 관리상의 문제가 발생 <button onclick="alert(`인라인요소`);">이벤트 버튼</button>

// property Listener 프로퍼티 리스너 방식
// DOM을 이용해서 해당 노드에 이벤트 프로퍼티를 통해 지정하는 방법
// const btn1 = document.querySelector(`button`);
// btn1.onclick = ()=>{
//   alert(`프로퍼티 리스너`);
// }

// addEventListener 애드이벤트리스너 방식
// DOM 요소에 이벤트 리스너를 추가하는 가장 현대적인 방법, 권장
// 동일한 이벤트를 여러번 사용 가능
const btnNow = document.querySelector(`#btnNow`);
const btnDel = document.querySelector(`#btnDel`);
const btnDel2 = document.querySelector(`#btnDel2`);
const btnDel3 = document.querySelector(`#btnDel3`);

btnNow.addEventListener(`click`, ()=>{alert(`첫번째 클릭 이벤트`)});
btnNow.addEventListener(`click`, ()=>{alert(`두번째 클릭 이벤트`)});


btnDel.addEventListener(`click`, function(){
  window.removeEventListener(`scroll`,printScroll)
});
btnDel2.addEventListener(`click`, ()=>{
  window.removeEventListener(`scroll`,printScroll)
});
btnDel3.addEventListener(`click`, delevent);


// window.addEventListener(`scroll`, ()=>{console.log(``)})
window.addEventListener(`scroll`,printScroll);

// removeEvenListener 
// DOM 요소에 추가된 이벤트를 제거하는 방법, 익명함수로 사용된 이벤트는안됨, 함수로 지정해준 같은 것만 제거
// window.removeEventListener(`scroll`, printScroll);


function printScroll(e){
  console.log(`스크롤:${e.offsetX}`);
}

function delevent(){
  window.removeEventListener(`scroll`, printScroll);
}


// 이벤트 객체
// 이벤트가 발생했을 때 해당 이벤트에 대한 정보를 포함하는 객체
const btnObj = document.querySelector(`#btnObj`);
btnObj.addEventListener(`click`, e =>{ //이벤트 핸들러 함수 = 이벤트가 발생했을때 실행되는 함수
  console.log(e);
  e.target.textContent = `하이`;
});

function eventInformation(e){
  console.log(e);
}
const container = document.querySelector(`.container`);
container.addEventListener(`scroll`, eventInformation);


document.body.addEventListener(`scroll`, eventInformation);
