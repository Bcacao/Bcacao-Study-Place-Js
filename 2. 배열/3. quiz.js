/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 
   입력받은 값들을 배열에 순차적으로 저장합니다.
   
2. '그만'이라고 입력하면 질문을 멈추고
   입력했던 숫자배열과 숫자의 총합(배열 요소의 합)을 계산하여 출력하세요.
*/

// 1. 숫자를 입력 받음
// 2. 입력 받은 숫자를 배열에 저장
// 3. 그만이고 하면 멈춤
// 4. 입력한 숫자의 배열 총합 출력

var input;  
var arr =[];
var sum;

for(;;){

// arr += prompt('숫자를 입력해주세요');
// if()
input = prompt('숫자를 입력해 주세요 \n 멈추고 싶으면 그만이라고 입력 하세요');

if (input === '그만'){
    break;
} else if (input === Number){
    arr.push(input);
}

}
alert(arr);

for(var i=0; i<arr.length; i++){
    sum += +arr[i]
}

alert(sum);