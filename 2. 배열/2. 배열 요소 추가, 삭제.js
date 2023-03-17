

var pets = ['멍멍이','야옹이','쩝쩝이'];


console.log(pets);

// pets[pets.length] = '징징이';
// 이렇게 하면 안됨
// 배열은 저장소가 정해져있는데 
// 새로 추가하면 다시 저장소를 이동시킴
// 아래 push를 쓰면 연결되어 다른곳에 저장됨

pets.push('징징이');
pets.push('어흥이');
pets.push('거북이','콩콩이');

console.log(pets);


// 배열에서 말하는 요소는 배열안에 들어있는 데이터를 말함

// 맨끝에 데이터를 삭제

pets.pop();

