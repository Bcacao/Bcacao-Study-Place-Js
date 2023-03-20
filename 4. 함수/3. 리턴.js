function add(n1, n2) {
    
    return n1 + n2; // 탈출문

    console.log('메롱');
}

// 반환값: 함수 호출 이후에 함수밖으로 전달되는 값
var r1 = add(5, 7);

add(r1, r1 * 2); // add(12, 24)

// 안쪽으로 쭉가서 실행 같은레벨끼리는 왼쪽부터 실행
var r2 = add(add(2, 3), add(add(3,4), add(6,2)));
console.log(`r2 : ${r2}`);


function stopLoop() {

    while (true) {
        var flag = prompt('명령어를 입력하세요!');
        if (flag === '멈춰') {
            break;
        }
        alert(flag);
    }
    alert('수고용~');
}