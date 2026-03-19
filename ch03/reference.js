const obj = {
    name: "최원호",
    age: 17,
};

const obj2 = obj;
obj.age = 18;

// 창조형 변수이 경우 복사 시,
//값이 아닌 창조값이 복사되며, 기준값 수정 시 신규 값에도 반영된다.
console.log(obj);
console.log(obj2);

// 배열 또한 창조한 데이터이기 때문에, 내부 데이터 수정 가능하다.
const arr = [];
console.log(arr);
arr.push("안녕하세요");
console.log(arr);