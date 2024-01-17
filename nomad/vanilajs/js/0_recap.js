
// 계산기 객체
const calculator = {
  add : function(a, b){
    return a + b;  // return 실행하면 함수는 종료됨
    console.log(a + b);
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



const player = {
  name : "minhyung",
  age : 24,
};



function minus5(number){
  return number - 5;
}

calculator.add(2,5);
calculator.minus(2,5);
calculator.mul(2,5);
calculator.divide(2,5);
calculator.powerof(2,5);


// minus5(10,20,30); 인자 여러개 넘겨줘도 오류나지 않음 

// return playe);

// player.name = "Kim"; -> 프로퍼티 값 업데이트 가능
// return playe);

// player.sexy = true; 
// return playe, console);

// alert("Hello!");