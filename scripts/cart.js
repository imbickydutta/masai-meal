let arr = JSON.parse(localStorage.getItem("cart")) || [];

cartQuantity();
displayCartItems();
function cartQuantity() {
  let total = arr.length;

  let myCart = document.getElementById("myCart");
  myCart.innerHTML = "My Cart ( " + total + " )";
}

function displayCartItems() {
  let cartItems = document.getElementById("cart");
  cartItems.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let cartItem = document.createElement("div");
    cartItem.classList.add("cart_item");
    cartItem.innerHTML = `
        <div class="cart_item_image">
          <img src="${arr[i].strMealThumb}" alt="${arr[i].name}" />
        </div>
        <div class="cart_item_info">
          <h4>${arr[i].strMeal}</h4>
          <p>₹${arr[i].price}</p>
        </div>
        <div class="cart_item_remove">
          <button id="remove-btn" class="remove_button" onclick="removeItem(${i})">Remove</button>
        </div>
      `;
    cartItems.appendChild(cartItem);
  }
}
displayCartDetails();
function displayCartDetails() {
  let cartDetails = document.getElementById("total");
  cartDetails.innerHTML = "";
  let totalPrice = arr.reduce(function (acc, el) {
    return acc + el.price;
  }, 0);
  cartDetails.innerHTML = `
      <div class="cart_details_total">
        <h1>Total ( ${arr.length} )</h1>
        <h1>₹${totalPrice}</h1>
      </div>
      <h2 class="cart_details_checkout">
        <a href="checkout.html">Check Out</a>
      </h2>
    `;
}

function removeItem(index) {
  arr.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(arr));
  displayCartDetails();
  displayCartItems();
  cartQuantity();
}