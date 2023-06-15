if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  // Quantity Changes
  var quantityInputs = document.getElementsByClassName('cart-quantity-input');
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  // Add to Cart
  var addToCartButtons = document.querySelectorAll('.pro button');
  for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', addCartClicked);
  }
  
  // Retrieve stored cart items
  var storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Display stored cart items
  var cartItems = document.querySelector('#cart .cart-items');
  for (var i = 0; i < storedCartItems.length; i++) {
    var cartItem = storedCartItems[i];

    var cartRow = document.createElement('tr');
    cartRow.innerHTML = `
      <td><a href="#"><i class="far fa-times-circle cart-remove"></i></a></td>
      <td><img src="${cartItem.productImg}" alt="" class="cart-item-image" /></td>
      <td class="cart-item-title">${cartItem.title}</td>
      <td class="cart-price">${cartItem.price}</td>
      <td><input type="number" value="1" class="cart-quantity-input"></td>
    `;
    cartItems.appendChild(cartRow);
  }

  updateTotal();

  // Remove Items From Cart (event delegation)
  cartItems.addEventListener('click', function(event) {
    if (event.target.classList.contains('cart-remove')) {
      var buttonClicked = event.target;
      var cartRow = buttonClicked.closest('tr');
      cartRow.remove();
      updateTotal();

      // Update the cart items in localStorage after removing an item
      var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      var title = cartRow.querySelector('.cart-item-title').innerText;

      // Find the index of the item to remove
      var index = -1;
      for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].title === title) {
          index = i;
          break;
        }
      }

      // Remove the item from the cartItems array
      if (index !== -1) {
        cartItems.splice(index, 1);
      }

      // Update the cart items in localStorage after removing an item
      localStorage.setItem('cartItems', JSON.stringify(cartItems));

      updateCartCount();
      updateTotal();
    }
  });
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}

function addCartClicked(event) {
  var button = event.target;
  var shopProduct = button.closest('.pro');
  var title = shopProduct.querySelector('h5').innerText;
  var price = shopProduct.querySelector('h4').innerText;
  var productImg = shopProduct.querySelector('img').getAttribute('src');
  addProductToCart(title, price, productImg);
  updateTotal();
}

function addProductToCart(title, price, productImg) {
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  for (var i = 0; i < cartItems.length; i++) {
    if (cartItems[i].title === title) {
      alert("You have added this item to the cart.");
      return;
    }
  }

  var cartItem = {
    title: title,
    price: price,
    productImg: productImg
  };

  cartItems.push(cartItem);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  updateCartCount();
  updateTotal();
}


function updateTotal() {
  var cartRows = document.querySelectorAll('.cart-items tr');
  var subtotal = 0;

  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.querySelector('.cart-price');
    var priceText = priceElement.innerText.trim(); // Remove leading/trailing whitespace
    var priceMatch = priceText.match(/\d+(,\d+)?(\.\d+)?/);
    var price = priceMatch ? parseFloat(priceMatch[0].replace(/,/g, '')).toFixed(2) : 0;



    if (isNaN(price)) {
      console.error('Invalid price:', priceText);
      continue;
    }

    var quantityElement = cartRow.querySelector('.cart-quantity-input');
    var quantity = parseInt(quantityElement.value);

    if (isNaN(quantity)) {
      console.error('Invalid quantity:', quantityElement.value);
      continue;
    }

    subtotal += price * quantity;
  }

  var subtotalElement = document.querySelector('#subtotal table tr:nth-child(1) td:nth-child(2)');
  subtotalElement.innerText = '₱ ' + subtotal.toFixed(2); // Format the subtotal with 2 decimal places

  var shippingElement = document.querySelector('#subtotal table tr:nth-child(2) td:nth-child(2)');
  shippingElement.innerText = '₱ 0';

  var total = subtotal; // Modify this line to calculate the total including shipping if needed

  var totalElement = document.querySelector('#subtotal table tr:nth-child(3) td:nth-child(2) strong');
  totalElement.innerText = '₱ ' + total.toFixed(2); // Format the total with 2 decimal places
  // Store the total amount in localStorage
  localStorage.setItem('totalAmount', total.toFixed(2));
}


function updateCartCount() {
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  var cartCount = document.querySelector('#cart-count');
  cartCount.innerText = cartItems.length;
}

var totalAmount = localStorage.getItem('totalAmount');
    document.getElementById('totalAmount').innerText = '₱ ' + totalAmount;

