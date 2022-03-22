import React, { useState } from "react";

type myType = string | number;

let name: string | number = "elina";

name = 123;

let firstName: string[] = ["kim", "park"];

let lastName: { name: string } = { name: "elina" };

let who: { name?: string } = {};

function MyFunc(x: number): number {
  return x * 2;
}
MyFunc(123);

type Member = [number, boolean];

let john: Member = [123, true];

type Name = { [key: string]: string };

let doo: Name = { name: "park", age: "123" };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let 이름: string = "kim";
let 나이: number = 34;
let 결혼했니: boolean = false;
// null, undefined 도 있음

let 회원들: string[] = ["k", "d", "a"];

let 멤버들: { mem1: string; mem2: number } = { mem1: "kk", mem2: 123 };

let 자동 = [1, 2, 3];

let 내이름: string = "박윤정";
let 내나이: number = 31;
let 출생지역 = "모른다";

let 내가좋아하는노래 = {
  title: "너의 모든 순간",
  가수: "성시경",
};

let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

let 오아: number | string | boolean = 123;
오아 = "가나다";
오아 = true;

let 멤버들들: (number | string)[] = [1, 2, 3, "5"];

let 오브젝트: { 마: string | number } = { 마: 12 };

let 애니: any;
애니 = 123;
애니 = "가나다";
애니 = [1, 2, 3, 4, 5];
애니 = { a: 1 };

let 언노운: unknown;
언노운 = "가나다";
언노운 = [1, 2, 3, 4, 5];
언노운 = { a: 1 };
언노운 = 123;

// 언노운 - 1; // 엄격하게 number만 산술가능하다

let 유니어언: string | number;
// 유니어언 - 1; // 엄격하게 number만 산술가능하다

let 어레이: (number | string)[] = [1, "2", 3];
let 오브젝: { data: number | string } = { data: "123" };

let user: string = "kim";
let age: number | undefined = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

let 학교: {
  score: (boolean | number)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};

학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

// ? 머지..95번째 줄 => friend: string | {}; 이건 왜 통과되지??

function 함수(n: number): number {
  return n * 2;
}

함수(30);

// void 타입 : 리턴하고 싶지 않을 때

function 보이드(x?: number): void {}

보이드();

// * ?는 들어올 수도 있다 이지만 | undefined 가 더해지는 거다

function 안녕(x?: string) {
  if (typeof x === undefined) return console.log("이름이 없습니다");

  console.log("안녕하세요" + x);
}
안녕();

function sayHi(x?: string) {
  if (x) {
    console.log("안녕하세요 " + x);
  } else {
    console.log("왜입력안함");
  }
}
sayHi("홍길동");
sayHi();

function 랭스(x: string | number): number {
  return x.toString().length;
}
랭스("123");
// 월소득 만원당 1점
// 집보유시 500 / 미보유시 0
// 매력점수는 상일 때만 100점
function 결혼가능확률(월소득: number, 집보유여부: boolean, 매력점수: string) {
  let count: number = 0;
  count += 월소득;
  if (집보유여부) count += 500;
  if (매력점수 === "상") {
    count += 100;
  }
  if (count >= 600) return "결혼가능";
}

결혼가능확률(700, false, "중");

function 내로잉(x: string | number) {
  if (typeof x === "number") {
    return x + 5;
  } else {
    return x + "문자열더하기";
  }
}

내로잉(5);

//

function 배열내로잉(x: string | number) {
  let arr: number[] = [];
  if (typeof x === "number") {
    arr[0] = x;
  } else {
    return arr;
  }
}

배열내로잉(123);

// assertion : 타입 덮어쓰기
// todo: 내로잉 할때 쓴다.
// todo: 어떤 타입이 들어올지 100% 확실하게 알 때만 쓴다. *쓰지마라 버그추적안된다*
// todo: 디버깅용 비상용으로 쓴다 **왠만하면 쓰지 말자**

function 어썰션(x: string | number) {
  let arr: number[] = [];
  arr[0] = x as number;
}

어썰션(321);

// type alias

type Animal = string | number | undefined;

let 동물: Animal = "사자";

type 오브젝타입 = { 이름: string; 나이: number };

