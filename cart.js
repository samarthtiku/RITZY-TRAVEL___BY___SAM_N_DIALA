// cart.js


const cartItems = [
    { id: 1, name: 'Packege 1', price: 50 },
    { id: 2, name: 'Packege 2', price: 30 },

];

document.addEventListener('DOMContentLoaded', function() {
    displayCartItems();
});

function displayCartContents() {
    // Retrieve cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Clear existing content
    cartContainer.innerHTML = '';

    // Display each item in the cart
    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `<p>${item.name} - $${item.price}</p>`;
        cartContainer.appendChild(itemDiv);
    });
}

function updateTotal() {
    const totalContainer = document.getElementById('total');
    const total = calculateTotal();
    totalContainer.innerHTML = `Total: $${total.toFixed(2)}`;
}

function calculateTotal() {
    
    return cartItems.reduce((total, item) => total + item.price, 0);
}

function clearCart() {
    // Implement this function to clear the cart
    cartItems.length = 0;
    displayCartItems(); 
    updateTotal(); 
}

function checkout() {
    // Update the total before processing the order
    updateTotal();

    const database = firebase.database();

    // Create a reference to the 'orders' node in your database
    const ordersRef = database.ref('orders');

    // Create a new order object
    const order = {
        items: cartItems,
        total: calculateTotal(), // Calculate the total again before checkout
        timestamp: firebase.database.ServerValue.TIMESTAMP, // Add a timestamp for the order
    };

    // Push the order to the 'orders' node in the database
    ordersRef.push(order)
        .then(() => {
            // Clear the cart after a successful order
            clearCart();
            alert('Order placed successfully!'); 
        })
        .catch(error => {
            console.error('Error placing order:', error);
            alert('Error placing order. Please try again.');
        });
}
