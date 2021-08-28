"use strict";
console.log("hello js");

//es6 이전에는 var 사용
// hoisting(선언이 어디있든지 제일위로 끌어올려준다.)
//var hoisting과 block scope무시로 인해 쓰지않는다.
//즉 var는 유연성으로인해 사용x
//let 사용
let a = "let a";
console.log(a);

//const
//상수: 값을 선언&할당이후 값 변경불가(immutable data type)
//1.보안상의 이유로
//2.thread safety
//3.reduce human mistakes
//인해 immutable data type  const를 사용하는것 선호

//js에서 숫자 할당은 number타입사용 (number명시x)
// ts에서는 명시한다. let a:number = 12;

//string
const char = "c";
const bre = "brenden";
const greeting = "hello" + bre;
console.log(`hi ${greeting}`);
// `~~~` 백틱, $사용하면 변수의 값이 붙여서 나온다
