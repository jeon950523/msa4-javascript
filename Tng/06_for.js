x = "*****"
for(let i = 0; i < 6; i++){
    
  console.log(`${x}`)
}
z=''
for(let i = 0; i < 6; i++){
  z +='*'
  console.log(`${z}`);
}



for(let i = 0; i < 6; i++){
 let z = '';
 for(let j = 0; j <= i; j++){
  z += '*'
  console.log(`${z}`);
}
}

for(let i = 0; i < 5; i++)
  { let space ="";
    let star = "";
    for(let j = 4; j > i; j--)
      {
        space +=" ";
    }
    for( k = 0; k <= i; k++){
      star +='*';
    }
    console.log(`${space}${star}`);
}






// let a = 5;
// for(let i = 1; i <= a; i++){
//   let z = "";
//   for(let j = 1; j <= a - i; j++){
//     z += " ";
//   } 
//   for(let k = 1; k <= i; k++){
//     z += '*';
//     console.log(z)
//   }
// }



for(let i = 6; i >= 1; i--)
  {
  let z = "";
  for(let j = 1; j < i; j++)
  {
    z += '*';
  }
    console.log(`${z}`)
}


// for(let i = 0; i < 6; i++)
// {
//  console.log(`*`.repeat(i).padStart(9),`*`.repeat(i));
// }

// for(let i = 6; i >= 1; i--){
//  console.log(`*`.repeat(i).padStart(9),'*'.repeat(i));
// }
