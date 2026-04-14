// axios.get(url)
// .then(response=>{})
// 요청이 성공했을때 처리 작성 부분
// .catch(error=>{})
// 처리중 예외가 발생 했을때, 처리 작성 부분
// .finally(()=>{});
// 성공여부와 관계없이 필요한 처리 작성 부분(finally)생략가능

const url = `https://picsum.photos/v2/list?page=15&limit=10`;
const form = document.querySelector(`.search-box`);
form.addEventListener(`submit`, (e)=>{e.preventDefault(); //기존 이벤트 취소 form의 submit
  const baseUrl = `https://picsum.photos/v2/list`;
  const page = form.page.value; //page=document.queryselector(`#page`);
  const limit = form.limit.value; //limit=document.queryselector(`#limit`);
  const url = `${baseUrl}?page=${page}&limit=${limit}`;

  axios.get(url)
  .then(response=>{
    console.log(response);
    //카드 넣을 컨테이너
    const container = document.querySelector(`.container`);
    container.textContent =``;
    //response.data 서버가 보내온 데이터가 저장된 프로퍼티
    response.data.forEach(item =>{
      //카드 이미지 요소 생성
      const newCardImg = document.createElement(`div`);
      newCardImg.style.backgroundImage = `url('${item.download_url}')`;
      newCardImg.classList.add(`card-img`);
      //카드 저작권자 요소 생성
      const newAuthor = document.createElement(`span`);
      newAuthor.textContent = `${item.id}:${item.author}`;
      
      //카드 요소 생성
      const newCard = document.createElement(`div`);
      newCard.appendChild(newCardImg);
      newCard.appendChild(newAuthor);
      newCard.classList.add(`card`);
  
      //컨테이너에 카드 삽입
      container.appendChild(newCard);
    });
  })
  .catch(error=>{
   console.error(error);
  });
});






