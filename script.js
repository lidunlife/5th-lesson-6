let cards = document.getElementById('cards') 
let url = 'https://fakestoreapi.com/products?limit=10' 
 
fetch(url) 
    .then((response) => response.json()) 
    .then((res) => getData(res)) 
    .catch(err => console.log(err)) 
 
 
 
function getData(param) { 
 
 
 
    console.log(param); 
 
    for (const data of param) { 
        let card = document.createElement('div') 
        let imgDiv = document.createElement('div') 
 
        let img = document.createElement('img') 
        let h3 = document.createElement('h3') 
        let category = document.createElement('p') 
        let des = document.createElement('p') 
        let price = document.createElement('p') 
 
 
        card.classList.add('product') 
        imgDiv.classList.add('imgDiv') 
        img.src = data?.image; 
        h3.innerHTML = data?.title 
        category.innerHTML = "<b>Category: </b>" + data?.category 
        des.innerHTML = "<b> Description: </b>" + data?.description 
        price.innerHTML = "<b> Price: </b>" + data?.price 
 
 
        imgDiv.appendChild(img) 
        card.appendChild(imgDiv) 
        card.appendChild(h3) 
        card.appendChild(category) 
        card.appendChild(des) 
        card.appendChild(price) 
 
        cards.appendChild(card) 
    } 
}