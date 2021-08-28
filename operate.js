"use strict";
//string conatenation
console.log("my" + "cat");

//logical operators || && !

// loose equality == != (==두개짜리는 데이터 타입이 달라도
//안의 내용이 같으면 true 출력해줌 )

// === strict equality 데이터 타입도 고려
// 따라서 === 로 검사하는게 좋다 (안정성 측면에서)

//if else 조건문

let name = "jina";
// 삼항 연산자 ternary operator:
// condition ? value1 : value2;
console.log(name === "jina" ? "yes" : "no");

//loop 반복문 while
let i = 3;
while (i > 0) {
  console.log(`i : ${i}`);
  i--;
}

//loop for
for (i = 3; i > 0; i--) {
  console.log(`for i:${i}`);
}
