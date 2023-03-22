

// const userNames = ['김철수','강감찬','박영희'];

// const [kim, kang, park] = userNames;

// console.log(kim);
// console.log(kang);
// console.log(park);

// const [fristObj] = [{ di:1 },{id:2},{id:3}]
//         .filter(obj = > obj.id >= 2);
// console.log(fristObj);

// // 변수 교환기 
// let first = 10, second = 20;
// [second, first] = [first, second];

//앞에 2개는 변수에 각각넣고 나머지는 다시 배열로 묶고싶다.
const numbers = [1,2,3,4,5,7,9,11];
const [one, two, ...others] = numbers;

console.log(one);
console.log(two);
console.log(others);

//스프레드로 배열 간편복사
const foods = ['감튀','징거버거','소프트콘'];

//주소복사
const copyfoods1 = foods
//실제 배열 복사
const copyFoods = [...foods];
//복사를 하며 추가 까지 가능
const copyFoods1 = [...foods,'제로콕','물'];

