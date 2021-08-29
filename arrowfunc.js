//function
//js에서 function은 object취급

function printHello() {
  console.log("hello");
}

printHello();

function log(message) {
  // js에서는 타입이 없기에 변수만 보고 타입 예측 불가능
  console.log(message);
}
log("hellos");
log(13);

// ts 홈페이지 에서  playground 에서 연습해보기
// default parameter
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("hi");
// rest parameter
function printAll(...args) {
  pass;
}
// ...~~는 배열타입 매개변수
// js에서 scope 는 밖에서는 안에 접근x 안에서만 밖의 변수,접근 가능
//function 선언도 호이스팅이 된다. 따라서 선언이전에 사용가능

// 함수를 변수에다가 할당가능
const printYes = function () {
  console.log("yes");
};

const printNo = function () {
  console.log("no");
};

// callback 함수
// 변수에다가 할당한 함수를 매개변수로 전달해서 그 함수내에서 사용하는 것

function rd(answer, printYes, printNo) {
  if (answer === "love") {
    printYes(); // 표현에 주의 ()써줘야함
  } else {
    printNo();
  }
}
rd("love", printYes, printYes);

//arrow function
const add = (a, b) => a + b; // 1줄일때는 {} ,return생략가능
const min = (a, b) => {
  console.log("-");
  return a - b; // 여러줄이라서 {} 쓸때는 return 생략 불가
};
