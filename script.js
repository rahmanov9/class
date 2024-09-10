

const wrapper = document.querySelector('.wrapper');

const cards = ProductsData
  .map((card) => {
    return `
          <div class="card">
         <img src=${card.imageUrl} alt="">
         <h2>${card.name}</h2>
         <p>${card.reviews}</p>
        <s>${card.oldPrise}</s>
         <h3>${card.newPrise}</h3>
      </div>
            
   `;
  })
  .join('');

wrapper.innerHTML = cards;
