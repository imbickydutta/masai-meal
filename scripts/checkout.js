let arr = JSON.parse(localStorage.getItem("cart")) || [];
cartQuantity();

function cartQuantity() {
    let total = arr.length;

    let myCart = document.getElementById("myCart");
    myCart.innerHTML = "My Cart ( " + total + " )";
}

function placeOrder(e) {
    e.preventDefault();
    arr = [];

    localStorage.setItem("cart", JSON.stringify(arr));
    cartQuantity();

    alert("Order Accepted");

    setTimeout(function () {
        alert("Your order is being cooked");
    }, 3000);

    setTimeout(function () {
        alert("Your order is ready");
    }, 8000);

    setTimeout(function () {
        alert("Order Out For Delivery");
    }, 10000);

    setTimeout(function () {
        alert("Order Delivered");

        window.location.href = "index.html";
    }, 12000);
}