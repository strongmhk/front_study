const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = []; // const toDos = []; 와 같이 애플리케이션이 시작될 때 toDos array는 비어있기 때문에, 새로고침할때마다 버튼들이 사라짐

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}



function deleteToDo(event){
  const li = event.target.parentElement; // target은 클릭된 html element임, 여기서 event.target은 button element를 의미
  li.remove(); 
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); // li.id는 string이므로 number로 형변환 해줘야함
  saveToDos();
}


function displayToDo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value; 
  toDoInput.value = "";
  const newTodoObj = {
    text:newTodo,
    id: Date.now(),
  } // todo를 그냥 텍스트로 저장하면 배열에서 indexing 해올때 중복되는 값이 있으므로 접근이 힘듦
  // 그래서 object로 저장
  toDos.push(newTodoObj); // object로 넘겨주기
  displayToDo(newTodoObj);
  saveToDos();
}



toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null){
  const parsedToDos =  JSON.parse(savedToDos);  // JSON.parse하면 배열로 반환 
  toDos = parsedToDos; // 이전에 갖고있던 localStorage 값들을 저장해주기
  parsedToDos.forEach(displayToDo);   // 각 배열의 element에 대해 displayToDo 함수 실행
}



