// Product Data with Multiple Images
const products = [
    {
        id: 1,
        name: "Rose Agarbatti",
        description: "Premium rose fragrance incense sticks made from natural ingredients. Each pack contains 100 high-quality sticks that burn evenly and provide long-lasting fragrance.",
        price: 150,
        originalPrice: 200,
        category: "floral",
        images: ["./image/rose_floral.jpg"],
        rating: 4.8,
        reviews: 127,
        discount: 25
    },
    {
        id: 2,
        name: "Bharat Darshan",
        description: "Pure sandalwood incense sticks crafted from authentic sandalwood powder and natural binding agents. Known for its calming properties and spiritual significance.",
        price: 250,
        originalPrice: 320,
        category: "spiritual",
        images: ["./image/bharat_darshan.jpg"],
        rating: 4.9,
        reviews: 203,
        discount: 22
    },
    {
        id: 3,
        name: "Jasmine Agarbatti",
        description: "Natural jasmine fragrance incense sticks that capture the essence of fresh jasmine flowers. Perfect for creating a romantic and peaceful environment.",
        price: 180,
        originalPrice: 230,
        category: "floral",
        images: ["./image/jasmine_agarbatti.jpg"],
        rating: 4.7,
        reviews: 89,
        discount: 22
    },
    {
        id: 4,
        name: "Neem Agarbatti",
        description: "Herbal neem incense sticks made from natural neem leaves and traditional herbs. Known for their purifying properties and mosquito repellent qualities.",
        price: 120,
        originalPrice: 150,
        category: "herbal",
        images: ["🌿", "🍃", "🌱", "🌳"],
        rating: 4.6,
        reviews: 156,
        discount: 20
    },
    {
        id: 5,
        name: "Chandan Agarbatti",
        description: "Traditional chandan fragrance incense sticks made from pure sandalwood powder. Perfect for daily prayers and meditation sessions.",
        price: 300,
        originalPrice: 380,
        category: "spiritual",
        images: ["./image/chandan_herbal.jpg"],
        rating: 4.8,
        reviews: 145,
        discount: 21
    },
    {
        id: 6,
        name: "Lemon Agarbatti",
        description: "Fresh lemon citrus fragrance incense sticks that energize and refresh your living space. Made with natural lemon essence.",
        price: 140,
        originalPrice: 175,
        category: "citrus",
        images: ["🍋", "🍊", "🌿", "💨"],
        rating: 4.5,
        reviews: 92,
        discount: 20
    },
    {
        id: 7,
        name: "Mogra Agarbatti",
        description: "Sweet mogra fragrance incense sticks with authentic flower essence. Creates a romantic and pleasant atmosphere in your home.",
        price: 200,
        originalPrice: 250,
        category: "floral",
        images: ["🌺", "🌸", "💐", "🌼"],
        rating: 4.7,
        reviews: 78,
        discount: 20
    },
    {
        id: 8,
        name: "Tulsi Agarbatti",
        description: "Sacred tulsi herbal incense sticks made from holy basil leaves. Known for their spiritual significance and air purifying properties.",
        price: 160,
        originalPrice: 200,
        category: "herbal",
        images: ["🌱", "🌿", "🍃", "🌳"],
        rating: 4.6,
        reviews: 134,
        discount: 20
    },
    {
        id: 9,
        name: "Orange Agarbatti",
        description: "Refreshing orange citrus fragrance incense sticks that uplift mood and create positive energy. Made with natural orange oils.",
        price: 145,
        originalPrice: 180,
        category: "citrus",
        images: ["🍊", "🍋", "🌅", "💨"],
        rating: 4.5,
        reviews: 87,
        discount: 19
    },
    {
        id: 10,
        name: "2IN1",
        price: 18,
        originalPrice: 20,
        category: "others",
        images: ["./image/2in1.jpg"],
        rating: 4.5,
        reviews: 50,
        discount: 10
    }
];

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let quantities = {};
let currentFilter = 'all';
let currentSort = 'default';

// Initialize quantities
products.forEach(product => {
    quantities[product.id] = 1;
});

