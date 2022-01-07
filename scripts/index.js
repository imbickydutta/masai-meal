let arr = JSON.parse(localStorage.getItem("meals")) || [];
let cartArr = JSON.parse(localStorage.getItem("cartArr")) || [];
cartQuantity();
function cartQuantity() {
    let total = cartArr.length;

    let myCart = document.getElementById("myCart");
    myCart.innerHTML = "My Cart ( " + total + " )";
}

var url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";

async function getMeals() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        arr = data.meals;
        localStorage.setItem("meals", JSON.stringify(arr));
        display(arr);
    } catch (error) {
        console.log(error);
    }
}

if (arr.length == 0) {
    getMeals();
} else {
    display(arr);
}

function display(arr) {
    arr.map(function (el, index) {
        if (el.price == undefined) {
            el.price = Math.round(Math.random() * 50) * 10;
            el.rating = Math.round(Math.random() * 5);
        }

        //   console.log(el.price);

        let item = document.createElement("div");
        item.className = "item";
        item.innerHTML = `
        <img src="${el.strMealThumb}" alt="" />
        <h3>${el.strMeal}</h3>
        <p>Rating ${el.rating}⭐</p>
        <p>₹${el.price}</p>
        <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        document.getElementById("menu").appendChild(item);
    });

    localStorage.setItem("meals", JSON.stringify(arr));
}

function addToCart(index) {
    cartArr.push(arr[index]);
    localStorage.setItem("cartArr", JSON.stringify(cartArr));
    // console.log(cartArr);
    cartQuantity();
}