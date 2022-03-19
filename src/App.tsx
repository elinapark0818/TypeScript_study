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

function App() {
  return;
}

export default App;
