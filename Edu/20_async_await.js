// async/await
const timePromise = (str, ms)=>{
  //resolve:작업이 성공했을때를 알려주는 객체
  //reject:작업이 실패했을때를 알려주는 객체
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{if(typeof str ===`string` ){
      console.log(str);
      resolve();
      } else{
        reject(new Error(`실패`));
      }
    }, ms);
  })
}

// timePromise(`AA`,1000)
// .then(()=>timePromise(`BB`,1000))
// .then(()=>timePromise(`CC`,1000))
// .then(()=>console.log("완료"));

async function test(){
 try{
   await timePromise('A',1000);
   await timePromise('B',1000);
   await timePromise('C',1000);
   await timePromise(1,1000);

 }
 catch(error){
  console.log(error);
 }
  
}

test();