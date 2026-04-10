







try {
    console.log("코드 실행");
    // 예외가 발생할 수 있는 코드
    let result = 10 / 0;  // NaN 발생 (Division by zero는 오류가 아님)
    console.log(result);
} catch (e) {
    // 예외 발생 시 처리
    console.log("예외 발생: " + e.message);
} finally {
    // 예외 발생 여부와 관계없이 마지막에 실행
    console.log("코드 실행 완료");
}
try{
let result = 0/0
}
catch (asdfasdf){

}
finally {
  //예외 여부와 상관없이 무조건건 실행시켜야할 로직, 필수 X
  console.log(`파이널리`)
}


try {
  // throw :  강제 예외 발생
  console.log(`트라이 시작`);
  if(false){
    const error = new Error(`강제로`); // 선언해서 에러를 넣음
    error.name = `커스텀 에러`; // 에러의 이름을 바꿈
    error.message = `에러러러럴`; // Error(); ()안적어놓으면 따로적기
  throw error; // 실행
  }

  console.log(`트라이 끝`);
} catch(error){
  console.log(error.stack); // 유저가 잘못된 값을 입력했을 때 사용
}

// 에러를 상세하게 처리하는 방법, 페이탈과 일부러일으킨것 구별
// 여러 종류의 예외를 처리하고 싶을 때,
// instanceof : 형태판별, 연산자를 사용하여 예외를 구체적으로 처리
try{
  // throw new SyntaxError();
  // throw new ReferenceError();
  throw new TypeError();
}
catch(error) {
  if(error instanceof SyntaxError ){
    console.log(`싱텍스에러`);
  }
  else if(error instanceof ReferenceError){
    console.log(`참조`);
  }
  else{
    console.log(`ㅇㅇㅇㅇㅇㅇㅇㅇ`);
  }
}







