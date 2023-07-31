import {foodData} from "/data.js"

const header = document.getElementById("header")
const main = document.getElementById("main")
const addItem = document.getElementById("order-section")

header.innerHTML = `
    <div class="title">
        <h1>Jimmy's Diner</h1>
        <h4>The best burgers and pizza's in town.</h4>
    </div>
`
foodData.forEach((item) => {
    main.innerHTML += `
        <section class="item-section" id="item-section">
                <img src="${item.image}" alt="${item.item}" class="item-image" id="item-image">
                    <div class="item-div">
                        <h2 class="item-header">${item.item}</h2>
                        <p class="item-ingredients">${item.description}</p>
                        <h3 class="price">${item.price}</h3>
                    </div>
                <img src="${item.add}" alt="add button" class="add-btn" id="${item.itemId}">
            </section>
    `
});
const itemsArray = []
function getItem(items){
    const orderItems = items.filter((item)=>{
        if(item === itemId){
            itemsArray.push(item)
        }
    })
    console.log(itemsArray)
}


document.addEventListener("click", (e)=> {
       getItem(e.target.id)

        main.innerHTML += `
            <section class="order-section" id="order-section">
                <div class="order-section-header" id="order-section-header">
                    <h3>Your order</h3>
                </div>
                <div class="added-item-remove" id="added-item-remove">

                </div>
                <button class="complete-order-btn" id="complete-order-btn">
                        Complete order
                </button>          
        </section>
        `
        })
// Work on displaying text in order section, .filter and .include method.