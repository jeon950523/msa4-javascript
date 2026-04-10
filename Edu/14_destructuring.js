// 구조분해(destructuring) 문법
// object, array 에서 값을 추출하여 변수에 바로 할당하는 문법
const arr = [1,2,3,4,5];
// let arrval1 = arr[0];
// let arrval2 = arr[1]; // 기존방법

const [val1, val2, val3, val4, val5] = arr; // 구조분해방식, 받고싶은 변수에만 할당가능
// const [val1, , , , val5] = arr; // 구조분해방식, 받고싶은 변수에만 할당가능
// const [val1, val2] = arr; // 하나씩만 담기도 가능 ','로 구분해서 담기
console.log(val2);
// --------------------------------

const user = {
  name: `홍길동`,
  age: 20,
  gender : `M`,
  addr : `서울`
}
const age = 0;
const {name, age: userAge, addr = `없음`} = user; //없을경우 = `디폴트값` 세팅가능, :etc 로 변수이름변경가능
console.log(userAge);

