// 수학 (Math)개체
// 수학적인 처리를 하기 위한 속성과 메소드를 가진 '내장 객체'(= js기본제공)
// number 타입만 지원

// math.ceil(arg), Math.round(arg), Math.floor(args)
// 올림, 반올림, 버림
Math.ceil(0.5); // 1
Math.round(0.5); // 1
Math.floor(0.5); // 0

Math.ceil(1); // 1

a = Math.ceil((Math.random()*10));
console.log(a);

// math.min(...args), math.max(...args)
// args중 가장 작은 요소, 큰 요소를 반환
arr1 = [5,8,6,81,50,3]

Math.min(1,2,3,4); // 1
Math.max(1,2,3,4); // 4
b = Math.min(...arr1); //3
console.log(b);


// math.abs() : number반환
// 절대값 반환
Math.abs(1); // 1
Math.abs(0); // 0
Math.abs(-1); // 1

