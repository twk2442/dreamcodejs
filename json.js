// http :client들이 서버와 통신할 수있는지 정의 한것

//ajax:웹페이지에서 서버에게 동적으로 데이터를 주고받을 수있는 기술

//요즘에는 json(javascript Object Notation)데이타 타입을 주고받는다

//1. Object to json
let json = JSON.stringify(true); //json으로 변환
console.log(json); // 객체내의 데이터 전체가 스트링으로 변환된 것을 알 수 있다.

const shoes = {
  name: "kobe5",
  size: 270,
  buyDate: "2021-02",
  jump: () => {
    console.log(`${shoes.name} is good`);
  },
};

json = JSON.stringify(shoes);
console.log(json); // 객체에서(데이터)함수는 json에 포함

json = JSON.stringify(shoes, ["name"]);
console.log(json); // 객체내에서 특정원하는 데이터만 타겟으로 변환가능

//2. json to object
//parse
json = JSON.stringify(shoes);
const obj = JSON.parse(json);
console.log(obj);

// callback 함수를 통해 좀더 세밀하게 통제가능

//유용한 사이트 jsondiff.com
// json parser
