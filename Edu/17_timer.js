// Timer 함수
// 일정한 시간 간격으로 작업을 반복 실행하거나, 일정시간이 지난 후 작업을 실행하는데 사용
// 비동기적으로 코드 실행

// setTimeout(cb, ms,[...args] ) 콜백,시간, []은 생략가능, number 반환
// 설정한 일정 시간 후에 cb함수를 실행
// 콜백 함수에 파라미터가 필요한 경우에 ...args를 추가
// 리턴값은 timeoutID 0이 아닌 정수값으로 (해당 타이머의 고유한 식별값)
const timeoutId1 = setTimeout(()=>{console.log(`1초`)},1000);
const timeoutId2 = setTimeout(()=>{console.log(`2초`)},1000);
const timeoutId3 = setTimeout(()=>{console.log(`3초`)},1000);

console.log(timeoutId1);

//clearTimeout(timeoutId);
clearTimeout(timeoutId1);

// setInterval(cb,ms,[...args]): number 반환
// 설정한 일정시간마다 cb함수를 실행하는 함수
// 반환값은 intervalID로 0이 아닌 정수값 (해당인터벌의 고유한 식별값)
const intervalId1= setInterval(()=>{console.log(`1ch`)},1000);

setInterval(()=>{clearInterval(intervalId1);}, 5000)