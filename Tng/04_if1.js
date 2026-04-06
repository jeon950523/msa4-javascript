let num = 100;
let grade = 'f'

if(num > 100 || num < 0 || typeof num !=='number'){
 console.log(`입력값 오류`);
}
else{
if(num === 100)
{
  console.log(`당신의 점수는 ${num}점입니다. <등급A+>` );
}
else if(num >=90)
{
  console.log(`당신의 점수는 ${num}점입니다. <등급A>`);
}
else if(num >=80)
{
  console.log(`당신의 점수는 ${num}점입니다. <등급B>`);
}
else if(num >=70)
{
  console.log(`당신의 점수는 ${num}점입니다. <등급C>`);
}
else if(num >=60)
{
  console.log(`당신의 점수는 ${num}점입니다. <등급D>`);
}
else {console.log(`당신의 점수는 ${num}점입니다. <등급F>`);}
}
