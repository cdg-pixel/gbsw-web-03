let i = 0; // 초기문
//while (조건식) { 실행할 코드 }
while (i <= 4 /* 조건식 */) {
    console.log(i);
    i++; // 증감문
}

// for (초기문; 조건식; 증감문) {}

i = 0

do {
    console.log(i);
    i++;
} while (i <= 4);

// 반복문에 레이블을 설정하여
// 원하는 지점에서 continue/break하는 것이 가능하다
labelName: while (true) {
    while (true) {
        continue labelName;
        break labelName;
    }
}