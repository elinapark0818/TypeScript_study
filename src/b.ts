// * export , import , namespace(옛날)

import {
  Name,
  Age,
  AAA타입,
  네임스페이스,
  나이플러스10,
  MyNamespace,
  Car,
  Bike,
  ObjFunction,
} from "./a";

console.log("import Name===", Name);
console.log("import Age===", Age);

let 타입AAA적용: AAA타입 = "임포트 잘되었음.";
console.log("타입AAA 임포트 잘되었음===", 타입AAA적용);

///<reference path="./a.ts" />
let a타입적용: 네임스페이스.a타입 = 123;

console.log(a타입적용);

let 함수: 나이플러스10 = (a) => {
  return a + 10;
};

/// <reference path="./a.ts" />

let 이름: MyNamespace.NameType = "민수";
let 나이: MyNamespace.PersonInterface = { age: 10 };

type NameType = boolean;
interface PersonInterface {}

let 빠방이: Car = { wheel: 4, model: "Sonata" };

let 숙제3함수: ObjFunction = function (a) {
  console.log(a);
};

숙제3함수({ abc: "안뇽" });

class Person<T> {
  name: T;
  constructor(a: T) {
    this.name = a;
  }
}
let a = new Person<string>("어쩌구");
console.log(typeof a.name);
