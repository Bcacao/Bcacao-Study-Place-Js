// var a = 10;
// var b = a;

// a = 15;
// console.log(b);


// var arr1 = [1,2,3,4];
// var arr2 = arr1;

// arr1[1] = 999;

// arr2[0] = 77;

// console.log(arr1);
// console.log(arr2);

//배열의 생성
// 배열 변수 이름 관례 : 복수형, list어미
// var fruits = ['오렌지',
//             '라임', 
//             '레몬']; //배열 리터럴 데이터를 콤마로 나열하고 세로로 쓰면 지우기 편함 타입은 오브젝트라고 나옴 
                      //배열은 객체이다 웹으로 보면 프로토타입 어레이로 되어 있고 유사배열에링 구분이 필요하다 

    // var arrayLike = {
    //     0: '자몽',
    //     0: '한라봉',
    //     0: '포도',
    //     length: 3,
    // };

    // console.log(`${fruits.length}`);

    // console.log($fruits[0]);

    // fruits[1] = '파인애플';
    //배열 수정시 주의사항 
    //없는 인덱스를 넣으면 새로 생겨 버린다 
    // 자바 같으면 안되지만 js는 그냥됨

    //배열 데이터 전체 참조 (순회 트레비스 라고 부른다)ravis 
    
   

    // var target = '바나나';
    // // 찾았는지에 대한 여부
    // var findFlag = false;
    // for (i=0; i<fruits.length; i++){
    //     if(fruits[i] === target){
    //         console.log(`${target}과일은 존재함`);
    //         findFlag = true;
    //         break;
    //     }
    // }

    // if (!findFlag) console.log(`${target} 과일없음!`);

   //배열 전용 반복문
    //
   var weekDays = ['월','화','수','목','금','토','일'];
   console.log('==============================');

//    for(var i = 0; i<weekDays.length; i++){
//     console.log(`${weekDays[i]}요일`);

//    }

    인덱스를 가지고 뭐를 할떄는 불가능 하고 
    전체 순회 할때 쓰임
    for (var day of weekDays) {
        console.log(`${day}요일`);
    }