// ES6 -> Object

//원래는 이러한 방식으로 객체 인스턴스를 만들어야 한다.
// const obj2 = new Object()

// 객체 리터럴 문법을 사용해 객체를 편하게 생성할 수 있다
// 데이터를 담고 있는 키는 프로퍼티, 함수는 메서드라고 부른다.
const obj = {
    name: "최원호",
    age: 17,
    // 오브젝트 내에서는 할수도 추가 가능하다(메서드)
    // JS 할수도 값으로 다룰 수 있기 때문
    sayHello: function (msg) {
        console.log("안녕하세요." + msg);
    }
};

// obj["age"]와 obj.age는 동일한 기능을 하는 코드이다.
console.log(obj.age);
console.log

obj.age = 30;
// 객체에 동적으로 프로퍼티를 추가할 수 있다
obj.gender = "male";

// 객체에 프로퍼티를 추가할 수 있다
delete obj.gender;

// 객체의 프로퍼티를 수정할 수 있다.
obj.age = 28;

obj.sayHello("asdf");
console.log(obj);

let id = "jmseo";
let pw = "1234";
const credential = {
    id,
    pw,
};

console.log(credential);