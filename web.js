// Product Data
const products = [
  { id: 1, name: "Wireless Headphones", price: 1999 },
  { id: 2, name: "Smart Watch", price: 2499 },
  { id: 3, name: "Gaming Mouse", price: 1499 },
  { id: 4, name: "Bluetooth Speaker", price: 1299 },
  { id: 5, name: "Mechanical Keyboard", price: 2999 },
  { id: 6, name: "Power Bank", price: 999 },
];

const wishlist = [];
const orders = [];

// Section switch
function showSection(id) {
  document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Product rendering
const productList = document.getElementById("product-list");
products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product";
  card.innerHTML = `
    <img src="https://via.placeholder.com/120?text=${encodeURIComponent(p.name)}" alt="${p.name}">
    <h4>${p.name}</h4>
    <p>₹${p.price}</p>
    <button onclick="addToWishlist(${p.id})">❤️ Wishlist</button>
    <button onclick="placeOrder(${p.id})">🛒 Buy Now</button>
  `;
  productList.appendChild(card);
});

// Wishlist
function addToWishlist(id) {
  const product = products.find(p => p.id === id);
  if (!wishlist.includes(product.name)) wishlist.push(product.name);
  document.getElementById("wishlist").innerHTML = wishlist.map(i => `<li>${i}</li>`).join("");
  alert(`${product.name} added to wishlist!`);
}

// Orders
function placeOrder(id) {
  const product = products.find(p => p.id === id);
  orders.push(product.name);
  document.getElementById("orders").innerHTML = orders.map(i => `<li>${i}</li>`).join("");
  alert(`Order placed for ${product.name}!`);
}

// Registration Validation
document.getElementById("registerForm").addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  if (!email.includes("@")) {
    document.getElementById("regError").textContent = "Invalid email format!";
    return;
  }
  if (password.length < 6) {
    document.getElementById("regError").textContent = "Password must be ≥ 6 characters.";
    return;
  }
  document.getElementById("regError").textContent = "";
  alert("Registration successful!");
});

// Login Validation
document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (email === "" || password === "") {
    document.getElementById("loginError").textContent = "All fields required!";
    return;
  }
  document.getElementById("loginError").textContent = "";
  alert("Login successful!");
});
