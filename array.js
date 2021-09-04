//array (배열 자료구조)
const arr1 = [1, 2, 3];

const fruits = ["apple", "banana"];
console.log(fruits);
console.log(fruits[1]);

//print all  fruits

for (value of fruits) {
  console.log(value);
}

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//add , remove
fruits.push("mango"); // 맨뒤에 데이터 추가
console.log(fruits);

fruits.pop(); // 맨뒤에 데이터 삭제
console.log(fruits);

//splice ; 지정하는 인덱스 포지션에서 데이터 삭제

fruits.splice(0, 1); //2번째인자 없을시 끝까지 삭제
console.log(fruits);

//concat : 두개의 배열 결합
const arr2 = ["pair", "bluevarry"];
const newFruits = fruits.concat(arr2);
console.log(newFruits);

// indexOf , includes
