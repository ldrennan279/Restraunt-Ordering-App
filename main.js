import {foodData} from "/data.js"

const header = document.getElementById("header")
const main = document.getElementById("main")

header.innerHTML = `
    <div class="title">
        <h1>Jimmy's Diner</h1>
        <h4>The best burgers and pizza's in town.</h4>
    </div>
`
foodData.forEach((item) => {
    main.innerHTML = `
        <section class="item-section" id="item-section">
                <img src="${item.image}" alt="${item.item}" class="item-image" id="item-image">
                    <div class="item-div">
                        <h2 class="item-header">${item.item}</h2>
                        <p class="item-ingredients">${item.description}</p>
                        <h3 class="price">${item.price}</h3>
                    </div>
                <img src="${item.add}" alt="add button" class="add-btn" id="add-btn">
            </section>
    `
});