let 오브젝별명: 오브젝타입 = { 이름: "콩이", 나이: 30 };

// type 작명 규칙 : //* 1. 영어대문자 2. Animaltype

const 출생지 = "서울";
// 출생지 = "못바꿈";

const 출생지오브젝 = { region: "부산" };
출생지오브젝.region = "대구"; //* 바꿀 수 있다

type GP = {
  readonly name: string;
  age?: number;
};

const 여친: GP = {
  name: "융졍이",
  age: 123,
};

// 여친.name = "없음"; // * readonly 를 쓰면 재할당 불가

// ! 타입스크립트 에러는 에디터 & 터미널에서만 존재한다. => 자바스크립트를 읽기 때문

여친.age = undefined;

type Names = string;
type Age = number;
type Person = Names | Age;

let 테스트: Person = 12345;

// * type 합치기 (extend 하기)
type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;

let position: NewType = { x: 10, y: 20 };

position.x = 300;

// ? type alias 2개를 합칠 때 중복된 속성이 있으면 어떻게 되나?
type 아 = { 아: string };
type 어 = { 아: string };
type 아어 = 아 & 어;

let 아어테스트 = { 아: "아아" };
// * 이름이 같은 속성을 여러개 쓸 수 없다.

type 색깔 = { color?: string };
type 사이즈 = { size: number };
type 위치 = { readonly position: number[] };
type 숙제2내답안 = 색깔 & 사이즈 & 위치;

// ? 나는 왜 하나씩 해서 더했냥..

type 숙제2답 = {
  color?: string;
  size: number;
  readonly position: number[];
};

type 숙제3내답안 = {
  name: string;
  phone: number;
  email: string;
};

let 숙제3테스트 = {
  name: "스트링",
  phone: 1234567,
  email: "elinapark@github.com",
};

type 어른 = {
  adult: boolean;
};

type 숙제4내답안 = 숙제3내답안 & 어른;

let 숙제4테스트 = {
  name: "어른이오",
  phone: 123,
  email: "a@a.com",
  adult: true,
};

// * 더 엄격한 타입지정(Literal types)
let 엄격: 123;
엄격 = 123;

let 접니다: "대머리" | "솔로";
접니다 = "대머리";

function 함수리터럴(x: 123): 1 | 0 {
  return 0;
}

함수리터럴(123);

// 가위, 바위, 보 파라미터 입력 가능
// 가위,바위,보 만 들어올 수 있는 배열을 리턴해야 함

function 가위바위보(x: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}

가위바위보("가위");

// * 리터럴타입은 const 변수의 업그레이드 버전
// todo: as const 를 붙인다. => 오브젝트 자료를 완전히 잠그고 싶으면 쓰라
// todo: readonly 를 쓴다

let 자료 = {
  name: "kim",
} as const; // * 이 오브젝트는 리터럴타입 지정 알아서 해주셈
// * (오브젝트안에 있는 모든 속성을 readonly로 바꿔줌. 변경하면 에러남)

function 자료함수(x: "kim") {}
자료함수(자료.name);

type 함수타입 = (x: string) => number;

// * 함수표현식에만 type alias 사용가능

let 함수타입적용: 함수타입 = function (x) {
  return 10;
};

// * obj 안에 함수 넣기

let 오브젝안에함수 = {
  name: "kim",
  plusOne(x: number): number {
    return x + 1;
  },
  changeName: (x: string) => void {},
};

오브젝안에함수.plusOne(2);
오브젝안에함수.changeName("안녕");

type 오브젝타입숙제1 = {
  name: string;
  plusOne(x: number): number;
  changeName: (x: string) => void;
};

let 오브젝숙제1: 오브젝타입숙제1;
// = {name:"kim", plusOne(x):{return 2}, changeName():"string"}  //? 모르겠따..

// ? 함수표현식으로 해야한다

// * 숙제2
// * 문자를 하나 입력하면 맨 앞에 '0' 이 있으면 제거하고 string타입으로 리턴
type CutZero = (x: string) => string;
let cutZero: CutZero = function (x) {
  let result = x.replace(/^0+/, "");
  return result;
};

