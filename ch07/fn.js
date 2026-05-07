let globaNum = 0; // 전역 변수

// 함수 선언식
function mod(a, b) {
    //매개변수 기본값을 b = 0 같은 방법으로 설정할 수 있다.
    return a % b;
}

// 함수 표현식
let mod = function (a, b) {
    // 지역 변수, 해당 변수 내에서만 사용 가능한 함수
    let num = 0;
    return a % b;
};

// 익명 함수
// function (a, b) {
//     return a % b;
// };

// return 구문은 데이터를 반환하고, 함수를 종료하는 용도로 사용한다.