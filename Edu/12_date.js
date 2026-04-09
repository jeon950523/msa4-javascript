// 날짜(date) 객체
// 시간과 날짜를 처리하기 위한 속성과 메서드를 가진 내장 객체
const ts = Date.now();
const date = new Date();
console.log(ts);
console.log(date.toString());

const now = new Date(); //인스턴스화 - 메모리공간에 할당해서 사용준비가 끝난 객체, 현재시간으로 Date객체를 생성
console.log(now); //toString();이 자동으로붙어서 나옴
const date1 = new Date(`1995-12-17 13:59:36`); //YYYY-MM-DD HH:mm:ss
console.log(date1);
const date2 = new Date(1775721448710);
console.log(date2);
let date3 = new Date(1995, 11, 17, 3, 24, 0);
console.log(date3);

// Date.getFullyear() : number 반환
// 연도를 정수로 반환
console.log(now.getFullYear());

//Date.getMonth(): number 반환
// 월을 정수로 변환, 0 ~ 11의 값을 반환
console.log(now.getMonth()+1);

//Date.getDate(): number 반환
// 일을 정수로 반환
console.log(now.getDate());

//Date.getHours(): number 반환
// 시간을 정수로 반환
console.log(now.getHours());

//Date.getMinutes(): number 반환
// 분을 정수로 반환
console.log(now.getMinutes());

//Date.getSeconds(): number 반환
// 초를 정수로 반환
console.log(now.getSeconds());

//Date.getMilliseconds(): number 반환
// 밀리초를 정수로 반환
console.log(now.getMilliseconds());

//Date.getDay(): number 반환
// 오늘 요일을 정수로 반환 0~6 일~토 반환
console.log(now.getDay());

//Date.getTime(): number 반환
// `1970-01-01 00:00:00` 기준으로 얼마나 흘렀는지 Unix 타임스탬프를 반환
console.log(now.getTime());

let nowFormat = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
console.log(nowFormat);

