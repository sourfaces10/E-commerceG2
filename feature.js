document.getElementById("free-shipping").addEventListener("click", function() {
  // Handle click event for Free Shipping feature
  displayFreeShippingMessage();
});

function displayFreeShippingMessage() {
  var message = "Enjoy free shipping on all orders!";
  alert(message);
}

document.getElementById("promo-sales").addEventListener("click", function() {
  // Handle click event for Promo Sales feature
  displayPromoCodes();
});

function displayPromoCodes() {
  var promoCodes = [
    {
      code: "SUMMER20",
      description: "Get 20% off on summer collection items."
    },
    {
      code: "ROLE50",
      description: "Get 50% off on selected sale items."
    }
  ];

  var promoCodesMessage = "Available Promo Codes:\n\n";

  promoCodes.forEach(function(promoCode) {
    promoCodesMessage += "Code: " + promoCode.code + "\n";
    promoCodesMessage += "Description: " + promoCode.description + "\n\n";
  });

  var enteredCode = prompt(promoCodesMessage + "Enter a promo code:");
  if (enteredCode) {
    applyPromoCode(enteredCode);
  }
}

function applyPromoCode(code) {
  var promoCodes = [
    {
      code: "SUMMER20",
      discount: 0.2
    },
    {
      code: "ROLE50",
      discount: 0.5
    }
  ];

  var matchedPromoCode = promoCodes.find(function(promoCode) {
    return promoCode.code === code;
  });

  if (matchedPromoCode) {
    var discount = matchedPromoCode.discount;
    // Apply the discount to the cart or perform the desired action
    // Example: Display a success message with the applied discount
    var message = "Promo code " + code + " applied successfully! You get a " + (discount * 100) + "% discount on your order.";
    alert(message);
  } else {
    var message = "Invalid promo code entered. Available promo codes: " + promoCodes.map(function(promoCode) { return promoCode.code; }).join(", ");
    alert(message);
  }
}

document.getElementById("vouchers").addEventListener("click", function() {
  // Handle click event for Vouchers feature
  displayVouchers();
});

function displayVouchers() {
  var vouchers = [
    {
      code: "VOUCHER10",
      description: "Get ₱10 off on your next purchase."
    },
    {
      code: "VOUCHER20",
      description: "Get ₱20 off on orders above ₱100."
    }
  ];

  var vouchersMessage = "Available Vouchers:\n\n";

  vouchers.forEach(function(voucher) {
    vouchersMessage += "Code: " + voucher.code + "\n";
    vouchersMessage += "Description: " + voucher.description + "\n\n";
  });

  var enteredCode = prompt(vouchersMessage + "Enter a voucher code:");
  if (enteredCode) {
    applyVoucherCode(enteredCode);
  }
}

function applyVoucherCode(code) {
  var vouchers = [
    {
      code: "VOUCHER10",
      discount: 10
    },
    {
      code: "VOUCHER20",
      discount: 20
    }
  ];

  var matchedVoucher = vouchers.find(function(voucher) {
    return voucher.code === code;
  });

  if (matchedVoucher) {
    var discount = matchedVoucher.discount;
    // Apply the discount to the cart or perform the desired action
    // Example: Display a success message with the applied discount
    var message = "Voucher code " + code + " applied successfully! You get ₱" + discount + " off on your order.";
    alert(message);
  } else {
    var message = "Invalid voucher code entered. Available voucher codes: " + vouchers.map(function(voucher) { return voucher.code; }).join(", ");
    alert(message);
  }
}

document.getElementById("coin-rewards").addEventListener("click", function() {
  // Handle click event for Coin Rewards feature
  displayCoinRewards();
});

function displayCoinRewards() {
  // Fetch the user's coin rewards balance from the server or local storage
  // Example: Get the balance from a mock API response
  var balance = getCoinBalance();
  var message = "You have " + balance + " coins in your rewards balance.";
  alert(message);
}

function getCoinBalance() {
  // Get the coin balance from the server or local storage
  // Example: Retrieve the balance from a mock API response or storage
  var balance = localStorage.getItem("coinBalance");

  // Check if the balance exists in storage
  if (balance !== null) {
    return parseInt(balance);
  }

  // If balance doesn't exist, set the signing bonus as the initial balance
  balance = 100;
  localStorage.setItem("coinBalance", balance);
  return balance;
}

function addCoinsForShoesOrder() {
  // Assuming this function is called when a pair of shoes is ordered
  var balance = getCoinBalance();
  balance += 10;
  localStorage.setItem("coinBalance", balance);
  alert("Congratulations! 10 coins have been added to your rewards balance.");
}


document.getElementById("cashback").addEventListener("click", function() {
  // Handle click event for 5% Cashback feature
  displayCashbackMessage();
});

function displayCashbackMessage() {
  var message = "Get 5% cashback on your purchases!";
  alert(message);
}

document.getElementById("chat-support").addEventListener("click", function() {
  // Handle click event for Chat Support feature
  openChatWidget();
});

function openChatWidget() {
  var telegramUsername = "SourfaceDuplexWU";
  var telegramURL = "https://telegram.me/" + telegramUsername;

  // Open the Telegram link in a new window/tab
  window.open(telegramURL, "_blank");

  // Display a message indicating that the chat support is available
  var message = "Chat support is available. You will be redirected to Telegram.";
  alert(message);
}