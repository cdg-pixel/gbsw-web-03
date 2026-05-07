
// 1 <= n
// 반복문을 중첩해서 사용할 것
// 함수이름 draw

function draw(n) {
    // i는 현재 줄 수
    for (let i = 1; i <= n; i++) {
        // 햔재 i 수만큼 "A"를 출력
        let str = '';
        for (let j = 1; j <= i; j++) {
            str += "A";
        }
        console.log(str);
    }
}

draw(5);