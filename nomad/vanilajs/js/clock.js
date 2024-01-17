const clock = document.querySelector("#clock");

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); // argument : function, milliseconds, 1000ms(1초) 간격으로 반복 실행
// setTimeout(getClock, 5000); // 몇 초 뒤에 실행, 반복실행 x  