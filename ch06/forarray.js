const arr = ["햄스터", "용", "원숭이", "공룡", "강아지"];
arr.push("고양이")

//배열.length = 배열 내 원소 개수
// 배열의 마지막 원소 인덱스 = 배열.length
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

function solution(num_list) {
    let answer = 0;
    let sum = 0;
    let mul = 1;
    
    for (let i = 0; i < num_list.length; i++) {
        
        sum += num_list[i]
        mul *= num_list[i]
    }
    if (mul < sum * sum) {
        answer = 1;
    }
    return answer;
}

let a = solution([5, 7, 8, 3])

console.log(a)