let cart = [];
let totalPrice = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const totalPriceElement = document.getElementById("totalPrice");

    cartItems.innerHTML = cart.map(({ item, price }) => 
        `<li>${item} - $${price.toFixed(2)}</li>`
    ).join("");

    totalPriceElement.innerText = totalPrice.toFixed(2);
}
function showOrderForm() {
    document.getElementById("orderFormModal").style.display = "block";
}

function closeOrderForm() {
    document.getElementById("orderFormModal").style.display = "none";
}

function submitOrder() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const totalPrice = document.getElementById("totalPrice").innerText;

    if (name && email && phone && address) {
        alert(`Thank you, ${name}! Your order totaling $${totalPrice} has been placed,you will recieve your order soon!`);
        closeOrderForm();
        document.getElementById("orderForm").reset();
    } else {
        alert("Please fill in all fields.");
    }
}

function placeOrder() {
    showOrderForm();
    
}
