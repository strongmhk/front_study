
function handleTitleClick(){
  h1.classList.toggle("clicked");
  
  // toggle : 인자로 받아온 string이 classList에 존재하면 
  // classList에서 제거해주고 존재하지 않으면 다시 추가해줌.
  // toggle 사용시 이 아래 5줄의 if else문을 1줄로 요약가능

  // raw value를 변수에 저장해 활용해주기~
  // const clickedClass = "clicked";
  // classList로 클래스 이름 리스트로 관리
  
  // if(h1.classList.contains(clickedClass)){
  //   h1.classList.remove(clickedClass);
  // } else {
  //   h1.classList.add(clickedClass);
  // }
  
  // h1.className = clickedClass;
  // css 파일에 .active 선택자가 추가돼야함
  // js가 html element의 classname을 바꿔줌.
  // h1.style.color 과 같이 css에 직접 관여 x 
}

const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);
h1.addEventListener("click", handleTitleClick);