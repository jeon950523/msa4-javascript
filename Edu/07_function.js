// 함수 (function)
// 입력을 받아서 출력을 하는 일련의 과정을 정의한 것 
// 특정 처리를 모듈화해서, 코드의 중복 최소화

// 함수 선언식
// parametter : 함수 정의에서 전달받은 argument를 저장하는 변수인 ()안의 a, b
function fnc1(a, b) {
 let sum = a + b;

 // 반환
 return sum; // return : 함수의 결과값을 반환하기 위해, 없으면 반환 X
}
// argument(인수) : 함수 호출에서 전달되는 값인(소괄호 안) 1과 2
// fnc1(1, 2);
// let result = fnc1(1,2);
console.log(result=fnc1(1,2));

function fnc2(a, b){
  return a + b;
}
console.log(fnc2(3, 5)); //바로 사용

// 함수 표현식
// 함수의 이름을 생략한 익명함수를 변수에 할당해서 사용하는 방식
// 호이스팅의 영향을 받지않음
// fnc3(1, 2); //참조 에러 발생 
const fnc3 = function(a, b){
  return a + b;
}

// 화살표 함수
// 처리가 한 줄일 때 (리턴, 중괄호) 생략, 짧게 하나만 쓸때
const fnc4 = (a,b) => a + b;
const fnc5 = a => `tt${a}`; //파라미터가 하나일때는 소괄호도 생략가능
const fnc6 = () => `test`; // 파라미터가 없으면 소괄호를 해줘야함


// 콜백 함수
function callbackTest(bool, cb) {
  if(bool) {
    cb();
  }
  else{
      console.log(`콜백 실행 안함`);
    }
  }

  function test(){
    console.log(`테스트 함수 실행`)
  }
callbackTest(true, test);
