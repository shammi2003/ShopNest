// Add to Cart
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price, image });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart!');
}

// Display Cart
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartHTML = '';
    cart.forEach((item, index) => {
        cartHTML += `
            <div>
                <img src="${item.image}" width="50" />
                ${item.name} - $${item.price}
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>`;
    });
    document.getElementById('cart').innerHTML = cartHTML;
}

// Remove from Cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Checkout Form Submission
document.getElementById('checkout-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Order placed successfully (COD)');
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
});

// Initialize Cart Display
if (window.location.pathname.includes('cart.html')) {
    displayCart();
}
