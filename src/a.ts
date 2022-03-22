export const Name = "AAAAA";
export const Age = 30;

export type AAA타입 = string;
export type 나이플러스10 = (a: number) => number;
// * namespace 사용해보기. (경험^^)
// ? 변수명이 겹치는 상황이 자주 발생해서 에러!

export namespace 네임스페이스 {
  export type a타입 = string | number;
}

export interface 인터페이스 {}

export namespace MyNamespace {
  export interface PersonInterface {
    age: number;
  }
  export type NameType = number | string;
}

// * 숙제1
export type Car = {
  wheel: number;
  model: string;
};
export interface Bike {
  wheel: 2;
  model: string;
}

// * 숙제2
export type ObjFunction = (a?: object) => void;

// * 숙제3 : 타입 중복이 많이 발생할 경우에는 네임스페이스를 여러개 만들기

namespace GoodDog {
  export type Dog = string;
}
namespace BadDog {
  export interface Dog {
    name: string;
  }
}

let dog1: GoodDog.Dog = "bark";
let dog2: BadDog.Dog = { name: "paw" };

function 함수<MyType>(x: MyType[]): MyType {
  return x[0];
}

let a = 함수<number>([4, 2]);
let b = 함수<string>(["kim", "park"]);
