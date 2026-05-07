let a = 10;

// 매개변수
function add(n, m = 0) {
    let a;
    let b;
    return; // 호출부에 값을 돌려준다 + 함수를 종료
}

// 함수 표현식
let add = function (a, b) {
    return a + b;
};

let obj = {};
let arr = [];

function testFn(fn) {
    fn(1, 2);
}
testFn(add);