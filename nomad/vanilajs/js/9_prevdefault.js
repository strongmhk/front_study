const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// 이렇게 중요한 변수들은 대문자로 표현해서 강조함


function LoginSubmit(event){ // 실행 함수에 인자를 넣으면 인자로 방금 일어난 event에 대한 정보를 지닌 argument 반환
  // 보통 인자이름을 event라고 함 -> 관례
  event.preventDefault(); // event의 기본행동이 일어나지 않도록 막는 것
  // submit 이벤트 기본행동 : 브라우저를 새로고침
  
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  
  localStorage.setItem(USERNAME_KEY, username); // 웹에서 제공하는 local storage에 key : value 형식으로 username값 저장
  // 웹 새로고침해도 localstorage에 저장돼있음
  
  displayGreetings(username);
}

function displayGreetings(Username){
  greeting.innerText = `Hello ${Username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event){
  event.preventDefault();
  console.dir(event);  
}

link.addEventListener("click", handleLinkClick);
// 이벤트 리스너에서 실행시키는 함수는 실행될 때 특정 인자를 받아옴.


// loginButton.addEventListener("click", LoginbtnClick);


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", LoginSubmit);
} else {
  // show the greetings
  displayGreetings(savedUsername);
}