// Initialize page
document.addEventListener('DOMContentLoaded', function () {
    displayProducts(products);
    updateCartDisplay();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Search functionality
    document.getElementById('searchInput').addEventListener('input', handleSearch);

    // Close modals when clicking outside
    document.addEventListener('click', function (event) {
        const sortModal = document.getElementById('sortModal');
        const cartSidebar = document.getElementById('cartSidebar');
        const cartIcon = document.querySelector('.cart-icon');

        // Close sort modal
        if (sortModal.classList.contains('active') &&
            !sortModal.querySelector('.sort-content').contains(event.target) &&
            !event.target.classList.contains('sort-btn')) {
            toggleSort();
        }

        // Close cart on desktop
        if (window.innerWidth >= 768 &&
            !cartSidebar.contains(event.target) &&
            !cartIcon.contains(event.target) &&
            cartSidebar.classList.contains('open')) {
            toggleCart();
        }
    });

    // Handle back button on mobile when cart is open
    window.addEventListener('popstate', function (event) {
        const cartSidebar = document.getElementById('cartSidebar');
        if (cartSidebar.classList.contains('open')) {
            toggleCart();
            history.pushState(null, null, window.location.href);
        }
    });
}

// Display Products
function displayProducts(productsToShow = products) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image" onclick="viewProductDetails(${product.id})">
                <img src="${product.images[0]}" alt="${product.name}" 
                     style="
                     width: 90%;       /* Set as per your design */
                     height: 98%;      /* Adjust height as required */
                     background: #fff;   /* Or any window background */
                     border-radius: 16px; /* Rounded corners like in the product card */
                     overflow: hidden;   /* Ensures image does not overflow corners */
                     box-shadow: 0 2px 8px rgba(0,0,0,0.1); /* Optional, for card effect */
                     position: relative;
                     display: flex;
                     align-items: center;
                     justify-content: center;
                     "
                    onerror="this.style.display='none';this.parentNode.innerHTML='${product.images[0]}';">

                ${product.discount ? `<div class="product-badge">${product.discount}% OFF</div>` : ''}
                <div class="product-rating">
                    <span>★</span>
                    <span>${product.rating}</span>
                </div>
            </div>
            <div class="product-info">
                <div class="product-name" onclick="viewProductDetails(${product.id})">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-price-section">
                    <div class="product-price">₹${product.price}</div>
                    ${product.originalPrice ? `<div class="product-original-price">₹${product.originalPrice}</div>` : ''}
                </div>
                <div class="product-actions">
                    <div class="quantity-selector">
                        <button class="quantity-btn" onclick="decreaseQuantity(${product.id})">-</button>
                        <div class="quantity-display" id="quantity-${product.id}">${quantities[product.id]}</div>
                        <button class="quantity-btn" onclick="increaseQuantity(${product.id})">+</button>
                    </div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">Add</button>
                    
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// View Product Details
function viewProductDetails(productId) {
    // In a real application, you would navigate to the product details page
    window.location.href = `product-details.html?id=${productId}`;
}

// Filter Products
function filterProducts(category) {
    currentFilter = category;
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));

    // Find and activate the clicked button
    const activeBtn = Array.from(filterBtns).find(btn =>
        btn.textContent.toLowerCase().includes(category === 'all' ? 'all products' : category)
    );
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    let filteredProducts;
    if (category === 'all') {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }

    // Apply current sort to filtered products
    const sortedProducts = applySorting(filteredProducts, currentSort);
    displayProducts(sortedProducts);

    // Update products title
    const categoryTitle = category === 'all' ? 'All Products' :
        category.charAt(0).toUpperCase() + category.slice(1) + ' Products';
    document.querySelector('.products-title').textContent = categoryTitle;
}

// Search Functionality
function toggleSearch() {
    const searchContainer = document.getElementById('searchContainer');
    const searchInput = document.getElementById('searchInput');

    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
        searchInput.focus();
    }
}

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    let filteredProducts = products;

    if (searchTerm.length > 0) {
        filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }

    // Apply current filter if not 'all'
    if (currentFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === currentFilter);
    }

    // Apply current sort
    const sortedProducts = applySorting(filteredProducts, currentSort);
    displayProducts(sortedProducts);

    // Update title based on search
    const title = searchTerm.length > 0 ?
        `Search results for "${e.target.value}"` :
        (currentFilter === 'all' ? 'All Products' :
            currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1) + ' Products');
    document.querySelector('.products-title').textContent = title;
}

// Sort Functionality
function toggleSort() {
    const sortModal = document.getElementById('sortModal');
    sortModal.classList.toggle('active');

    if (sortModal.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function sortProducts(sortType) {
    currentSort = sortType;

    // Update active sort option
    document.querySelectorAll('.sort-option').forEach(option => {
        option.classList.remove('active');
    });
    event.target.classList.add('active');

    // Get current products (filtered or all)
    let currentProducts = products;
    if (currentFilter !== 'all') {
        currentProducts = products.filter(product => product.category === currentFilter);
    }

    // Apply search filter if search is active
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm.length > 0) {
        currentProducts = currentProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }

    const sortedProducts = applySorting(currentProducts, sortType);
    displayProducts(sortedProducts);

    toggleSort();
}

function applySorting(products, sortType) {
    const productsCopy = [...products];

    switch (sortType) {
        case 'name-asc':
            return productsCopy.sort((a, b) => a.name.localeCompare(b.name));
        case 'name-desc':
            return productsCopy.sort((a, b) => b.name.localeCompare(a.name));
        case 'price-asc':
            return productsCopy.sort((a, b) => a.price - b.price);
        case 'price-desc':
            return productsCopy.sort((a, b) => b.price - a.price);
        case 'rating-desc':
            return productsCopy.sort((a, b) => b.rating - a.rating);
        default:
            return productsCopy;
    }
}

// Quantity Management
function increaseQuantity(productId) {
    quantities[productId]++;
    document.getElementById(`quantity-${productId}`).textContent = quantities[productId];
}

function decreaseQuantity(productId) {
    if (quantities[productId] > 1) {
        quantities[productId]--;
        document.getElementById(`quantity-${productId}`).textContent = quantities[productId];
    }
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const quantity = quantities[productId];

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity: quantity
        });
    }

    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartDisplay();
    showToast(`Added ${quantity} ${quantity === 1 ? 'pack' : 'packs'} of ${product.name} to cart!`);
}

