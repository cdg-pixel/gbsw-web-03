const arr = [1, 7, -2, 21, 18, 12];

let max = -100000;
// for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i]
//     }
// }
// console.log(max);

// arr[arr.indexOf(max)] = -9999

// max = -100000;
// for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i]
//     }
// }
// // compare function (a, b)
// // 양수 -> b를 a보다 앞으로 정렬
// // 0 -> 아무 작업 X
function solution(numbers) {
    // // 음수 -> a를 b보다 앞으로 정렬
    numbers.sort((a, b) => b - a);
    return numbers[0] * numbers[1]
}

console.log(solution([1, 7, -2, 21, 18, 12]));