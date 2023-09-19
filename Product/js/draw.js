import { params } from "./variable.js";
import {fetchApi} from "./fetchApi.js"

const productsList = document.getElementById("products");

export const draw = () => {

    const API = `http://localhost:3000/products?q=${params.search}&_page=${params.page}&_limit=${params.limit}&_sort=${params.sort}&_order=${params.order}`

    fetchApi(API)
        .then((data) => {
            const arrayHTML = data.map((item) => {
                return `
        <div class="product-item">
            <div class="product-item__image">
                <span class="product-item__discount">
                    ${Math.round(item.discountPercentage)}%
                </span>
                <img src="${item.thumbnail}" alt="${item.title}">
            </div>
            <div class="product-item__content">
                <h3 class="product-item__title">${item.title}</h3>
                <div class="product-item__footer">
                    <span class="product-item__price">${item.price}$</span>
                    <span class="product-item__stock">Còn lại: ${item.stock} sp</span>
                </div>
            </div>
        </div>
            `
            })
            const hmlts = arrayHTML.join("");
            productsList.innerHTML = hmlts;
        })
}