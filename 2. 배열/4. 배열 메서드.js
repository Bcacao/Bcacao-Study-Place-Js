
// // // 짜장면이 몇번쨰 있는지 세기
var foodList = ['닭꼬치', '볶음밥', '짜장면', '족발'];

// // var count = 0;

var target = '볶음밥';
// //indexOF : 배열의 특정 데이터가 몇번 인덱스에 있는지
// // 없으면 -1을 준담
//  var index = foodList.indexOf(target);

// // for(var food of foodList){
// //     if(food === target){
// //         break;
// //     }
// // count++;

// // }

//  console.log(index);

// 배열을 일정부분 잘라냄 사본배열을 반환
//원본은 안건드리고 카피본을 가져다줌

foodList.push('오뎅', '순대국밥');
// 1이상 4미만 잘름 
var slicedFood = foodList.slice(1,4);
console.log(slicedFood);

//2번부터 끝까지복사
var slicedFood2 = foodList.slice(2);
console.log(slicedFood2);

//원본 복사
var slicedFood3 = foodList.slice();
console.log(slicedFood3);

//reverse(): 배열을 역순으로 배치 원본이 변함
// 왠만하면 카피해서 사용

var nums = [10,20,30,40,50];

var copyNums = nums.slice();

copyNums.reverse();
    console.log(nums);


    // 배열 2개 연결 사본으로 줌
    
    var arr1 = [10,20,30];
    var arr2 = [40,50,60];

    var concatedArr = arr1.concat(arr2);

    console.log(concatedArr);

    // 배열의 특성 데이터가 존재하는지 확인
   var resultFlag = foodList.includes('닭꼬치');
   console.log(resultFlag);


// 배열의 특정 요소 제거, 삽입

console.log(foodList);
//1번 인덱스로 부터 2개 지워 주세요 
//원본에 반양
//안전하게 하려면 카피본 만들어야함
foodList.splice(3, 1, '열무국수');
console.log(foodList);

// 1번에 마라탕 삽입
// 한칸씩 다 밀려남
foodList.splice(1,0, '마라탕');

foodList.splice(2,0,'아이스크림','떡볶이');
