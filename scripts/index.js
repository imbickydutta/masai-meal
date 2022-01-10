let arr = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cartQuantity();
function cartQuantity() {
    let total = cart.length;

    // let myCart = document.getElementById("myCart");
    let cartCount = document.getElementById("count");
    cartCount.innerHTML = total;
    // myCart.innerHTML = "My Cart ( " + total + " )";
}

var url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";

async function getMeals() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        arr = data.meals;
        // localStorage.setItem("meals", JSON.stringify(arr));
        display(arr);
    } catch (error) {
        console.log(error);
    }
}

getMeals()

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
        <button id="addtocart" onclick="addToCart(${index})">Add to Cart</button>
        `;
        document.getElementById("menu").appendChild(item);
    });

    localStorage.setItem("meals", JSON.stringify(arr));
}

function addToCart(index) {
    cart.push(arr[index]);
    localStorage.setItem("cart", JSON.stringify(cart));
    // console.log(cartArr);
    cartQuantity();
}