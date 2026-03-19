let a = 10;
let b = 3;

console.log([a += b]); // a = a + b, 13
console.log([a -= b]); // a = a - b, 10
console.log([a *= b]); // a = a * b, 30
console.log([a /= b]); // a = a / b, 10
console.log([a %= b]); // a = a % b, 1
console.log([a **= b]); // a = a ** b, 1

a = 1;
// 증가 연산자 (전위/후위)
// ++, --가 앞에 붙으나  뒤에 붙으나
// a = a + 1 or a = a - 1 연산은 동일하다.
// 앞에 붙는 경우 전위 연산으로 우선 수행
// 뒤에 붙는 경우 후위 연산으로 우선순위가 낮다.
console.log(a++); // a = a + 1
console.log(++a); // a = a + 1

//김소 연산자
console.log(a--); // a = a - 1
console.log(--a); // a = a - 1