var cart = JSON.parse(localStorage.getItem("cart"));

if (cart == null) {
  cart = [
    { name: "Bears", price: 350, qty: 1 },
    { name: "Bags", price: 450, qty: 2 }
  ];
}

var cartItemsDiv = document.getElementById("cart-items");
var totalSpan = document.getElementById("total");

function renderCart() {
  cartItemsDiv.innerHTML = "";
  var total = 0;

  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var subtotal = item.price * item.qty;
    total = total + subtotal;

    cartItemsDiv.innerHTML =
      cartItemsDiv.innerHTML +
      "<div class='profile-item'>" +
      "<p><strong>" + item.name + "</strong></p>" +
      "<p>Price: ₱" + item.price + "</p>" +
      "<input type='number' min='1' value='" + item.qty +
      "' onchange='updateQty(" + i + ", this.value)'>" +
      "<p>Subtotal: ₱" + subtotal + "</p>" +
      "<button onclick='removeItem(" + i + ")'>Remove</button>" +
      "</div>";
  }

  totalSpan.innerHTML = total;
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateQty(index, value) {
  cart[index].qty = value;
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

function goToPayment() {
  window.location.href = "payment.html";
}

renderCart();
