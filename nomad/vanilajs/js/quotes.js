const queotes = [
  {
    quote: "독서는 머리로 떠나는 여행이고, 여행은 몸으로 하는 독서다.",
    author: "Minhyung Kim",
  },
  {
    quote: "인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라.",
    author: "Nadine Stair",
  },
  {
    quote: "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
    author: "L. Ron Hubbard",
  },
  {
    quote: "이미 끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라.",
    author: "Talmud",
  },
  {
    quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
    author: "Goethe",
  },
  {
    quote: "사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다.",
    author: "Goethe",
  },
  {
    quote: "문제는 목적지에 얼마나 빨리 가느냐가 아니라 그 목적지가 어디냐는 것이다.",
    author: "Mabel Newcomber",
  },
  {
    quote: "진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다.",
    author: "Albert Einstein",
  },
  {
    quote: "해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다.",
    author: "Leo Tolstoy",
  },
  {
    quote: "그대의 하루 하루를 그대의 마지막 날이라고 생각하라",
    author: "Quintus Horatius Flaccus",
  },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = queotes[Math.floor(Math.random() * queotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;