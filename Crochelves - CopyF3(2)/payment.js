function confirmOrder() {
  var paymentMethods = document.getElementsByName("payment");
  var deliveryOptions = document.getElementsByName("delivery");

  var selectedPayment = "";
  var selectedDelivery = "";

  for (var i = 0; i < paymentMethods.length; i++) {
    if (paymentMethods[i].checked) {
      selectedPayment = paymentMethods[i].value;
    }
  }

  for (var j = 0; j < deliveryOptions.length; j++) {
    if (deliveryOptions[j].checked) {
      selectedDelivery = deliveryOptions[j].value;
    }
  }

  if (selectedPayment == "" || selectedDelivery == "") {
    alert("Please select a payment method and delivery option.");
  } else {
    localStorage.setItem("paymentMethod", selectedPayment);
    localStorage.setItem("deliveryOption", selectedDelivery);
    window.location.href = "transaction.html";
  }
}
