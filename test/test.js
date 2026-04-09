function solution(numbers, num1, num2) {
    var answer = [];
    
    //반복문
    //num1 <= i <= num2
    for (let i = num1; i <= num2; i++) {
        answer.push(numbers[i]);
    }

    return answer;
}

console.log(solution([1, 2, 3, 4, 5], 1, 3))