// Global variables
let currentLang = localStorage.getItem('lang') || 'en';

// Load products from localStorage or use default
let products = loadProductsFromStorage();

// Function to load products from storage
function loadProductsFromStorage() {
  try {
    const storedProducts = localStorage.getItem('adminProducts');
    if (storedProducts) {
      const parsedProducts = JSON.parse(storedProducts);
      // Merge with default products
      const defaultProducts = window.defaultProducts || [];
      return [...defaultProducts, ...parsedProducts];
    }
  } catch (e) {
    console.warn('Error loading products from storage:', e);
  }
  // Return default products if nothing in storage
  return window.defaultProducts || [];
}

// Function to get next product ID
function getNextProductId() {
  const allProducts = loadProductsFromStorage();
  const maxId = allProducts.length > 0 ? Math.max(...allProducts.map(p => p.id || 0)) : 106;
  return maxId + 1;
}

// Function to save products to storage
function saveProductsToStorage() {
  try {
    localStorage.setItem('adminProducts', JSON.stringify(products));
  } catch (e) {
    console.warn('Error saving products to storage:', e);
  }
}

// Load translations
function getText(key) {
  return translations[currentLang][key] || key;
}

// Switch language
function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  updateUI();
}

// Update all UI text
function updateUI() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = getText(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = getText(key);
  });
  // Re-render dynamic content if needed
  if (document.getElementById('products-container')) renderProducts();
  if (document.getElementById('product-details')) renderProductDetails();
  if (document.getElementById('cart-items')) renderCart();
}

// Render products in shop instantly
function renderProducts() {
  const container = document.getElementById('products-container');
  if (!container) return;

  // Refresh products from storage to ensure we have the latest
  products = loadProductsFromStorage();

  // Clear container
  container.innerHTML = '';

  // Render all products immediately without pagination
  products.forEach(product => {
    const card = createProductCard(product);
    container.appendChild(card);
  });

  updateUI();
}

// Create product card instantly
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name[currentLang]}" onerror="this.src='images/product-placeholder.jpg'">
    <div class="product-info">
      <h3>${product.name[currentLang]}</h3>
      <p>${product.shortDesc[currentLang]}</p>
      <div class="npk">NPK: ${product.npk}</div>
      <div class="price">₹${product.priceINR}</div>
      <div class="card-actions">
        <button onclick="addToCart(${product.id}, 1)" data-i18n="addToCart">Add to Cart</button>
        <button onclick="openProduct(${product.id})" data-i18n="viewProduct">View Product</button>
      </div>
    </div>
  `;

  return card;
}


// Open product page
function openProduct(id) {
  window.location.href = `product2.html?id=${id}`;
}

// Render product details
function renderProductDetails() {
  const container = document.getElementById('product-details');
  if (!container) return;

  // Refresh products from storage
  products = loadProductsFromStorage();

  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get('id'));
  const product = products.find(p => p.id === id);
  if (!product) return;

  container.innerHTML = `
    <div class="product-detail">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name[currentLang]}">
      </div>
      <div class="product-info">
        <h1>${product.name[currentLang]}</h1>
        <div class="rating">${generateStars(product.rating)} (${product.reviews} reviews)</div>
        <div class="price">₹${product.priceINR}</div>
        <p>${product.longDesc[currentLang]}</p>

        <div class="specs">
          <h3>Product Specifications</h3>
          <div class="spec-item"><strong>NPK:</strong> ${product.npk}</div>
          <div class="spec-item"><strong>Weight:</strong> ${product.weightKg}kg</div>
          <div class="spec-item"><strong>Form:</strong> ${product.form}</div>
          <div class="spec-item"><strong>Composition:</strong> ${product.composition}</div>
          <div class="spec-item"><strong>Crop Suitability:</strong> ${product.cropSuitability.join(', ')}</div>
          <div class="spec-item"><strong>Dosage:</strong> ${product.dosage}</div>
        </div>

        <div class="benefits">
          <h3>Benefits</h3>
          <ul>
            ${product.benefits.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>

        <div class="directions">
          <h3 data-i18n="directions">Usage Instructions</h3>
          <p>${product.directions[currentLang]}</p>
        </div>

        <div class="safety">
          <h3>Safety Information</h3>
          <p>${product.safetyInfo}</p>
        </div>

        <div class="certifications">
          <span data-i18n="isoCertified">ISO Certified</span>
          <span data-i18n="ecoFriendlyCert">Eco-Friendly</span>
          <span data-i18n="farmerApproved">Farmer Approved</span>
        </div>

        <div class="agronomist-cta">
          <p>Need help choosing the right fertilizer for your crops?</p>
          <button onclick="contactAgronomist(${product.id})">Contact our Agronomist</button>
        </div>

        <div class="quantity">
          <label data-i18n="quantity">Quantity</label>
          <input type="number" id="qty" min="1" max="10" value="1">
        </div>
        <button onclick="addToCart(${product.id}, parseInt(document.getElementById('qty').value)); window.location.href='cart2.html';" data-i18n="buyNow">Buy Now</button>
        <button onclick="addToCart(${product.id}, parseInt(document.getElementById('qty').value))" data-i18n="addToCart">Add to Cart</button>
      </div>
    </div>
    <div class="related-products">
      <h2 data-i18n="relatedProducts">Customers also bought</h2>
      <div class="carousel" id="related-container">
        <button class="carousel-btn prev" onclick="moveCarousel(-1)">&#10094;</button>
        <div class="carousel-inner">
          <div class="carousel-track" id="carousel-track"></div>
        </div>
        <button class="carousel-btn next" onclick="moveCarousel(1)">&#10095;</button>
      </div>
    </div>
  `;

  // Related products (6 for carousel)
  const related = products.filter(p => p.id !== id).sort(() => 0.5 - Math.random()).slice(0, 6);
  const carouselTrack = document.getElementById('carousel-track');
  carouselTrack.innerHTML = '';
  related.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card carousel-item';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name[currentLang]}">
      <h4>${p.name[currentLang]}</h4>
      <div class="rating">${generateStars(p.rating)}</div>
      <div class="price">₹${p.priceINR}</div>
      <button onclick="openProduct(${p.id})" data-i18n="viewDetails">View Details</button>
    `;
    carouselTrack.appendChild(card);
  });

  updateUI();
}

