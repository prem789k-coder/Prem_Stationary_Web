let cart = [];
let totalPrice = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    totalPrice += price;
    updateCart();

    /*    // Show add-to-cart confirmation message 
        let cartMessage = document.getElementById("cart-message1");
        cartMessage.textContent = `"${product}" has been added to your cart!`;
        
        // Remove message after 1 seconds
        setTimeout(() => {
            cartMessage.textContent = "";
         }, 2000);  */
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let totalElement = document.getElementById("total-price");
    cartItems.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.product} - Rs.${item.price}`;
        cartItems.appendChild(li);
    });
    totalElement.textContent = totalPrice;
}

function placeOrder() {
    if (cart.length > 0) {
        document.getElementById("order-message").textContent = "Your order has been placed successfully!";
        cart = [];
        totalPrice = 0;
        updateCart();
    } else {
        document.getElementById("order-message").textContent = "Your cart is empty!";
    }
}

document.querySelectorAll('.product-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});
document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}