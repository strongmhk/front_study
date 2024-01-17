// document 객체를 통해 html에 접근 가능, document는 자바스크립트의 관점에서의 html을 뜻함
// document.title = "Hello from JS!";

// const title = document.getElementById("title");
// console.dir(title);
// console.log(title.id);
// console.log(title.className);
// title.innerText = "Got you!";


// const hellos = document.getElementsByClassName("hello");  -> hello class를 가진 element들을 배열로 반환 
// console.log(hellos);

// const title = document.getElementsByTagName("h1");
// console.log(title);


// const title = document.querySelector("div.hello:first-child h1"); 
// console.log(title);

// title.style.color = "blue";

// console.dir(title); 가져온 h1 element를 객체로 출력

// css 문법 사용(쿼리셀렉터 제일 많이 사용)  
// .hello(클래스 이름) h1(태그 이름) querySelector("div h1")도 가능
// 단 하나의 element를 반환
// hello class안에 h1이 여러개일 경우 첫번째 h1을 가져옴
// document.querySelectorAll(".hello h1")을 쓰면 모든 h1을 배열로 가져옴



// const hello = document.querySelector(".hello h1");
// hello.innerText = "Hello";

const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
  title.style.color = "blue";
  // console.log("title was clicked!");
}

title.addEventListenerr("click", handleTitleClick);
// 함수를 인자로 넘겨줄때 함수이름() 이런방식이 아니고 함수이름만 넘겨줌, 괄호를 넣으면 바로 실행되기 때문, click이라는 이벤트가 일어났을때만 실행해줄수있도록!  
