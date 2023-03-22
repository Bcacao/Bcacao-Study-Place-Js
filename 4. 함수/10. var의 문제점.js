
// 1. 변수의 중복 선언을 허용
// 의도상에서 10을 없애고 싶지 않을경우
// x가 선언된지 모르고 다시 선언할경우
// var x = 10;
// var x = '김철수';

// let x = 10;
// let x = '김철수';

//2. 블록레벨 스코프 지원 x
// for문의 i가 전역변수화 되서 안녕이 없어진다
// var i = '안녕';

// for(var i = 0; i <3; i++){
//     console.log(i);
// }

// console.log(i);

// let i = '안녕';

// for(let i = 0; i <3; i++){
//     console.log(i);
// }

// console.log(i);

//3. 변수 호이스팅 : 변수선언문을 자동으로 맨위로 올림
z = 100;
console.log(z);

let z;