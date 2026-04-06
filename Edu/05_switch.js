let food = "김밥"

//switch(검증 대상)
switch(food)
{ // case: 일치 검증 값
  case "김밥":
    //실행할 처리
    console.log(`분식`);
    break;
  case "돈까스": 
    console.log(`양식`);
    break;
  default:
    console.log(`이상한음식`);
    break; //scope를 빠져나감, 각 조건마다 break가 없으면 그 이후로 break 나올때까지 검증
}
