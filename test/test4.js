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