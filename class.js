"use strict";

//class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //getter and setter
  //잘못된 데이터를 입력시 바로잡아주는 것
  get age() {
    return this._age; // age 이름 바꿔서 주의
  }
  set age(value) {
    if (value < 0) {
      throw Error("age can not be neagative");
    }
    this._age = value; // age 이름 바꿔서 주의
  }
  speak() {
    console.log(`${this.name}:hello`);
  }
}

const jina = new Person("jina", 29);
console.log(jina.name);
console.log(jina.age);
jina.speak();

//상속 다양성
//extends
