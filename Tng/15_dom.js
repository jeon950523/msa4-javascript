const parent = document.querySelector(`#ul`);

const newadd = document.createElement(`li`)
const newapple= document.querySelector(`#apple`)
newadd.textContent = `장기`;

parent.insertBefore(newadd, newapple);


//-----------------
// const color = document.querySelector(`#ul li:last-child`);
// color.style.backgroundColor = `#db8080`;

const ulChildList = document.querySelectorAll(`#ul > li`);
ulChildList.forEach((item)=>{if(item.textContent === `어메이징브릭`){item.style.backgroundColor = `beige`}});


// const oddcolor = document.querySelectorAll(`#ul li:nth-child(odd)`)
// oddcolor.forEach((item) => {
//  item.style.color = `blue`;
// });


// const evencolor = document.querySelectorAll(`#ul li:nth-child(even)`)
// evencolor.forEach((item) => {
//  item.style.color = `red`;
// });


// const allLis = document.querySelectorAll('#ul li');
// allLis.forEach((item, index) => {
//     if ((index + 1) % 2 !== 0) {
//         item.style.color = 'blue';  // 홀수
//     } else {
//         item.style.color = 'red';   // 짝수
//     }
// });

// ulChildList.forEach((item, index)=> //인덱스가 0부터 시작하니 +1로 홀수로 만들어줌
// {if((index + 1) % 2 !==0)
//   {item.style.color = `orange`;}
//   else{item.style.color=`pink`;}});
  
function setLineColor(){
  try{
  const ulChildList = document.querySelectorAll(`#ul > li`);
  if(ulChildList && ulChildList.length === 0){
    throw new Error(`노드없음`);
  }
  ulChildList.forEach((item, index)=> //인덱스가 0부터 시작하니 +1로 홀수로 만들어줌
{if((index + 1) % 2 !==0)
  {item.style.color = `orange`;}
  else{item.style.color=`pink`;}});
}
  catch(err){
    console.log(err);
  }}
setLineColor();

  // 요소 추가시 주의 사항
  const starcraft=document.createElement(`li`);
  starcraft.textContent = `스타`
  parent.appendChild(starcraft);

  setLineColor();