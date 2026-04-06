// 데이터 타입: 여러 종류의 데이터를 식별하는 분류 체계
let num1 = 1; // JS는 하나의 변수에 어떤 타입의 데이터도 저장이 가능
num1 = 'ttt'; // 기존의 1을 없애고 ttt를 등록

//number: 숫자
let num = '1'; //num의 데이터타입은 number, literal
console.log(typeof num);

// string : 문자열
let str1 = '문자열';
let str2 = "문자열";
let str3 = `문자열 ${num}`; // 템플릿 리터럴: 변수에 저장된 값을 이용해 문자열을 합칠때 사용
console.log(str2, num);

// let id ='아이디';
// let pw = '비밀번호';
// let msg = '가 틀렸습니다.';
// console.log(`${id}${msg}`)

// boolean: 논리(true/false)
let bool1 = true ;
let bool2 = false ;

//undefined: 변수 선언했는데 값이 할당 되지 않은 상태 (시스템의 선택)
let undefinedVal;

// null : 변수에 값이 없음을 의도적으로 명시한 데이터 타입 (개발자의 선택)
let nullVal = null;

// Symbol : 절대 중복되지 않는 원시타입(primitive Type)
const Symbol1 = Symbol('test');

// Object(객체) : 키(key)-값(value)를 쌍으로 저장하는 참조타입(reference type)
let obj = {
   key1: 'val1'
  ,key2: 1
};
console.log(obj.key1);
// let obj2 = {
//    key1: 'val1',
//   // ,key2: 1 // del v2.2.2             
//    key2:'3',
//    key4: 4, // add 2.3.3 삭제하거나 추가할때 뒤에,가 있으면 동일한 key:""에 , 달아놓은걸추가해야함
// };