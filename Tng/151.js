  console.log(`시작`);
const plate = new Uint32Array(10);
  globalThis.crypto.getRandomValues(plate);
  const value = (plate[0] / 0xffffffff)*100;

  console.log(value);


  const result = Array.from(plate).map(num=>{return(num/0xffffffff)*100});
  console.log(`결과`);
  result.forEach((value,index)=>{console.log(`${index + 1}번째 뽑기 : ${value.toFixed(0)}%`);});

  const final = Array.from(plate).map((num=>{
    const percent = (num/0xffffffff)*100;
    return ( percent < 1)?`전설`
    : (percent < 10)? `희귀`
    : (percent< 30)? `고급`
    : `그냥`;
  }));
  const guarentee = final.some(item => item ===`전설`|| item === `희귀`);
  if(!guarentee){
    final[9] = `희귀`;
  }
  console.log(`결과:${final}`);