// Cart Management
function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const totalAmount = document.getElementById('totalAmount');

    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';

    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <h3>Your cart is empty</h3>
                <p>Add some products to get started!</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.image}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₹${item.price} each</div>
                    <div class="cart-item-actions">
                        <div class="cart-quantity-controls">
                            <button class="cart-quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                            <span class="cart-item-quantity">${item.quantity}</span>
                            <button class="cart-quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                        </div>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalAmount.textContent = total;
}

// Update Cart Quantity
function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
        }
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    showToast('Item removed from cart');
}

// Toggle Cart
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('open');

    // Prevent body scroll when cart is open on mobile
    if (cartSidebar.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
        // Add history state for mobile back button
        if (window.innerWidth < 768) {
            history.pushState(null, null, window.location.href);
        }
    } else {
        document.body.style.overflow = '';
    }
}

// Send WhatsApp Order
function sendWhatsAppOrder() {
    if (cart.length === 0) {
        showToast('Your cart is empty! Please add some products first.');
        return;
    }

    const phoneNumber = '919507002400'; // Replace with actual WhatsApp number
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    let message = `🛒 *New Order from PAU Website*\n\n`;
    message += `*Order Details:*\n`;

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n`;
        message += `   Quantity: ${item.quantity} ${item.quantity === 1 ? 'pack' : 'packs'}\n`;
        message += `   Price: ₹${item.price} per pack\n`;
        message += `   Subtotal: ₹${item.price * item.quantity}\n\n`;
    });

    message += `*Total Amount: ₹${total}*\n\n`;
    message += `Please confirm this order and provide delivery details.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}

// Show Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Touch events for better mobile interaction
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function (e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function (e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const cartSidebar = document.getElementById('cartSidebar');
    const sortModal = document.getElementById('sortModal');

    if (cartSidebar.classList.contains('open')) {
        // Swipe down to close cart
        if (touchEndY - touchStartY > 100) {
            toggleCart();
        }
    }

    if (sortModal.classList.contains('active')) {
        // Swipe down to close sort modal
        if (touchEndY - touchStartY > 100) {
            toggleSort();
        }
    }
}

// Lazy loading for better performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '50px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply lazy loading to product cards
function applyLazyLoading() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.3s, transform 0.3s';
        observer.observe(card);
    });
}

// Override displayProducts to include lazy loading
const originalDisplayProducts = displayProducts;
displayProducts = function (productsToShow = products) {
    originalDisplayProducts(productsToShow);
    setTimeout(applyLazyLoading, 100);
};

// Keyboard shortcuts
document.addEventListener('keydown', function (e) {
    // ESC key to close modals
    if (e.key === 'Escape') {
        const cartSidebar = document.getElementById('cartSidebar');
        const sortModal = document.getElementById('sortModal');
        const searchContainer = document.getElementById('searchContainer');

        if (cartSidebar.classList.contains('open')) {
            toggleCart();
        } else if (sortModal.classList.contains('active')) {
            toggleSort();
        } else if (searchContainer.classList.contains('active')) {
            toggleSearch();
        }
    }

    // Ctrl+K or Cmd+K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchContainer = document.getElementById('searchContainer');
        const searchInput = document.getElementById('searchInput');

        if (!searchContainer.classList.contains('active')) {
            toggleSearch();
        }
        searchInput.focus();
    }
});

// Performance optimization: debounce search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Replace the direct event listener with debounced version
document.getElementById('searchInput').removeEventListener('input', handleSearch);
document.getElementById('searchInput').addEventListener('input', debounce(handleSearch, 300));

// Auto-save cart state
window.addEventListener('beforeunload', function () {
    localStorage.setItem('cart', JSON.stringify(cart));
});

// Initialize cart from localStorage on page load
function initializeCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            updateCartDisplay();
        } catch (error) {
            console.error('Error loading cart from localStorage:', error);
            cart = [];
            localStorage.removeItem('cart');
        }
    }
}

// Call initialize cart
initializeCart();