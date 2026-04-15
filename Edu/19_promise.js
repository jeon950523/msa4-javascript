// promise 객체
// setTimeout(() => {
//   console.log(`a`);
//   setTimeout(() => {
//     console.log(`b`);
//     setTimeout(() => {
//       console.log(`c`);
//     }, 1000);
//   }, 1000);
// }, 1000);
// 콜백지옥 = 계속 인덴트가 늘어나서 보기 힘듦
// 콜백지옥을 회피하기위해 프로미스 기반으로 변경, 가독성향상.재사용성
const timePromise = (str, ms)=>{
  //resolve:작업이 성공했을때를 알려주는 객체
  //reject:작업이 실패했을때를 알려주는 객체
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{if(typeof str ===`string` ){
      console.log(str);
      resolve();
      } else{
        reject(`실패`);
      }
    }, ms);
  })
}

// timePromise(`AA`,1000)
// .then(()=>timePromise(`BB`,1000))
// .then(()=>timePromise(`CC`,1000))
// .then(()=>{timePromise(`DD`,1000)
//            .then(()=>timePromise(`EE`,1000));})
// .catch(error=>{
//   console.log(error);
// })
// .finally(()=>console.log(`finally`));

// console.log(`agag`);

// 병렬처리 하는 방법
Promise.all([
  timePromise(`AAA`,1000),
  timePromise(`BBB`,3000),
  timePromise(`CCC`,5000)
])
.then(()=>console.log(`모든 작업 완료`));