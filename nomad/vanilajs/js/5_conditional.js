const age = parseInt(prompt("How old are you ? : ")); // c의 scanf랑 비슷한 역할을 하는 함수, string값을 받아옴, 요즘은 사용 잘 안함. 
// 문자 넣으면 NaN 반환 

// parseInt : data type을 string -> num으로변환

console.log(isNaN(age)); // 
console.log(age);

// console.log(typeof parseInt("15"));
// console.log(typeof age, typeof parseInt(age));

if(isNaN(age) || age < 0){
  console.log("Please write a real positive number!");
} else if(age > 0 && age < 18) {
  console.log("You are too young... can't drink");
} else if(age >= 18 && age <= 50){
  console.log("You can drink!!");
} else if(age > 50 && age <= 80){
  console.log("You should less drink..");
} else if(age === 100){
  console.log("Wow you are wise!");
} else if(age > 80) {
  console.log("You can do whatever you want.");
} 

// == 은 값만 비교, ===은 값과 데이터 타입 동시에 비교!



