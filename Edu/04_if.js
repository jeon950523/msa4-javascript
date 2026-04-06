
// IF 문
// 조건에 따라서 서로 다른 처리(분기처리)를 하는 문법
// 조건이 true면 해당 처리 진행, 그렇지 않으면 다음 조건(else, else if)체크로 넘어감

// 1등이면 우승, 2등이면 준우승, 3등이면 3등, 나머지는 순위 외
// 5등의 경우 '특별상'
let rank = '7';
 //(안에 조건식 작성) 빈도 수 높은 것부터 
if(rank == 1){
  //조건식이 true일때, 실행하고 싶은 코드 작성
  console.log("우승");
}
else if(rank == 2)
  {
  console.log("2등");
}
else if(rank == 3)
  {
  console.log("3등");
}
else 
{
  if(rank == 5 || rank == 7){
    //위에서 체크한 조건에 모두 false일 경우, else가 실행
  console.log("특별상");
}
  else{
  console.log("순위외")
  }
}