type RemoveDash = (x: string) => number;
// * 문자를 하나 입력하면 '-' 가 있다면 전부 제거하고 number타입으로 리턴
let removeDash: RemoveDash = function (x) {
  let result = x.replace(/-/g, "");
  return Number(result);
};

// * 숙제3 내가 끄적끄적..
function 숙제3함수파라미터넣기(
  x: string,
  cutZero: Function,
  removeDash: Function
) {
  let result = cutZero(x);
  let result2 = removeDash(result);
  return result2;
}

숙제3함수파라미터넣기("010-1234-5678", cutZero, removeDash);

// * 숙제3 답안
type 함수타입1 = (x: string) => string;
type 함수타입2 = (x: string) => number;

function 만들함수(x: string, func1: 함수타입1, func2: 함수타입2) {
  let result = func1(x);
  let result2 = func2(result);
  console.log(result2);
}

만들함수("123", cutZero, removeDash);

// * HTML

let 제목 = document.querySelector("#title");
// if (제목 != null) {
//   제목.innerHTML = "반갑다";
// }

if (제목 instanceof HTMLElement) {
  제목.innerHTML = "반갑다";
}
// console.log(제목);

// ! 100% 확신할때 . 왠만하면 쓰지말자
// let 부제목 = document.querySelector("#subtitle") as Element;
// 부제목.innerHTML = "하이루";

// * innerHTML이 있으면 출력하고 없으면 undefined 뱉어라.
// * 오브젝트에 ? 붙이기. (신문법)
let 부제목 = document.querySelector("#subtitle");
if (부제목?.innerHTML !== undefined) {
  부제목.innerHTML = "잘바뀌는군!";
}

// ? tsconfig.json 에서 "strictNullChecks": false  처리하면 된다.

let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "http://www.naver.com";
}

// HTMLHeadingElement //* <h1> 태그
// HTMLButtonElement //* <button> 태그

// * 숙제1 버튼을 누르면 이미지가 바뀌기
let 버튼 = document.querySelector("#button");
let 이미지 = document.querySelector("#image");

버튼?.addEventListener("click", function () {
  if (이미지 instanceof HTMLImageElement) {
    이미지.src = "new.jpg";
    이미지.alt = "new.jpg";
  }
});

let 네이버링크 = document.querySelectorAll(".naver");
// if (네이버링크 instanceof HTMLAnchorElement) {
//   네이버링크.href = "http://www.kakao.com";
// }
// * 숙제2 네이버링크 3개 전부 href 변경하기
네이버링크.forEach((a) => {
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
});

class Hero {
  name: string;
  constructor(a: string) {
    this.name = a;
  }
  함수(a: string) {
    console.log("안녕" + a);
  }
}

let 아이언맨 = new Hero("아이언맨");
console.log(아이언맨);
아이언맨.함수("!하세요 아이언맨");

let 베트맨 = new Hero("베트맨");
console.log(베트맨);

// * 숙제 1
class Car {
  name: string;
  price: number;
  constructor(a: string, p: number) {
    this.name = a;
    this.price = p;
  }
  Tax(p: number) {
    return this.price * 0.1;
  }
}

let car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.Tax(3000));

// * 숙제2 : 파라미터가 string, number가 되면서 타입에 따라 해당하는 배열에 넣어주는 클래스

class Word {
  num: any;
  str: any;
  // ? ...param 스프레드 문법으로 여러개 들어갈 수 있도록 파라미터 설정
  constructor(...param: any[]) {
    // ? 숫자만 담을 배열
    let 숫자들: number[] = [];
    // ? 문자만 담을 배열
    let 문자들: string[] = [];

    // ? 파람들을 확인했을 때 문자 혹은 숫자 타입일테고
    param.forEach((i: string | number) => {
      // ? 타입이 문자라면 문자들 배열에 넣어준다
      if (typeof i === "string") {
        문자들.push(i);
      }
      // ? 타입이 숫자라면 숫자들 배열에 넣어준다
      else {
        숫자들.push(i);
      }
    });
    // ? constructor 를 따로 정하지 않고 변수 설정하기?
    this.num = 숫자들;
    this.str = 문자들;
  }
}

let obj = new Word("kim", 3, 5, "park");

console.log(obj.num);
console.log(obj.str);

