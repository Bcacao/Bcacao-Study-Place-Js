

// function counterClosure(){
    
//     let count = 0;

//     function increase(){
//         return ++count;
//     }
//     function decrease(){
//         return --count;
//     }

//     return {
//         // 이름이 같으면 하나만 써줘도됨
//         // increase: increase,
//         // decrease: decrease
//         increase,
//         decrease
//     };
// }

// const counter = counterClosure();

// const increase = counter.increase;
// const decrease = counter.decrease;


//리펙토링
/*
const counter = (() => {

    let count = 0;

    return { 
        increase: () => ++count,
        decrease: () => --count 
    };
})();

const { increase, decrease } = counter;

console.log(increase()); // 1
console.log(increase()); // 2
console.log(decrease()); // 1
*/

/*
function counterWitheCbClosure(){
    let count = 0;

    function process(callback) {
        return callback(count);
    }
    return process;
}


const counter_ = counterWitheCbClosure();

console.log(counter_(function(c) { return ++count;});
console.log(counter_(c => c += 3;);
*/

const counter_ = (() => {    
    let count = 0;
    return callback => count = callback(count);
})();

console.log(counter_(c => ++c));    // 1
console.log(counter_(c => c += 3)); // 4
console.log(counter_(c => c **= 2));// 16