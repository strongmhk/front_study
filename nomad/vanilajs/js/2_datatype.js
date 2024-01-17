// 변수에는 const
const a = 5; // num
const b = "2"; // text
const c = 2; // const는 재선언 금지, 재할당 금지
// const c = 2;를 선언하면 c라는 변수가 2가 담겨있는 상자의 주소를 가리킴
//따라서 c = 5; 라고 해버리면 c가 가리키는 주소값을 5가 담긴 상자의 주소로 바꾸려하는 것이기 때문에 불가능함.
let myname = "minhyung"; // let은 재선언 금지, 재할당가능

var d = 5; 
var d = 3; // var는 재선언 가능, 재할당 가능

const istall = true; // boolean 
const als = null; // null은 값이 없다는 것, false는 false라는 값이 있는 것임 따라서 null과는 다름 

let something; //undefined값 반환, 메모리만 생성해놓고 그안에 값은 넣어놓지 않음



console.log(a / c);
console.log(a + c);
console.log(a * c);
console.log("hello " + myname);
myname = "minhyung" 

console.log("hello " + myname);
