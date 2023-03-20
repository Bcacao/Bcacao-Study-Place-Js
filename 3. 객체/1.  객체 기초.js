//객체 리터럴(값)
var dog = {
    //프로퍼티
    name: '뽀삐',
    kind: '진도',
    age: '3',
    //'for waiting': 11,
    injection: true,
    faortity: ['산책', '간식'],
    hate: null,

    playWithChild: function(){}

};

var cat = {
    //프로퍼티
    name: '콩순',
    age: '2',
    //'for waiting': 11,
    injection: true,
    faortity: ['낮잠자기', '벙어지럽히기'],
    kind: '블랙러시안'
};

// };
// //객체에 저장된 데이터 참조
// //점은 ~~의로 해석하면됨
// console.log(dog.name);
// console.log(cat.age);
// console.log(cat.faortity);
// console.log(dog.faortity[0]);

// dog.faortity.push('꼬리 흔들기');

// //프로퍼티 참조2
// console.log(dog.injection);

// console.log(dog['injection']);

// //key를 변수에 저장
// var fv = 'favortiye';
// console.log(cat[fv]);

// // 프로퍼티 값 수정
// dog.age = 4;
// cat.favorite[1] = '실뭉치';

// dog['injection'] = false;

// console.log(dog);

// //프로퍼티 동적 추가 
// cat.owner = '김철수';
// console.log(cat);

// // 프로퍼티를 삭제 
// delete cat.owner;

// 프로퍼티 존재 유무 확인 
//키를 반드시 문자열로 표기 해야함.
// var ageFlag ='age' = in cat;

var m = 'master';

if(!('master' in cat)) {
    cat['master'] = '김또또';
}

//객체를 순회하는 반복문
// 키를 추출해줌
for(var k in dog ){
   // console.log(k);
   console.log(dog[k]);
}


//객체의 중첩구조
//예시 : 게시판

var articles = {
    totalCount: 25578,  //총 게시물 수
    admin: 'abc1234', //게시판 관리자 아이디
    page: 2558, //총 페이지 수
    articleList: [ // 게시물 목록
        {
            bno: 3, //글번호
            title: '가위바위보', //글제목
            writer: '김짱껨뽀',  //작성자
            content: '다덤벼 ^^', //글내용
            viewCount: 53, //조회수
            recomm: 10, //추천수
            regDate: '21-12-07' //작성일자
        }, 
        {
            bno: 2, //글번호
            title: '노는게', //글제목
            writer: '뽀로로',  //작성자
            content: '제일조와~~~', //글내용
            viewCount: 253, //조회수
            recomm: 11, //추천수
            regDate: '21-12-06' //작성일자
        }, 
        {
            bno: 1, //글번호
            title: '아멘', //글제목
            writer: '개신교신자',  //작성자
            content: '할렐루야', //글내용
            viewCount: 23, //조회수
            recomm: 5, //추천수
            regDate: '21-12-05' //작성일자
        }
    ]
};