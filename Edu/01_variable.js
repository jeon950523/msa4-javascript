// 변수(variable): 변하는 데이터(값)를 저장하는 공간

//var: 중복 선언 가능, 재할당 가능, 함수레벨 스코프
var num1; // 변수 선언
var num1; // 중복 선언 가능
var age = 1; // 변수 선언 및 초기화
age = 20; // 재할당
num1 = 90; // num1의 변수의 초기화
str1 = 'abc'; // var가 디폴트로 설정되어 str 변수선언 및 초기화함

// let: 중복 선언 불가능, 재할당 가능, 블록레벨 스코프
let name = '길동';
// let name; // 중복 선언 불가능
name = '홍길동'; // 재할당
console.log(name);

// 상수(constance) : 중복 선언 불가, 재할당 불가, 블록 레벨 스코프
const gender = 'M';
// const gender; // 중복 선언 불가
// gender = 'f'; // 재할당 불가

//호이스팅 (hoisting) : 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것
console.log(hoho); //undefined 출력
var hoho = '호호'; 
console.log(hoho); // '호호' 출력

console.log(haha); // 참조 에러 발생, 발생시 코드 실행 멈춤(fatal error)
let haha = '하하';
console.log(haha);