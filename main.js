import {foodData} from "/data.js"

const header = document.getElementById("header")
const main = document.getElementById("main")
const order = []
// const randomId = generateRandomId()

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

// function generateRandomId(){
//     const timeStamp = Date.now()
//     const random = Math.floor(Math.random() * 1000)
//     return `${timeStamp}-${random}`
// }

function getItemFromFoodData(itemIdSelected){
    const foodItem = foodData.filter(function(item){
        return item.itemId === itemIdSelected
    })
    order.push(foodItem[0])
    
}

document.addEventListener("click", (e)=> {
        if(e.target.classList.contains("add-btn")){
        getItemFromFoodData(e.target.id)
        const orderSection = document.getElementById("order-section")
        
        if(!orderSection){
            main.innerHTML += `
            <section class="order-section" id="order-section">
                <div class="order-section-header" id="order-section-header">
                    <h3>Your order</h3>
                </div>
                <div class="main-order-section" id="main-order-section">
                                 
                </div>
                <div class="total-price-section" id="total-price-section">
                                    
                </div>
                <button class="complete-order-btn" id="complete-order-btn">
                    Complete order
                </button>          
            </section>
        `
        }

        function addToOrder(){
            order.forEach((orderItem)=>{
                        mainOrderSection.innerHTML += `
                                <div class="itemAndPrice">
                                    <div class="order-item-remove" id="order-item-remove">
                                        <div>${orderItem.item}</div>
                                        <button class="removeBtn" id="${orderItem.item}">
                                            Remove
                                        </button>
                                    </div>
                                    <div>$${orderItem.price}</div>
                                </div>
                        `
            })
        }
        
        function addToTotalPrice(){        
            let totalPrice = 0
            order.forEach((orderItem)=>{
                totalPrice += orderItem.price
                totalPriceSection.innerHTML = `
                    <p>Total:</p>
                    <p>$${totalPrice}</p>              
                `                
            })
        }
       
        const mainOrderSection = document.getElementById("main-order-section")
        const totalPriceSection = document.getElementById("total-price-section")
        mainOrderSection.innerHTML = ``
        totalPriceSection.innerHTML = ``
        addToOrder()
        addToTotalPrice()
    }
})
