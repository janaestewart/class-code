
const items = [
    {
        name: 'Beef Soup',
        price: '$5.99'
    },
    {
        name: 'Chicken Salad',
        price: '$7.99'
    },
    {
        name: 'Sandwhich',
        price: '$5.99' 
    }
]


const mealDivs = items.map((meal) => {
    return `<div class="box">
        <p>${meal.name}</p>
        <p>${meal.price}</p>
    </div>`
}).join("");

let container = document.getElementById("container");
container.innerHTML = mealDivs;