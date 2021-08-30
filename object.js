//object

const jina = { name: "jina", age: 29 };
const obj2 = new Object();
//2가지 방식 으로 obj만들 수있음

console.log(jina.name, jina.age);

// jina['name']으로도 접근가능
// 언제 이런 []접근방식을쓸ㅅ까?
// 예를들어 실시간으로 사용자에게 키값을 입력받는함수가
// 있을때 사용한다
// function print(obj, key) {
//   console.log(obj[key]);
// }
// print(ellls, "name");

// 객체 만드는 함수
function Person(name, age) {
  return {
    name, // js 기능 property value short hand
    age, // 간단하게 생략해서 작성가능
  };
}
const elli = Person("elli", 30);
// class기능이랑 비슷

//for in , for of  순차적으로 배열,객체내의 데이터에 접근

for (key in jina) {
  // for(key in obj)
  console.log(key);
}

const array = [1, 2, 3];
for (value of array) {
  // for(value of array)
  console.log(value);
}

//cloning
//obj 복제
//Object.assign(target,source);
const user2 = Object.assign({}, jina);

console.log(user2);
