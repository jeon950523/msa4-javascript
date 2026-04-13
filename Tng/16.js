let re = false;
let timer = 0;
let currentOpactiy = 0;
let amount = 0.01;
const timeDisplay = document.querySelector(`#time`);
const bgimg = document.querySelector(`.bg`)
const windowy = window.innerHeight;
const windowx = window.innerWidth;

const btninfo = document.querySelector(`#btninfo`);
btninfo.addEventListener(`click`,()=>{alert(`안녕하세요.\n 숨어있는 div를 찾아주세요.`)});

const btnevent = document.querySelector(`.event1`);

btnevent.addEventListener(`mouseenter`, eventstart);
btnevent.addEventListener(`click`, eventend);



let gametimer = setInterval(tick, 1000);
  


function eventstart(){ 
  alert(`두근두근`)
  };
 
const action = {
  false:()=>{
    alert(`들켰다.`);
    clearInterval(gametimer);
  btnevent.removeEventListener(`mouseenter`, eventstart);
  btnevent.style.backgroundColor = `beige`;
  },
true: ()=>{
  alert(`숨는다`);
  btnevent.style.backgroundColor = `transparent`;
  btnevent.addEventListener(`mouseenter`, eventstart)
  clearInterval(gametimer);
  timer = 0; 
  gametimer = setInterval(tick, 1000);
  currentOpactiy = 0; 
  amount = 0.01;
  bgimg.style.opacity = 0;

  const randomy = Math.random()*(windowy - 100);
  const randomx = Math.random()*(windowx - 100);

  btnevent.style.top = randomy + `px`;
  btnevent.style.left= randomx + `px`;
}};
  

function eventend(){
  action[re]();
  re = !re;
}




// function eventend(){
//   if(re===false){alert(`들켰다.`);
//     clearInterval(gametimer);
//   btnevent.removeEventListener(`mouseenter`, eventstart);
//   btnevent.style.backgroundColor = `beige`;
//   re=true;
// } 
// else{
//   alert(`숨는다`);
//   btnevent.style.backgroundColor = `#ffffff00`;
//   btnevent.addEventListener(`mouseenter`, eventstart)
//   re=false;
//   clearInterval(gametimer);
//   timer = 0; 
//   gametimer = setInterval(tick, 1000);
//   currentOpactiy = 0; 
//   amount = 0.01;
//   bgimg.style.opacity = 0;




//   const randomy = Math.random()*(windowy - 100);
//   const randomx = Math.random()*(windowx - 100);

//   btnevent.style.top = randomy + `px`;
//   btnevent.style.left= randomx + `px`;
// }
// }

function tick(){
  timer++;
    timeDisplay.textContent = timer;
    if(timer > 0 && timer % 3 === 0){
        currentOpactiy += amount;
        amount += 0.01;
        bgimg.style.opacity = currentOpactiy;
    }
  }