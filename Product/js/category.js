import { draw } from "./draw.js";
import { fetchApi } from "./fetchApi.js"
import { params } from "./variable.js";

const categoryy = document.getElementById("category");
export const category = () => {
    fetchApi("http://localhost:3000/category")
        .then((data) => {
            let arrayHTML = data.map((item) =>{
                return `
            <div class="category-item" data-category=${item}>   
                ${item}
            </div>
                `
            })
            const htmls = arrayHTML.join("");
            categoryy.innerHTML = htmls;
            const item = document.querySelectorAll("#category .category-item");
            item.forEach((name) => {
                name.addEventListener("click", () => {
                    const cate = name.getAttribute("data-category");
                    params.search = cate;
                    draw();
                })
            })
        })
}