// Add to cart
function addToCart(id, qty) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id, qty });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(getText('addToCart') + ' successful!');
}

// Render cart
function renderCart() {
  const container = document.getElementById('cart-items');
  if (!container) return;
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) {
    container.innerHTML = '<p>Your cart is empty.</p>';
    document.getElementById('checkout-form').style.display = 'none';
    return;
  }
  container.innerHTML = '';
  let subtotal = 0;
  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    const total = product.priceINR * item.qty;
    subtotal += total;
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <img src="${product.image}" alt="${product.name[currentLang]}">
      <div>
        <h4>${product.name[currentLang]}</h4>
        <p data-i18n="quantity">Quantity</p>: ${item.qty}
        <p data-i18n="price">Price</p>: ₹${product.priceINR}</p>
        <p data-i18n="total">Total</p>: ₹${total}</p>
      </div>
      <button onclick="removeFromCart(${item.id})" data-i18n="remove">Remove</button>
    `;
    container.appendChild(row);
  });
  const shipping = subtotal < 999 ? 50 : 0;
  const total = subtotal + shipping;
  document.getElementById('subtotal').textContent = `₹${subtotal}`;
  document.getElementById('shipping').textContent = shipping === 0 ? getText('freeShipping') : `₹${shipping}`;
  document.getElementById('total').textContent = `₹${total}`;
  updateUI();
}

// Remove from cart
function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

// Checkout
function checkout() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  if (!name || !phone || !address) {
    alert('Please fill all fields');
    return;
  }
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) {
    alert('Cart is empty');
    return;
  }
  // Construct WhatsApp message
  let message = `New Order from ${name}\nPhone: ${phone}\nAddress: ${address}\n\nItems:\n`;
  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    message += `${product.name.en} (Qty: ${item.qty}) - ₹${product.priceINR * item.qty}\n`;
  });
  const subtotal = cart.reduce((sum, item) => sum + (products.find(p => p.id === item.id).priceINR * item.qty), 0);
  const shipping = subtotal < 999 ? 50 : 0;
  const total = subtotal + shipping;
  message += `\nSubtotal: ₹${subtotal}\nShipping: ₹${shipping}\nTotal: ₹${total}\n\nPlease confirm payment and delivery.`;

  // Encode message
  const encodedMessage = encodeURIComponent(message);
  // WhatsApp link
  const whatsappURL = `https://wa.me/918866753519?text=${encodedMessage}`;

  // Clear cart
  localStorage.removeItem('cart');

  // Redirect to WhatsApp
  window.location.href = whatsappURL;
}

// Scroll animations
function handleScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

// Carousel functionality
let currentSlide = 0;
function moveCarousel(direction) {
  const track = document.getElementById('carousel-track');
  if (!track) return;
  const items = track.children;
  const totalSlides = Math.ceil(items.length / 3); // 3 items per slide
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Contact agronomist
function contactAgronomist(productId) {
  const product = products.find(p => p.id === productId);
  const message = `I need help choosing fertilizer for my crops. Product: ${product.name.en}. Please advise.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/918866753519?text=${encodedMessage}`;
  window.location.href = whatsappURL;
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  updateUI();
  if (document.getElementById('products-container')) renderProducts();
  if (document.getElementById('product-details')) renderProductDetails();
  if (document.getElementById('cart-items')) renderCart();

  // Add scroll animations
  window.addEventListener('scroll', handleScrollAnimations);
  handleScrollAnimations(); // Initial check
});