// 배열 (array) 객체
// 하나의 변수에 여러개의 값을 '순차적'으로 저장할 수 있는 데이터 구조
// 데이터 타입은 object
// 배열의 크기가 동적으로 변화 가능
// 인덱스(index) 번호가 각 요소가 이를 이용해서 순서를 정함
// 반복문을 통해서 배열의 각 요소에 쉽게 접근 가능

const arr1 = [1, 2, 3, 4, 5];

console.log(arr1[2]);

// legnth : 배열의 길이를 반환
console.log(arr1.length);
const obj = {
  //변수는 프로퍼티, 함수는 메소드
  length: 5, // 객체 안에 선언한 변수 - 프로퍼티(속성)
  fnc: ()=>{ // 객체 안에 선언한 함수 - 메소드
    console.log(`함수`);
  }
}

// Array.isArray(arg): boolean
// 배열인지 아닌지 체크
Array.isArray(arr1); // true
Array.isArray(`ddd`); // false
console.log(Array.isArray(arr1));
console.log(Array.isArray(`ddd`));

// Array.includes(searchElement):boolean
// 배열의 특정 요소의 존재 여부를 확인하고 true/false 반환
// 존재 여부 판별시 사용
console.log(arr1.includes(5));
console.log(arr1.includes(10));

// ------------------------------
const myArr = [2,4,5,6,9];

function myIncludes(a,b){
  for(let i = 0; i < myArr.length; i++){
    if(myArr[i] === a && myArr[i] === b){
      return true;
      }
    }
  return false;
  }
console.log(myIncludes(3, 2));


function myIncludes(a,b){
  for(let i = 0; i < myArr.length; i++){
    if(b[i] === a){
      return true;
      }
    }
    return false;
  }
console.log(myIncludes(4,myArr));


let target = 9;

let result = false;
for(let idx = 0; idx < myArr.length; idx++){
  if(target === myArr[idx]){
    result = true;
    break;
  }
}
console.log(result);

function myInclude(array, target){
  let result = false;
  for(let idx = 0; idx < array.length; idx++){
  if(target === array[idx]){
    result= true;
  }
}
  return result;
}
console.log(myInclude(myArr,10));
console.log(myInclude([5,4,3],5));

// -----------------------


// Array.indexOf(searchElement): return값이 number로
// 배열에서 특정 요소를 검색하고 해당 index를 반환
// 해당 요소가 없으면 '-1'을 반환, 요소의 index번호를 알고싶을때 사용
let arr = ['홍길동', '둘리', '도우너'];
console.log(arr.indexOf('둘리')); // 1반환
console.log(arr.indexOf('도우너')); // 2반환
console.log(arr.indexOf('또치')); // -1반환

// Array.push(...args) : 리턴 타입 number ** 원본 변경 **
// 원본 배열에 마지막 요소를 추가하고, 변경된 length를 반환
arr = [1, 2, 3];
let arr2 = [...arr]; // arr의 값들을 복사 스프레드 오퍼레이터
let resultArr = arr2.push(5, 6);
console.log(resultArr, arr, arr2);

// Array.concat(...args): 리턴 타입이 T[] 
// 배열의 마지막 요소를 추가하고, 리턴은 추가한 새로운 배열을 반환
arr = [1,2,3];
resultArr = arr.concat(4, 5, 6);
console.log(resultArr, arr);

//Array.pop() : T | undefined ** 원본 변경 **
// 원본 배열의 마지막 요소를 제거하고, 제거된 요소를 반환
arr = [1,2,3];
resultArr = arr.pop();
console.log(arr, resultArr);

// Array,unshift(...args): number반환, **원본 변경**
// 원본 배열의 첫 번째 요소를 추가하고, 변경된 length 반환
arr = [1,2,3];
resultArr = arr.unshift(100, 200, 300);
console.log(arr, resultArr);

//Array.shift(): T | undefined **원본 변경ㅋㅋ**
// 원본 배열의 첫번째 요소를 제거하고, 해당 요소를 반환
arr = [3,1,2,3];
resultArr = arr.shift();
console.log(arr, resultArr);

// Array.splice(start, count, ...args) : args생략가능 T [] **원본 변경**
// 1. start만 전달했을 경우
// start가 양수 일경우 해당 인덱스 요소 부터 모두 제거하고, 제거한 요소들을 배열로 반환
// start가 음수 일경우 끝 요소부터 start 수 만큼의 해당 인덱스 요소 부터 모두 제거하고, 제거한 요소들을 배열로 반환
arr = [1,2,3,4,5];
resultArr = arr.splice(3);
console.log(arr, resultArr);
// start와 count를 전달했을 경우
//    - 해당 인덱스 요소 부터 count수 만큼의 요소를 제거하고, 제거한 요소들을 배열로 반환
arr = [1,2,3,4,5];
resultArr = arr.splice(-2,1);
console.log(arr, resultArr);
// start와 count, args 모두 전달했을 경우
//    - 해당 인덱스 요소 부터 count수 만큼의 요소를 제거하고, 해당 위치에 args삽입하고, 제거한 요소들을 배열로 반환
arr = [1,2,3,4,5];
resultArr = arr.splice(2,1,100,200,300);
console.log(arr, resultArr);

