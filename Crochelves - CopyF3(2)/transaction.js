var cart = JSON.parse(localStorage.getItem("cart"));

var receiptDiv = document.getElementById("receipt-items");
var totalSpan = document.getElementById("total");
var dateTime = document.getElementById("dateTime");

var total = 0;

var now = new Date();
dateTime.innerHTML = now.toLocaleString();

if (cart != null) {
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var subtotal = item.price * item.qty;
    total = total + subtotal;

    receiptDiv.innerHTML =
      receiptDiv.innerHTML +
      "<div class='profile-item'>" +
      "<p>" + item.name + " x " + item.qty + "</p>" +
      "<p>₱" + subtotal + "</p>" +
      "</div>";
  }
}

totalSpan.innerHTML = total;
