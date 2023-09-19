import { params } from "./variable.js";
import { draw } from "./draw.js";
import { category } from "./category.js";

category();



// VE GIAO DIEN
draw();
// VE GIAO DIEN

// SEARCH
const inputSearch = document.querySelector("#search input")
const buttonSearch = document.querySelector("#search button")
buttonSearch.addEventListener("click", () => {
    params.search = inputSearch.value;
    draw();
})

inputSearch.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        params.search = inputSearch.value;
        draw();
    }
})
// SEARCH

// PHAN TRANG

const prev = document.getElementById("pagination-prev");
const nums = document.getElementById("pagination-number");
const next = document.getElementById("pagination-next");

next.addEventListener("click", () => {
    if (params.page < params.max) {
        params.page += 1;
        nums.innerHTML = params.page;
        draw();
    }
})

prev.addEventListener("click", () => {
    if (params.page > 1) {
        params.page -= 1;
        nums.innerHTML = params.page;
        draw();
    }
})

// PHAN TRANG

// Sort

const render = document.getElementById("fifter");
render.addEventListener("change", (e) => {
    const value = e.target.value;
    switch (value) {
        case "mac-dinh":
            params.sort = "";
            params.order = "";
            break;
        case "gia-thap-den-cao":
            params.sort = "price";
            params.order = "asc";
            break;
        case "gia-cao-den-thap":
            params.sort = "price";
            params.order = "desc";
            break;
        case "giam-gia-nhieu":
            params.sort = "discountPercentage";
            params.order = "desc";
            break;
    }
    draw();
})

// Sort