// * Object 타입변수 설정하는 두 가지 방법 (type, interface)

type Square = { color: string; width: number };

interface Square2 {
  color: string;
  width: number;
}

let 네모: Square2 = { color: "red", width: 100 };

interface 학생타입 {
  name: string;
}
let 학생: 학생타입 = { name: "code" };

console.log(학생);

interface 선생타입 {
  name: string;
  age: number;
}
let 선생: 선생타입 = { name: "티쳐", age: 30 };

console.log(선생);

// * interface를 쓰면 extends 로 복사 가능하다!!!

interface Student {
  name: string;
}

interface Teacher extends Student {
  age: number;
}

// * & 기호 : intersection type 교차기능 , 인터페이스도 쓸 수 있다
// ! 왼쪽타입도 만족하고 오른쪽 타입도 만족하는(전부 만족하는) 타입이라는 뜻
// ! type으로 & 쓸때 중복속성이 발생하면 미리 에러가 안나고, 쓸 때 에러난다
type Animal2 = { name: string };
type Cat = { age: number } & Animal2;

let 루루: Cat = { name: "LuLu", age: 4 };
console.log(루루);

// todo: interface 는 중복선언 가능 =>  자동으로 합쳐진다
// * 외부라이브러리 쓸 때 인터페이스로 추가할 수 있어서 매우 유용
let 선생인터페이스익스텐즈: Teacher = {
  name: "윤정쌤",
  age: 31,
  nickName: "별명 엘리나",
};
console.log(선생인터페이스익스텐즈);

interface Student {
  nickName: string;
}

// todo: type은 중복선언 불가능!!!!!
type Animal3 = { name: string };
type Dog = Animal3 & { legs: number };

let 뭉뭉이 = { name: "뭉뭉이", legs: 30 };
console.log(뭉뭉이);

// * type & 중복선언해서 에러만들기
// type A = {
//   name: string;
// };

// type A = {
//   legs: number;
// };

// * interface 속성 중복시켜서 에러만들기
// interface B {
//   name: string;
// }

// interface BB extends B {
//   name: number;
// }

