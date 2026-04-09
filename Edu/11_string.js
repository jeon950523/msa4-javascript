// 문자열(String) 함수

let str1 ="d";
let str2 ='d';
let str3 =`d`;
// const string1= new String('객체로 생성');

// length: 문자열 길이 반환
console.log(str1.length);

//String.charAt(index) : string 반환
// 문자열에서 해당 인덱스에 맞는 문자를 반환
let str4 = `문자열입니다.`;
console.log(str4.charAt(1));

// String.indexof(searchstr,index) : number 반환
// 문자열에서 해당 검색어를 찾아 최초의 인덱스를 반환
// 없을 경우에는 '-1' 반환
let str5 = "문자열입니다. 문자열입니다.";
console.log(str5.indexOf('열')); // 2
console.log(str5.indexOf('열', 4)); // 시작지점을 index에, 10
console.log(str5.indexOf('입니다')); // 3
console.log(str5.indexOf('이')); // -1

// String.replace(pattern, replacement):String 변환
// 문자열에서 해당 패턴의 첫번째 문자열을 찾아서, 대체문자열로 변경한 문자열을 반환
let str6 = "문자열입니다. 문자열입니다.";
console.log(str6.replace(`문자열`,'돈까스'));

// String.replaceAll(pattern, replacement) : string 반환
// 문자열에서 해당 패턴의 모든 문자열을 찾아서, 대체문자열로 변경한 문자열을 반환
let str7 = "문자열입니다. 문자열입니다.";
console.log(str7.replaceAll(`문자열`,'돈까스'));

//String.substring(startindex,endindex): string 반환
// 문자열에서 시작인덱스부터 끝 인덱스까지 자른 문자열을 반환
// 끝인덱스 생략 시, 시작 인덱스부터 끝까지 자른 문자열 반환
let str8 = "문자열입니다. 문자열입니다.";
console.log(str8.substring(2,4));

// String.split(separator, limit) : Array 반환
// 문자열에서 구분자를 기준으로 잘라 각 문자열을 배열로 만들어 반환
// limit는 배열의 길이를 조절, 생략가능
let str9 = '짜장면, 짬뽕, 탕수육, 라조기, 크림새우';
console.log(str9.split(`, `));
let str9Arr = str9.split(`, `);
str9Arr.forEach(val => {console.log(val)});

// String.trim() :String 반환
// 문자열에서 시작과 끝의 공백을 제거한 문자열을 반환
let str10 = `           안녕하세요       `;
console.log(str10);
console.log(str10.trim());

// String.toUpperCase(), String.toLowerDase() 
// 문자열을 대소문자로 변경해서 반환
let str11 = `asdfSKJDtbjkSD`
console.log(str11.toUpperCase());
console.log(str11.toLowerCase());
