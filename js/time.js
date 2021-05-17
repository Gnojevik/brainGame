
// setInterval(time, 1000);

let count = 0;
let lvl = 11;
let total = 0;
let start = document.getElementById('start');
start.addEventListener('click', goGame);


// function time() {
//    let t = new Date();
//    let hours = document.getElementById('hh');
//    hours.innerText = 60 - t.getSeconds();
// }

function timer() {
   let seconds = 60;
   setTimeout(function () {
      let str = "";
      let timerHtml = document.getElementsByClassName('timer');
      if (seconds - count < 10) {
         str = `<p style="color: rgb(233, 7, 25);
         background-color: rgb(83, 165, 42);
         border-radius: 5px;
      "> 0${seconds - count} </p>`;

      } else {
         str = `<p> ${seconds - count} </p>`;
      }

      timerHtml[0].innerHTML = str;
      if (count !== seconds) {
         timer();
      } else {
         let answer = document.getElementById('answer');
         let que = document.getElementById('question');
         str = `<button id="start" class="button">START</button>`;
         timerHtml[0].innerHTML = str;
         que.innerText = `DONE`;
         answer.innerHTML = '';
         start = document.getElementById('start');
         start.addEventListener('click', goGame);
         count = 0;
      }
      count++;

   }, 1000);


}


function quest(lvl) {
   let totalCount = document.getElementById('total');
   let que = document.getElementById('question');
   let answer = document.getElementById('answer');
   let a = Math.floor(Math.random() * lvl) + 1;
   let b = Math.floor(Math.random() * lvl) + 1;
   let min = (a >= b) ? b : a;
   let order1 = Math.floor(Math.random() * 2) + 1;
   let order2 = (order1 > 1) ? 1 : 2;
   que.innerText = `${a}+${b}=?`;
   answer.innerHTML = `<li id="buttonTrue" class="button" style="order:${order1};">${a + b}</li>
   <li id="buttonFalse" class="button" style="order:${order2} ">${randomArr()}</li>`;
   totalCount.innerText = `score: ${total}`;
   trueOrFalse();
   function randomArr() {
      let random = Math.floor(Math.random() * (a + b)) + min;
      while (random === a + b) {
         random = Math.floor(Math.random() * (a + b)) + min;
      }
      return random;
   }


}

function trueOrFalse() {
   let totalCount = document.getElementById('total');
   let buttonTrue = document.getElementById('buttonTrue');
   let buttonFalse = document.getElementById('buttonFalse');
   buttonTrue.addEventListener('click', () => { total += 3; totalCount.style.color = "rgb(83, 165, 42)"; quest(lvl); });
   buttonFalse.addEventListener('click', () => { total -= 5; totalCount.style.color = "red"; quest(lvl); });
}

function goGame() {
   total = 0;
   timer();
   quest(lvl);

}