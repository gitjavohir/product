"use strict";

const searchbtn = document.querySelector(".send")
const box = document.querySelector(".info-box")
const countryInp = document.getElementById("country-inp")

console.log(countryInp.value);

searchbtn.addEventListener("click", () =>{
    let productName = countryInp.value;
    const API = `https://dummyjson.com/products/search?q=${productName} `;

    fetch(API).then((reponse) => reponse.json())
        .then((data) => {
            console.log(data.products[0]);
            box.innerHTML = `
            <img src="${data.products[0].images[0]}" alt="this-product">
            <h1 class="phone">${data.products[0].brand}</h1>
            <h1 class="phone">${data.products[0].title}</h1>
            <h3 class="phone">${data.products[0].description}</h3>
            <h3 class="phone">${data.products[0].price} $</h3>
        `
        })   
        .catch(() =>{
            box.innerHTML = `
            <h1 class="phone">Bunday telefon yo'q</h1>
            `
        })    
})
