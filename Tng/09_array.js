//
// 원본은 보존하면서 오름차순 정렬 해주세요.
const ARR1 = [ 6, 3, 5, 8, 92, 3, 7, 5, 100, 80, 40 ];
resultARR1 = ARR1.toSorted((a,b)=> a -b);
console.log(ARR1, resultARR1);
const sortedArr = ARR1.slice().sort((a, b) => a - b);
console.log(ARR1, sortedArr);




// 짝수와 홀수를 분리해서 각각 새로운 배열 만들어 주세요.
const ARR2 = [5,7,3,4,5,1,2,0];
resultodd=ARR2.filter(a=>
  {
    if(a%2!==0)
      {return true}
    else{return false}
});
console.log(resultodd);

resulteven=ARR2.filter(a=>
  {
    if(a%2!==1)
      {return true}
    else{return false} 
});
console.log(resulteven);
//-------------------------------
//const copy = JSON.parse(JSON.stringify(ARR1));
// JSON: [{"name": "홍길동", "age": 20},{},{}]

const copy = [...ARR1];
copy.sort((a,b)=>a-b);
console.log(ARR1,copy);

const even=ARR2.filter(val => val%2===0);
console.log(even);
const odd=ARR2.filter(val => val%2===1);
console.log(odd);

// 각 요소에 3으로 나눈 나머지를 구해서, 새로운 배열로 생성해 주세요.
const ARR3 = [5,7,3,4,5,1,2,0];
let a=ARR3.map(i=>i %3);
console.log(a);

let c = []
ARR3.forEach((i)=>{const d = i % 3; c.push(d)});
console.log(c);


const ARR4 = [5,7,3,4,5,1,2,0];
const result = test(ARR4);
console.log(ARR4,result);

function test (arr){
  return arr.sort((a,b)=>a -b);
}

