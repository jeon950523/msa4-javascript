import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log('등수를 입력해 주세요.');

// 아래 콜백 함수에 입력값으로 실행할 처리 작성
rl.on('line', (line) => {
  line.trim();
  let rank = parseInt(line);

  if(rank === 1) {
    // 조건식이 true일때, 실행하고 싶은 코드를 작성
    console.log('우승');
  } else if(rank === 2) {
    console.log('준우승');
  } else if(rank === 3) {
    console.log('3등');
  } else {
    // 위에서 체크한 조건에 모두 false일 경우, 나머지 모든 조건은 else가 실행
    if(rank !== 5 && rank !== 7) {
      console.log('순위 외');
    } else {
      console.log('특별상');
    }
  }

  rl.close(); // 입력 종료
});

// 종료 시 실행
rl.on('close', () => {
  process.exit();
});