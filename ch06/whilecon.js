let num = 0;

while (num < 10) {
    num++;
    if (num % 2 == 0) {
        // 현재 루프를 건너뛴다.
        continue;
    }
    console.log(num);
}

// 1 ~ 10 사이에 수를 출력하는데,
// 7을 만나면 그대로 종료하는 코드
num = 1;
while (num <= 10) {
    if (num == 7) {
        break;
    }
    console.log(num++);
}