// 산술 연산자
// +, -, *, /, %

let num1 = 5;
let num2 = 10;

let sum = num1 + num2;

console.log(sum);

let minus = num1 - num2;
console.log(minus);

let multi = num1*num2;
console.log(multi);

let division = num1/num2;
console.log(division);

let remainder = num1%num2;
console.log(remainder);

// 문자열 연결
let str1 = 'a' + 'b';
let str2 = `test${str1}`; //템플릿 리터널 문법
console.log(str2);

// 산술 대입 연산자
let num = 1; //'=' : 대입 연산자
num += 2; //변수가 초기화가 되어있어야함, (num = num + 1)
num -= 1;
num *= 2;
num /= 3;
num %= 2;
console.log(num);

// 증감 연산자 (++, --)
 num = 0; //초기값으로 재할당 = 초기화
console.log(`전위 증감 연산자1: ${++num}`);
console.log(num);

num = 0;
console.log(`후위 증감 연산자1: ${num++}`);
console.log(num);

// 비교 연산자
// 두 값을 비교해서 true 또는 false를 변환하는 연산자
console.log(1 > 0); //true
console.log(1 < 0); //false

console.log(1 >= 0);// ture
console.log(1 <= 0);// false

console.log(1 == '1'); //ture, 불완전 비교, 형태만 비교, 데이터 타입 비교 X
console.log(1 === '1'); //false, 완전 비교, 형태, 데이터 타입 까지 비교
console.log(1 != '1');// false, 불완전 비교
console.log(1 !== '1');// ture, 완전 비교

// 논리 연산자
// and 연산자 &&, 두개의 조건 결과가 모두 만족(true)하는지, 하나라도 false면 false
console.log(1 === 1 && 1 >= 0 );

//or 연산자 ||
// 연결한 조건 중 하나라도 true면 true, 모든 조건이 false면 false
console.log(1 === 1 || 1 >= 3);

num = 1;
console.log((num === 1 || num >= 0) && typeof num=== 'string');

// not 연산자 !
// 연산의 결과를 역전해서 반환
console.log(!(1===1));
let bool = true;
console.log(!bool);