//Array.join(separator): String반환
//  배열의 요소를 구분자로 연결한 문자열을 만들어서 반환
// 배열의 요소가 없으면 빈 문자열을 반환
// separator를 생략하면 기본 구분자가 ','로 연결
arr = [1,2,3,4,5];
resultArr = arr.join(`, `);
console.log(arr,resultArr);

// 기본구분자가 이런 식의 느낌
// function test(separator = ','){
//  console.log(separator);
// }
// test(),
// test(`dkdkdkdk`)



//Array.sort(): T[] **원본 변경**
// 배열의 요소를 문자열로 변환 후, 오름차순 정렬을 하고 정렬한 배열을 반환
// (a -b)가 양수일경우, a가 큰수, b가 작은수로 인식하여정렬
// (a -b)가 음수일경우, b가 큰수, a가 작은수로 인식하여정렬
// (a -b)가 0일경우, 같은 값으로 인식하여 정렬하지 않음
arr = [6, 4, 7, 1, 11];
resultArr = arr.sort((a,b) => b - a) ; // 숫자비교는 콜백함수넣어서
console.log(arr, resultArr);

let num1 = 1;
let num2 = 2;
let temp = 0;
temp = num1;
num1 = num2;
num2 = temp;
console.log(num1, num2);

// Array.map(callback): T[]
// 배열의 모든 요소에 대해 콜백 함수를 반복 실행한 후, 새로운 배열을 반환
// '콜백 함수의 리턴 값'들을 모아서 새로운 배열을 반환
arr = [1,2,3,4,5,6];
[1,2,`o`,4,5,`o`]
//{}쓸때 리턴이 있어야함
resultArr=arr.map(val=>{
  if(val % 3 === 0){
    return '짝';
  }
  else{
    return val;
  }
});
console.log(arr, resultArr);
mult=arr.map(num => num*10);
console.log(mult);

class MyArr {
  arr = [1,2,3,4,5,6];

   map(cb){
    //새로운 배열
    const newArr=[];
    
    for(let i = 0; i < this.arr.length; i++){
      let resultMap = cb(this.arr[i]);
      newArr.push(resultMap);
    }
    return newArr;
  }
}
const test = new MyArr();
test.map(val=>{
  if(val % 3 === 0){
    return '짝';
  }
  else{
    return val;
  }});
  console.log(`test:${resultArr}`);


// Array.some(cb) : boolean 반환
// 배열의 모든 요소에 대해 콜백함수를 실행 한 후, 조건에 맞는 결과가 하나라도 있으면 true, 없으면 false 반환
arr = [
  {name:`홍길동`,age:20},{name:`둘리`,age:50},{name:`또치`,age:40}
];
resultArr = arr.some(a => a.age >= 50);
console.log(resultArr);

// Array.every(cb) : boolean 반환
// 배열의 모든 요소에 대해 콜백함수를 실행 한 후, 조건이 모두맞으면 true, 없으면 false 반환
arr = [
  {name:`홍길동`,age:20},{name:`둘리`,age:50},{name:`또치`,age:40}
];
resultArr=arr.every(item=>item.age >= 20);
console.log(resultArr);

//Array.filter(cb) : T[]
// 배열의 모든 요소에 대해서 콜백함수를 실행 후, 조건에 만족한 요소만 모아서 새로운 배열로 반환
arr = [
  {name:`홍길동`,age:20},{name:`둘리`,age:50},{name:`또치`,age:40}
];
resultArr=arr.filter(item=>item.age<=40);
console.log(resultArr);

//Array.foreach(cb) : void 리턴없음
// 배열이 모든 요소에 대해 콜백 함수를 반복 실행하고 싶을 때 사용
arr = [
  {name:`홍길동`,age:20,score:30},{name:`둘리`,age:50,score:50},{name:`또치`,age:40,score:80}
];
for(let i = 0; i <arr.length; i++){
  //내가 하고 싶은 처리
  //arr[i];
}
arr.forEach(({name, age, score}, idx)=>{
  //내가 하고 싶은 처리
  console.log(`${idx}번 유저의 이름은 ${name}입니다. 점수${score}`);
}); // val : 요소, idx:인덱스번호
console.table(arr);



