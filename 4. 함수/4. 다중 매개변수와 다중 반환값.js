

//다중 매개변수(멀티 파라미터): 매개변수가 n개인경우
//집합 자료구조를 매개변수로 사용)(집합자료구조 = 배열이나 객체)

//n개의 정수를 전달하면 해당 정수의 총합을 구해주는 함수

//스프레드(ES6)

function addAll(...numbers){
    var total = 0;
    for(var n of numbers){
        total+= n;
    }
    return total;
}

var r1 = addAll(1,3,5);
console.log(r1);


// 함수의 리턴값은 언제나 하나 
