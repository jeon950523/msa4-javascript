
(()=>{  
  let page = 0;
  const baseUrl=`https://picsum.photos/v2/list`
  const nextBtn = document.querySelector(`.next`);
  let allowFlg = true; // 디바운싱 제어용 플래그
  nextBtn.addEventListener(`click`, async ()=> {
    if(allowFlg){
      allowFlg = false;
      //allowFlg가 true일 경우 해당 처리시작
      const limit = 3;
      const url = `${baseUrl}?page=${page}&limit=${limit}`;
      try{
        const response = await axios.get(url);
        const container = document.querySelector(`.container`);
        response.data.forEach(item=>{
          const newCard = document.createElement(`div`);
          newCard.classList.add(`card`)
          const newCardImg = document.createElement(`div`);
          newCardImg.style.backgroundImage=`url("${item.download_url}")`;
          newCardImg.classList.add(`cardimage`);
          const newAuthor = document.createElement(`span`);
          newAuthor.textContent=`${item.id}:${item.author}`;
          newCard.appendChild(newCardImg);
          newCard.appendChild(newAuthor);
          container.appendChild(newCard);
        })
        const resetBtn = document.querySelector(`.reset`);
        resetBtn.addEventListener(`click`, ()=>container.textContent=``);
        resetBtn.addEventListener(`click`, ()=>page=0);
        page+=1;
      }
      catch(error){
        console.log(error);
      }
      finally{
        allowFlg=true;
      }
    };
    
  })
})();