// * 숙제1
interface Samsung {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: Samsung = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

console.log(상품);

// * 숙제2

interface 장바구니타입 {
  product: string;
  price: number;
}

let 장바구니: 장바구니타입[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

console.log(장바구니);

// * 숙제3
interface 카드 extends 장바구니타입 {
  card: boolean;
}

let 청소기: 카드 = {
  product: "청소기",
  price: 7000,
  card: true,
};

console.log(청소기);

// * 숙제4

interface 오브젝안에함수두개 {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let 계산: 오브젝안에함수두개 = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};

계산.plus(3, 5);
계산.minus(9, 4);
console.log(계산);
console.log(계산.plus(3, 5));
console.log(계산.minus(9, 4));

// * rest parameter

function 레스트파라미터(...x: any[]) {
  console.log(x);
}

레스트파라미터([2, "레스트파라미터"]);

// *destructuring

let [디스트럭쳐1, 디스트럭쳐2] = ["안녕", 100];

console.log(디스트럭쳐1);
console.log(디스트럭쳐2);

let { student, a } = { student: true, a: 25 };
console.log("a========", a);

let 오브젝트2 = { student: false, age: 30 };

function 함수디스(a: boolean, b: number) {
  console.log("a,b===========", a, b);
}

함수디스(true, 2);
console.log(
  "함수디스======",
  함수디스((오브젝트2.student = true), (오브젝트2.age = 55))
); //?  undefined 가 나온다

function 함수디스트럭쳐({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}

함수디스트럭쳐({ student: true, age: 33 });

console.log("오브젝트2=========", 함수디스트럭쳐(오브젝트2)); //? undefined 가 나온다

console.log(
  "함수디스트럭쳐안에오브젝트===",
  함수디스트럭쳐({ student: true, age: 40 })
); //?  undefined 가 나온다

let person = { student: true, age: 20 };
function 함수person({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}

함수person({ student: false, age: 11 });
함수person(person);

// * 숙제1 : 숫자 여러개를 입력하면 최대값을 리턴하는 함수를 만들자

function 숙제1숫자여러개(...num: number[]) {
  let result = 0;
  num.forEach((n) => {
    if (result < n) result = n;
  });
  return result;
}

console.log("최대값====", 숙제1숫자여러개(7, 6, 5, 8, 2, 1));

// * 숙제2 오브젝트 자료를 파라비터로 입력할 수 있는 함수를 만들자

let 유저정보 = { user: "kim", comment: [3, 5, 4], admin: false };

function 유저정보함수({
  user,
  comment,
  admin,
}: {
  user: string;
  comment: number[];
  admin: boolean;
}) {
  console.log(user, comment, admin);
}

유저정보함수(유저정보);

// *숙제2 답안 : return 타입을 void로 설정해줘야 에러가 안난다?
// ? void 없어도 에러가 안난다..
type UserType = {
  user: string;
  comment: number[];
  admin: boolean;
};

function 유저타입함수({ user, comment, admin }: UserType): void {
  console.log(user, comment, admin);
}

유저타입함수({ user: "kim", comment: [3, 5, 4], admin: false });

// * 숙제3 : 함수에 파라미터를 배열형식으로 입력할 수 있는 걸 만들자

// ? 배열안에 숫자나 문자나 불린타입이 들어올 수 있는 타입을 만든다
type 배열파라미터타입 = (number | string | boolean)[];

// ? 함수의 파라미터 타입을 지정해주고, 파라미터들을 콘솔로그로 찍는 함수를 만든다
function 배열을파라미터로받는함수([a, b, c, d]: 배열파라미터타입) {
  console.log(a, b, c, d);
}
// ? 함수를 실행해보자
배열을파라미터로받는함수([40, "wine", false, "되는군"]);

// * typeof 를 사용할 수 없는 네로잉 상황
// ! && 연산자로 undefined 랑 null 둘다 걸러낼 수 있다
function 네로잉함수(x: string | undefined) {
  if (x && typeof x === "string") {
    console.log(x);
  }
}

type Fish = { swim: string };
type Bird = { fly: string };

// * 속성명 in 오브젝트 자료
function 물고기와새(animal: Fish | Bird) {
  if ("swim" in animal) {
    return (animal.swim = "수영가능");
  }
}

물고기와새({ swim: "수영수영 가능가능" });

// * 오브젝트 instanceof 부모Class
let 날짜 = new Date();
if (날짜 instanceof Date) {
}

// * 오브젝트타입마다 literal type 만들어두면 네로잉이 편하다

type 차 = {
  model: 213;
  wheel: "4개";
  color: string;
};
type 자전거 = {
  wheel: "2개";
  color: string;
};

function 차와자전거(x: 차 | 자전거) {
  if (x.wheel === "4개") {
    console.log("x가 차 타입이다." + x.color);
  } else {
    console.log("이 바이크는 " + x.color);
  }
}

// * never 타입을 알아보자
// * return 값이 없어야 한다.
// * 끝나지 않아야 한다. (= endpoint가 없어야 한다)

function 네버함수(): never {
  throw new Error(); // 코드 실행이 중단된다
}

function 네버함수와일(): never {
  while (true) {}
}

// * never 어디다 쓰나?  => 자동으로 never타입이 되는경우를 살펴보자
// ? void 쓰면 된다. never 잘 안쓴다

function 함수네버발생하기(parameter: string) {
  if (typeof parameter == "string") {
    console.log(parameter);
  } else {
    console.log(parameter); // ? 발생할 수 없는 타입. never 타입이된다.
  }
}

// ? never가 발생하면 코드가 어딘가 이상한거다.

let 함수에러발생시키기 = function () {
  // * 함수타입이 never가 된다.
  throw new Error();
};

// ? void 쓰면 된다.

//  * public, private 키워드를 유용하게 사용해보자. class 만들때!

class 유저어 {
  public name: string;
  private age = 3;
  constructor(x: string) {
    this.name = x;
    this.age = 3;
  }
  public 함수() {}
}

// todo: public 키워드 써보자
// ? 있으나 없으나 똑같다.
// ? public 작성안해도 숨겨져 있는거다!

let 유저1 = new 유저어("파마리터");
유저1.name = "바꾸기가능";

// todo: private 키워드 써보자
// ? 값을 바꿀 수 없다.
// ? class 안에서만 수정,이용 가능하다!
let 유저2 = new 유저어("프라이베이트");
// 유저2.age = 3  // * 수정권한이 없따!

class 패밀리 {
  name: string;
  private familyName: string = "park";
  constructor(x: string) {
    this.name = x + this.familyName;
  }

  이름변경함수() {
    this.familyName = "James";
  }
}

let 유저3 = new 패밀리("이름아무개");
console.log("패밀리유저3이름===", 유저3.name);
// console.log(유저3.familyName); // * 수정못한다

// ! 긴급상황. private 바꿔야 할때
// ? 클래스 내에 함수를 만들어서 적용시키면 된다
유저3.이름변경함수();

console.log("패밀리유저3이름변경함수===", 유저3);

// * public 키워드로 축약가능
class 사람 {
  constructor(public name: string, public age: number) {}
}

let 자식 = new 사람("자식이름", 23);
console.log("자식을출력해라===", 자식);

// * class에서 사용가능한 protected, static 키워드

class 엑스 {
  protected x: number = 10;
}

class 뉴엑스 extends 엑스 {
  doThis() {
    this.x = 30;
  }
}

let 엑스사람 = new 뉴엑스();
console.log("엑스사람===", 엑스사람);

// * protected 키워드도 class 안에서만 사용 가능하다
엑스사람.doThis();
console.log("엑스사람프로텍티드", 엑스사람);

// * static 키워드를 쓰면 부모 class에 직접 부여되서 부모만 쓸 수 있다
class 엑스엑스 {
  static x: number = 10;
  y: number = 20;
}

let 엑스자식 = new 엑스엑스();
console.log("자식에게 안물려준다===", 엑스자식.y);
console.log("부모만 static 쓸수 있다===", 엑스엑스.x);
// console.log("부모는 y를 못쓴다. 자식만 y사용가능===", 엑스엑스.y); // * extends 하면 잘 물려준다

// * static은 private / protected / public 이랑 함께 사용 가능하다

// ? static 이런걸 언제 씁니까
// ? 주로 class 안에 간단한 메모를 하거나, 기본 설정값을 입력하거나
// ? class로 부터 생성되는 object가 사용할 필요가 없는 변수들을 만들어놓고 싶을 때

class 와이 {
  public static y: number = 123;
}

let 와이자식 = new 와이();
console.log(와이.y);
console.log(와이자식);

class 인트로 {
  static skill: string = "js";
  // ? static은 부모만 쓸수 있으므로 {부모.속성} 으로 불러와야 한다
  intro = 인트로.skill + "전문가입니다.";
}

let 영수 = new 인트로();
console.log("js 전문가===", 영수);

인트로.skill = "ts"; // ! 여기 이후로 뽑는 자식들은 static 속성이 변경됨

let 영수2 = new 인트로();
console.log("ts 전문가===", 영수2);

// ? 숨기고 싶은 속성은 protected, private 쓰는게 낫다

// todo: 숙제1

class 숙제1속성 {
  // ? private static은 부모 클래스에서만 사용가능하면서 변경하지 않을 값에
  // ! static이 붙었으니 숙제1속성.x 로 접근할 수 있다. 자식클래스는 접근불가
  // ! private static x는 숙제1속성 클래스 내부에서만 수정가능하다
  private static x: number = 10;
  // ? public static은 부모 클래스에서만 사용할 때
  // ! public static y는 클래스 내부 외부 상관없이 수정가능하다. public 없어도 가능
  public static y: number = 20;
  // ? protected는 부모클래스와 상속받은 자식 클래스에서만 접근 가능
  // ! extends로 복사한 클래스 내부에서도 사용할 수 있다
  protected z: number = 30;
}

// todo: 숙제2

export class 숙제2속성 {
  private static x: number = 10;
  public static y: number = 20;

  static addOne(n: number) {
    숙제2속성.x += n;
  }
  static printX() {
    console.log("x값은 10인데===", 숙제2속성.x);
  }
}

숙제2속성.printX();
숙제2속성.addOne(3);
숙제2속성.printX();
숙제2속성.addOne(4);
숙제2속성.printX();

// todo: 숙제3

class 숙제3Square {
  // public width: number;
  // public height: number;
  // public color: string;
  constructor(
    public width: number,
    public height: number,
    public color: string
  ) {
    // width: 30
    // height: 30,
    // color: "red"
  }
  draw() {
    let position = Math.random();
    let square = `<div style="position:relative;
    top:${position * 400}px;
    left:${position * 400}px;
    width:${this.width}px;
    height:${this.height}px;
    background:${this.color};"
    ></div>`;
    document.body.insertAdjacentHTML("beforeend", square);
  }
}

let 숙제3네모 = new 숙제3Square(30, 30, "orange");
숙제3네모.draw();
숙제3네모.draw();
숙제3네모.draw();

// * Generic 함수 : 파라미터로 타입을 입력하는 함수
// ? 타입을 파라미터로 함수에 미리 입력하는 방법

function 제네릭<Type>(x: Type[]): Type {
  return x[0];
}

let 제네릭a = 제네릭(["unknown타입이다", 2]);

// todo: <number> 라는 타입을 <Type>에 집어넣어주세요
let 제네릭b = 제네릭<number>([55, 1, 2, 3, 4]);
console.log("제네릭a===", 제네릭a);
console.log("제네릭b===100이 잘 나온다", 제네릭b + 45);

let 제네릭c = 제네릭<string>(["앞", "뒤"]);
console.log("제네릭c===문자더하기", 제네릭c);
// ? 가끔 타입파라미터를 자동으로 유추하기도 한다...

// * 타입파라미터 제한두기
// ? extends 복사가 아닌 체크/검사 미리하기 (네로잉 인정)

function 타입제한함수<Type extends number>(x: Type) {
  return x - 1;
}

let 타입제한함수적용 = 타입제한함수<number>(100);

console.log("타입제한함수적용===", 타입제한함수적용);

// todo: 인터페이스를 타입제한에 적용하기

interface LengthCheck {
  length: number;
}

function 길이는문자나배열<Type extends LengthCheck>(x: Type) {
  return x.length;
}

let 길이체크 = 길이는문자나배열<string | string[]>("asdvfw");
console.log("길이체크===", 길이체크);

//  * (숙제1) 입력값이 문자 or 배열일 때, 자료 갯수를 콘솔창에 출력해주는 함수

function 숙제1함수익스텐션<Type extends string | string[]>(x: Type) {
  console.log(x.length);
}

숙제1함수익스텐션<string>("문자");
숙제1함수익스텐션<string[]>(["z", "x"]);

// * (숙제2) SON 자료를 object { } 자료로 변환을 해서 return 해주는 함수

interface 숙제2Animal {
  name: string;
  age: number;
}

let data = '{"name" : "dog", "age" : 1 }';

function 숙제2함수애니멀제이슨<Type>(x: string): Type {
  return JSON.parse(x);
}

let 숙제2함수애니멀파스 = 숙제2함수애니멀제이슨<숙제2Animal>(data);
console.log(숙제2함수애니멀파스);

// * (숙제3)

class 숙제3파라미터자율<T> {
  name: T;
  constructor(a: T) {
    this.name = a;
  }
}
let 숙제3파라미터자율결과 = new 숙제3파라미터자율<string>("어쩌구");

console.log("string이어야해===", typeof 숙제3파라미터자율결과.name);

// * =======================
// * =======================
// * =======================
// * =======================
// * =======================

let 디브: JSX.IntrinsicElements["div"] = <div>디브디브디브</div>;

let 박스1: JSX.Element = <div>dd</div>;
let 버튼1: JSX.Element = <button>dd</button>;

let 박스2: JSX.IntrinsicElements["div"] = React.createElement("div");
let 버튼2: JSX.IntrinsicElements["button"] = <button></button>;

// ? 컴포넌트 타입지정

function Profile(props: { name: string; age: string }): JSX.Element {
  return <div>{props.name}프로필</div>;
}

// ? useState
// let [user1, setUser1] = useState<string | number>("kim");

function App() {
  return (
    <div>
      {디브}
      <Profile name="철수" age="20" />
    </div>
  );
}

export default App;
