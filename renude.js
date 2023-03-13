let cart = [];
let total = 0.00;

function addItem(name, price) {
  cart.push({ name: name, price: price });
  updateCart();
}

function updateCart() {
  let cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";
  total = 0.00;
  
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let li = document.createElement("li");
    li.innerHTML = item.name + " - $" + item.price.toFixed(2);
    cartItems.appendChild(li);
    total += item.price;
  }
  
  document.getElementById("total").innerHTML = total.toFixed(2);
}

function checkout() {
  if (cart.length == 0) {
    alert("Your cart is empty!");
  } else {
    alert("Your total is: $" + total.toFixed(2));
    cart = [];
    updateCart();
  }
}