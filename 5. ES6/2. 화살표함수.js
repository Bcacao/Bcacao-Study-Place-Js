
// //함수 선언문
// // function multi(n1, n2){
// //     return n1*n2;
// // }

// //함수 표현식
// // const multi = funtion(n1, n2){
// //     return n1 * n2;
// // };

// //화사표 함수
// const multi = (n1, n2) => n1 * n2;

// const r1 = multi(10, 3);
// console.log(r1);


// // function sayHello(){
// //     console.log('안녕하세요');
// // }

// // const sayHello = function (){
// //     console.log('안녕하세요');
// // }

// const sayHello = () => console.log('안녕하세요');


// const kim = {
//     name: '김철수',
//     age: 30,
//     // 그리팅은 숫자
//     // greeting: multi(10, 50)
//     // 그리팅은 함수
//     greeting: multi
// }

//정수 1개를 전달하면 해당 정수의 제곱값을 리턴하는
//화살표함수 pow 작성해보세요 

const pow = n => n**2;

// 함수 선언문과 함수 표현식(화살표함수포함)의 차이
function sub(n1, n2){
    return n1 - n2;
}
const r2 = sub(20, 10);
console.log(r2);


const divide = (n1, n2) => n1 / n2;
const r3 = divide(30, 6);
console.log(r3);

array.forEach(element => {
    
});

