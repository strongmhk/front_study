// 이벤트 리스너 만들기!

function handleh1Click(){
  const currentColor = h1.style.color;
  h1.style.backgroundColor = "green";
  let newColor;
  
  if(currentColor === "blue"){
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
  
  // console.log("h1 was clicked!");
}

function handleMouseEnter(){
  h1.style.backgroundColor = "orange";
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
  h1.innerText = "Mouse is gone!";
}
function handleWindowResize(){
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
  alert("copier!");
}

function handleWindwoOffline(){
  alert("SOS no WIFI!");
}

function handleWindwoOnline(){
  alert("Wow GOOOOD!")
}

const h1 = document.querySelector("div.hello:first-child h1");
console.dir(h1);


h1.addEventListener("click", handleh1Click);
// h1.onclick = handleh1Click; 
// 이것도 가능
// h1.removeEventListener <-  이벤트 리스너 삭제가능 
h1.addEventListener("mouseenter", handleMouseEnter); 
// mouseenter : 마우스 커서가 h1 위로 올라가면 작동
h1.addEventListener("mouseleave", handleMouseLeave);
// mouseleave : 마우스 커서가 h1에서 떠나면 작동

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindwoOffline);
window.addEventListener("online", handleWindwoOnline);
// document.body , head, title 이런 element들은 특별해서 document 뒤에 붙을 수 있음
// document.div 는 존재하지않음



// function clickbox(){
//   box.style.backgroundColor = "yellow";
// }

// const box = document.querySelector("input.box");
// console.dir(box);

// box.addEventListener("click", clickbox);

