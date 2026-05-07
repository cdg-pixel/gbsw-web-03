function solution(num_list) {
    let odd = 0; //홀수
    let even = 0; //짝수
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            even++; //짝수 개수 카운트
        }
    }
    return [even, num_list.length - even];
}
console.log(solution([1, 2, 3, 4, 5]))

function solution(my_string, letter) {
    let answer = "";
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] != letter) {
            answer += my_string[i];
        }
    }
    return answer;
}
console.log(solution("abcdef", "f"));

function solution(numbers) {
    var answer = [];
    for (let i = 0; i < numbers.length; i++) {
        answer.push(numbers[i] * 2)
    }
    return answer;
}

console.log(solution([1, 2, 3, 4, 5]))