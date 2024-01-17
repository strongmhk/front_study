// basic data structure(array)
const week = ["mon", "tues", "wed", "thu", "fri", "sat"];

console.log(week);
console.log(week[0]);

// push
week.push("sun"); // const array의 element를 추가, 삭제하는 것은 해당 array변수가 가리키는 상자의 주소값을 바꾸는게 아니고 그 상자안의 element값을 바꾸는 것이기 때문에 const로 선언해도 element 삭제, 추가는 가능 

//object

const student = {
  num : 201932102,
  name : "minhyung",
  fat : false
}

console.log(student);
console.log(student.name); // 프로퍼티 접근자
student.fat = true; // 프로퍼티 값 재할당
console.log(student["name"]); // 

student.firstname = "Kim"; // 새로운 property 생성가능







