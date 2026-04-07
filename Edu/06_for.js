// for 문
// 기본문법
// for(초기값; 조건식; 1회 루프당 증감 값){
// console.log(i + "번째 루프"); - 반복하고 싶은 처리
// }

// for(let i = 0; i < 3; i += 1){
//   if(i===1){
//     break; // 처리중 break를 만나면 그 즉시 선언부{} 종료(아래에 뭐가있던)
//   }
//   console.log(`${i}번째 루프문`);
// }

// for(let i = 0; i < 5; i++){
  
//  //continue: 만나는 즉시 그 다음 루프로 진행 - 현재 처리 건너뜀, 보통if랑 같이써서 필요없는 조건걸러냄
//  if(i % 2 === 0){
//    continue;
//  }
//  console.log(`${i}번째 루프문`); //회색처리 되면 실행안됨
// }

// for(let i = 0; i < 3; i++){
//   console.log(`부모: ${i}번째`);
  
//   for(let z = 0; z < 3; z++){
//     console.log(`첫째자식: ${z}번째`);
//   }
//   for(let y = 0; y < 3; y++){
//     console.log(`둘째자식: ${y}번째`);
//     for(let x = 0; x < 3; x++){
//     console.log(`둘째자식의자식: ${x}번째`);
//   }
//   }
// }

//구구단 2단
// 예시 2 x 1 = 2 .... 2 x 9 = 18
// for(let i = 1; i < 10; i++){
//   let x = i*2
//   console.log(`2x${i}=${x}`);  
// }
let startDan = 2;
for(startDan; startDan <= 9; startDan++ )
  {
  console.log(`** ${startDan}단 **`);
  for(let x = 1; x <=9; x++){
    console.log(`${startDan} X ${x} = ${startDan*x}`)
  }
}





