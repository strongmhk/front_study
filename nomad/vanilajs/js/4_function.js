// function sayHello(name, age){
//   return("Hello my name is " + name + " and I'm  " + age);
// }

// function plus(a, b){
//   return a + b; // return값 주기
// }

// const name1 = "minhyung";
// const age1 = 24;

// const player = {
//   name : name1,
//   sayHello : function(otherName){
//     return("Hello! " + otherName); 
//   }
// }; //  객체 안에 메소드 정의

// const f = plus(10, 5);
// return(f);
// return(player.name);
// player.sayHello("lynn");

// sayHello(name1, age1); 



// 계산기 객체
const calculator = {
  add : function(a, b){
    return a + b;
  },
  minus : function(a, b){
    return a - b;
  },
  divide : function(a, b){
    return a / b;
  },
  mul : function(a, b){
    return a * b;
  },
  powerof : function(a, b){
    return a ** b;
  }
};




const age = 96;
function CalcKrAge(fage){
  return fage + 2;
}

krAge = CalcKrAge(age); // return 값 이용
console.log(krAge);

const plusResult = calculator.plus(2, 4);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.mul(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);

console.log(result);



